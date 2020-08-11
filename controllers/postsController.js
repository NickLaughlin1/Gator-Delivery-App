import Post from "../models/PostModel.js";
import mongoose from 'mongoose';

export const create = async (req, res) => {

    await Post.findById({_id: req.body.replyTo}).exec(async function (err, post) {
        if (err) return res.status(400).send(err);

        if (!post.repliable) return res.status(403).send("post cannot be replied to");

        var currDate = new Date();
        let newPost = new Post({
            text: req.body.text,
            date: currDate,
            // user: req.user.uid,
            repliable: req.body.replyTo === "5f1a297a5e28d64e6c283ea0",
            replyTo: mongoose.Types.ObjectId(req.body.replyTo),
            edited: false
        });

        //console.log(req.body.replyTo);
        await newPost.save(function(err) {
            if (err) return res.status(400).send(err);
            res.json(newPost);
        });
    });
};

/* Retreive all the posts*/
export const list = (req, res) => {
  Post.find({replyTo: mongoose.Types.ObjectId(req.params.postId)}).exec(function (err, post) {
    if (err) return res.status(400).send(err);
    res.json(post);
  });
};

export const read = (req, res) => {
    //console.log("read");
    Post.findById({_id: req.params.postId}).exec(function (err, post) {
        if (err) return res.status(400).send(err);
        res.json(post);
    });
};

export const update = (req, res) => {
    Post.findById(req.body._id).then(post => {
        if (req.user.uid != post.user) {
            return res.status(403).send("you cannot edit this post");
        }
        post.text = req.body.text ? req.body.text : post.text;
        post.edited = true;
        post.editDate = new Date();
        post.save().then(data => res.json(post)).catch(err => res.status(500).send("internal error"));
    }).catch(err => res.status(404).send("item could not be found"));

};

/* Delete a post */
export const remove = (req, res) => { 
    Post.findById(req.params.postId).then(post => {
        if (req.user.uid != post.user) {
            return res.status(403).send("you cannot remove this post");
        }

        Post.aggregate().match({_id: mongoose.Types.ObjectId(req.params.postId)}).graphLookup({
            from: "posts",
            startWith: "$_id",
            connectFromField: "_id",
            connectToField: "replyTo",
            as: "children"
        })
        .project({
            _id: 0,
            vals: {
                $concatArrays: [[{_id: "$_id"}], "$children"]
            }
        })
        .unwind("vals").project({_id: "$vals._id"})
        .then(posts => {
            Post.deleteMany({_id: {$in: posts.map(p => p._id)}})
                .then(p => res.json(p))
                .catch(e => res.status(500).send(e));
        }).catch(err => {
            res.status(404).send(err);
        });
    }).catch(err => res.status(404).send("item could not be found"));
};