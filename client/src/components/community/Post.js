import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

import {getPost, formatDate} from './helper';

const Post = (props) => {
    const [selectedID, setSelectedID] = useState('');
    const [post, setPost] = useState(''); 
    
    // useEffect(() => {
    //     getPost(props.post._id)

    // }


    return (
        <div className="card post-editor">
            <div className="card-header">
                {formatDate(new Date(props.post.date))}
            
  
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.post.text}</h5>
                <Link to={
                    {
                        pathname: '/post/' + props.post._id,
                        id: props.post._id
                    }
                } className="nav-link">
                {/* <button type="button" className="btn btn-link" onClick={getPost()}>View post</button> */}
                </Link>
                
            </div>
        </div>
    );
};
export default Post;