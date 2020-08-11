import React from "react";

const Review = (props) => {
  return (
    <div className="card post-editor" style={{borderRadius: "30px"}}>
      <div className="card-body">{props.review.mes}</div>
      <div className="card-body">Rating: {props.review.star}/5</div>
    </div>
  );
};
export default Review;
