import React, { useState } from 'react';
import axios from 'axios';

function AddReview(props) {


    //const [user, setUser] = useState('');
    const [review, setReview] = useState('');
    
    const createReview = (e) => {
        e.preventDefault();
        let newPost = {
            text: post
        };

        axios.post('http://localhost:5000/posts/add', newPost);
            
        
        window.location = '/reviews';
        //setUser('');
        setReview('');
    };

    return (
        <div className="card post-editor">
            <div className="card-body">
                Post a review
                <div className="form-group" onSubmit={createPost}>
                    <textarea className="form-control post-editor-input"
                        value={post}
                        onChange={e => setReview(e.target.value)}  
                        
                    />
                </div>
                
                <button className="btn btn-primary post-editor-submit"> Submit Review</button>
            </div>
        </div>
    );
}

export default AddPost;