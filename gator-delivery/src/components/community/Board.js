import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post'

const Board = (props) => {
    const [post, setPost] = useState('');
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts/')
            .then(response => {
                setPostList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);


    const PostList = () => {
        return postList.map(currPost => {
            return <Post post={currPost} key={currPost._id}/>;
        });
    };

    const createPost = (e) => {
        e.preventDefault();
        let newPost = {
            text: post
        };
        axios.post('http://localhost:5000/posts/add', newPost);  
        
        <section>
            <section>
            <h3>Community Board</h3>
            <textbox classname="register ask">Ask a question</textbox>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button className="register ask">Submit</button>
            <br></br><textbox classname="register answer">Answer a question</textbox>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="36"></textarea>
            <button className="register ask">Submit</button>

            <h3>Community Posts</h3>
            <input type="text" class="form-control" rows="7" placeholder="Post a question"></input>
            <input type="text" class="form-control" placeholder="Last name"></input>
        </section>
        </section>
};
}
export default Board;