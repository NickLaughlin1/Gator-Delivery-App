import React, { useState } from 'react';
import axios from 'axios';

function AddPost(props) {


    //const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    
    const createPost = (e) => {
        e.preventDefault();
        let newPost = {
            text: post
        };

        axios.post('/posts/add', newPost);
            
        
        window.location = '/community';
        //setUser('');
        setPost('');
    };

    return (
        <div className="card post-editor">
            <div className="card-body">
                Ask a question
                <div className="form-group" onSubmit={createPost}>
                    <textarea className="form-control post-editor-input"
                        value={post}
                        onChange={e => setPost(e.target.value)}  
                        
                    />
                </div>
                
                <button className="btn btn-primary post-editor-submit"> Submit Post</button>
            </div>
        </div>
    );
}

export default AddPost;