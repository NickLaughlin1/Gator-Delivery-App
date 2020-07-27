import React from 'react';

const Review = (props) => {
    
    return (
        <div className="card post-editor">
            <div className="card-body">
                
                    {props.review.text}
        
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Answer this question" aria-label="Answer" aria-describedby="button-addon2"></input>
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" id="button-addon2">Submit Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Review;