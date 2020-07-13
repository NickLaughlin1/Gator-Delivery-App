import React from 'react';

const Post = (props) => {

    const addPost = (newPost) => {

    };
    
    return (
        <div className="card post-editor">
                <div className="card-body">
                    Ask a question
                    <textarea className="form-control post-editor-input"/>
                    <button className="btn btn-primary post-editor-submit" onClick={addPost}> Submit Post</button>
                </div>
        </div>
    );
};
export default Post;