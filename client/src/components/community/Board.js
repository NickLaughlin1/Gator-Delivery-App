import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { formatDate } from './helper';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from "../session/withAuthentication";

const COMMUNITY_ID = "5f1a297a5e28d64e6c283ea0";

const Board = (props) => {
    const [post, setPost] = useState('');
    const [postList, setPostList] = useState([]);
    const [mainPost, setMainPost] = useState('');
    const { currentUser, axiosAuth } = useContext(AuthContext);
  

    useEffect(() => {
        
        if (!currentUser) return;
        console.log(currentUser);
        axiosAuth("get", "/posts/"+props.id, {}, response => {
            let asc_post = response.data;
            let des_post = asc_post.reverse(); 
            // Show newest posts first
            setPostList([]);
            setPostList(des_post); 
        }, (err) => {});

            if (props.id) {
                let url = 'http://localhost:5000/posts/post/';
                let ID = url.concat(props.id);
                axios.get(ID)
                .then(response => {
                    setMainPost(response.data);
                })
                .catch((error) => { 
                    console.log(error);
                });
            }
    }, [props.id, currentUser]);
    
    const createPost = (e) => {
        e.preventDefault();
        let newPost = {
            text: post,
            date: new Date(),
            user: currentUser.uid,
            replyTo: props.id            
        };
        //axios.post('http://localhost:5000/posts/add', newPost);  
        axiosAuth("post", "/posts/add/", newPost, r => {}, err => {});
        window.location = '/post/'+props.id;
        setPost('');
        
    };

    return(
        <div>
            <h1>
                Community Board
            </h1>
            <h5>
                {mainPost.text}    
            </h5>       

            <div className="card post-editor">
                <div className="card-body">
                    
                    <form onSubmit={createPost}>
                        
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Ask a question</label>
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
            

            { 
            postList.map(currPost => {
            return (
                <PostView
                    post = {currPost}
                /> 
            )})
            }

        </div>  
    );
    }

    const PostView = (props) => {
        const [editing, setEditing] = useState(false);
        const [updateText, setUpdateText] = useState(props.post.text);
        const [viewPost, setViewPost] = useState(props.post);
        const [removed, setRemoved] = useState(false);
        const { currentUser, axiosAuth } = useContext(AuthContext);
        

        const updatePost = () => {
            setEditing(false);
            axiosAuth("put", "/posts/", {
                _id: props.post._id,
                text: updateText
            }, (res) => setViewPost(res.data), (err) => {});
        };

        const deletePost = () => {
            axiosAuth("delete", "/posts/"+props.post._id, {}, (res) => {setRemoved(true)}, (err) => {});
        };

        if (removed) { return ""; }
        return (
            <div className="card post-editor">
                <div className="card-header">
                    {formatDate(new Date(viewPost.date))}
                    {
                        (currentUser ? currentUser.uid == viewPost.user : false) ?
                        <div>
                            <button type="button" class="btn btn-secondary btn-sm" 
                                onClick={e => setEditing(!editing)}>{editing ? "Close" : "Edit"}
                            </button> <button type="button" class="btn btn-danger btn-sm" onClick={deletePost}>Delete</button>
                         </div> : ""
                    }
                </div>
                <div className="card-body">
                    
                    {(function() {
                        
                        if (editing) {
                            return(
                            <form onSubmit={() => updatePost()}>
                                
                                <div className="form-group">
                                    <textarea className="form-control post-editor-input"
                                        value={updateText} 
                                        onChange={e => setUpdateText(e.target.value)}    
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Update" className="btn btn-primary" />
                                </div>
                            </form>
                            );
                        } else {
                            return(
                            <h5 className="card-title">{viewPost.text}</h5>
                            )
                        }
                    })()}
                        {(function() {
                        if (viewPost.repliable) {
                            return (
                                <Link to={
                                    {
                                        pathname: '/post/' + viewPost._id,
                                        id: viewPost._id
                                    }
                                } className="nav-link">
                                <button type="button" className="btn btn-link" >View post</button>
                                </Link> 
                            );
                        }
                        return "";
                    })()}

                    
                </div>
            </div>
        );
    }
export default Board;

export const PostBoard = (props) => {
    let {id} = useParams();
    //console.log(id);
    return (
        <Board id={id === "community" ? COMMUNITY_ID:id}/>
    )

};