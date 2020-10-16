import React,{useState} from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import { Carousel } from 'react-bootstrap';
import './Works.css';
const Works = () => {
    
    return (
        <div className="container">
           <h4 >Here are some of our works</h4>
        <Carousel>
        
  <Carousel.Item className="carousel-item">
    
    <img
      className=" d-block w-100"
      src={carousel1}
      alt="First slide"
    />
    
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel2}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel3}
      alt="Third slide"
    />


  </Carousel.Item>
</Carousel>
</div>
  );
};

export default Works;