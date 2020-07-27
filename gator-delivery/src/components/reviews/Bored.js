import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Review from './Review'

const Bored = (props) => {
    const [review, setReview] = useState('');
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/reviews/')
            .then(response => {
                setReviewList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);


    const ReviewList = () => {
        return reviewList.map(currReview => {
            return <Review review={currReview} key={currReview._id}/>;
        });
    };

    const createReview = (e) => {
        e.preventDefault();
        let newReview = {
            text: review
        };
        axios.post('http://localhost:5000/reviews/add', newReview);  
        
        window.location = '/reviews';
        setReview('');
        
    };
    return(
        <div>
            <h1>
                Review Board
            </h1>
            <h3>
                Tell us how we did
            </h3>          

            <div className="card post-editor">
                <div className="card-body">
                    Post a Review
                    <form onSubmit={createReview}>
                        <div className="form-group">
                            <textarea className="form-control post-editor-input"
                                value={review}
                                onChange={e => setReview(e.target.value)}    
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit Review" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>

            { ReviewList() }

        </div>  
    );
    }

export default Bored;