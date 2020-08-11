import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Review from './Review'

const Rored = (props) => {
    const [review, setReview] = useState('');
    const [reviewList, setReviewList] = useState([]);
    const [rate, setRate] = useState(1);

    useEffect(() => {
        axios.get('/reviews/')
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
        axios.post('/reviews/sub', newReview);  
        
        window.location = '/vreviews';
        setReview('');
        setRate(1);
        
    };
    return(
        <div className="container table-wrapper" style={{backgroundColor: "white", padding: "20px", marginTop: "30px", borderRadius: "30px"}}>
            <h1>Review Board</h1>

            <h3>Tell us how we did</h3>
            
            <div className="card post-editor" style={{borderRadius: "30px"}}>
                <div className="card-body" >
                    Post a Review
                    <form onSubmit={createReview} >
                        <div className="form-group" >
                            <textarea className="form-control post-editor-input"
                                value={review}
                                onChange={e => setReview(e.target.value)} 
                                style={{borderRadius: "10px"}}   
                            />
                        </div>
                        <div className="form-group">
                          <select
                          className="form-control"
                          value={props.rate} onChange={e => setRate(e.target.value)} style={{borderRadius: "10px"}}>
                            <option defaultValue>Rate Your Volunteer</option>
                            <option value="1">1 - Highly Dissatisfied</option>
                            <option value="2">2 - Slightly Dissatisfied</option>
                            <option value="3">3 - Neither Satisfied or Dissatisfied</option>
                            <option value="4">4 - Slightly Satisfied</option>
                            <option value="5">5 - Highly Satisfied</option>
                          </select>
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