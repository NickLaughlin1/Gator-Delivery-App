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
        
        window.location = '/community';
        setPost('');
        
    };
    
    return(
        <div>
            <h1>
                Community Board
            </h1>
            <h3>
                Ask questions and get answers from experts in your area
            </h3>          

            <div className="card post-editor">
                <div className="card-body">
                    Ask a question
                    <form onSubmit={createPost}>
                        <div className="form-group">
                            <textarea className="form-control post-editor-input"
                                value={post}
                                onChange={e => setPost(e.target.value)}    
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit Post" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>

            { PostList() }

        </div>
            

    );
};

export default Board;