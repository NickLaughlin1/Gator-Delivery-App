import React, {useState, useEffect} from 'react';
import { getPost } from './helper';

const ViewPost = (props) => {
    const [post, setPost] = useState('');

    useEffect(() => {getPost(props.location.id, setPost)});
    return (
        <div>
            {props.post.text}

        </div>
    )
};


export default ViewPost;