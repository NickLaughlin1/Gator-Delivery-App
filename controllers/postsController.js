/* Dependencies */
import Post from '../models/PostModel.js';

export const create = async (req, res) => {

    let newPost = new Post({
        text: req.body.text
    });
    await newPost.save(function(err) {
        if (err) return res.status(400).send(err);
        res.json(newPost);
    });

};

/* Retreive all the posts*/
export const list = (req, res) => {
    Post.find({}).exec(function(err,post) {
        if (err) return res.status(400).send(err);
        res.json(post);
    });
};

