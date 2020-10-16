import React from 'react';
import { useState,useEffect } from 'react';

import ReviewGroup from '../ReviewGroup/ReviewGroup';
import './Review.css';

const Review = () => {
    const [addReview, setAddReview] = useState([]);

    useEffect(()=>{
        fetch('https://nameless-sands-87488.herokuapp.com/addReview')
        .then(res => res.json())
        .then(data => setAddReview(data))
    }, [])
    return (
        <div className="review-container ">
            <h2 >Clients <span style={{color:'#7AB259'}}>Feedback</span></h2>
          
        <div className=" row mx-2 justify-content-around ">
           
              
              {
                  addReview.map(review=><ReviewGroup review={review} key={review.title}></ReviewGroup>)
              }
        </div>
        </div>
    
        
    );
};

export default Review;