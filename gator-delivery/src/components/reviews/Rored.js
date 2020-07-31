import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Review from './Review'

const Rored = (props) => {
    const [review, setReview] = useState('');
    const [reviewList, setReviewList] = useState([]);
    const [rate, setRate] = useState(1);

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
            mes: review,
           star: rate,
        };
        axios.post('http://localhost:5000/reviews/sub', newReview);  
        
        window.location = '/vreviews';
        setReview('');
        setRate(1);
        
    };
    return(
        <div>
            <br></br>
            <h1>Review Board</h1>
            <br></br>
            <h4>Tell us how we did</h4>
            <br></br>
            <div className="card post-editor">
                <div className="card-body">
                    Post a Review
                    <form onSubmit={createReview}>
                        <div className="form-group">
                            <textarea className="form-control post-editor-input"
                                value={review}
                                onChange={e => setReview(e.target.value)}    
                            /><br></br>
                            Rate Your Volunteer
                            &nbsp;
                            <div className = "form-group">
                                <div className="btn-group">
                                    <button type="button" class="btn btn-info">1</button>
                                    <button type="button" class="btn btn-info">2</button>
                                    <button type="button" class="btn btn-info">3</button>
                                    <button type="button" class="btn btn-info">4</button>
                                    <button type="button" class="btn btn-info">5</button>
                                </div>
                            </div>
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

export default Rored;