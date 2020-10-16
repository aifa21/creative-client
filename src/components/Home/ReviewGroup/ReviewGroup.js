import React from "react";
import "./ReviewGroup.css";
const ReviewGroup = (props) => {
  const { img, title, designation, description } = props.review;
  return (
    <div className="card col-md-3  border  ml-2 mr-2 mb-4 p-4  info1-container" >
     
        <div className="d-flex align-items-center">
         
            <img src={img} />
         

          <div className="card-body title">
            <h5>{title}</h5>
            <small> {designation} </small>
          </div>
        </div>

        <div className="describe">
          <p>{description}</p>
        </div>
      </div>
     
  );
};

export default ReviewGroup;
