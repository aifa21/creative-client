import React from 'react';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import ServiceGroup from '../ServiceGroup/ServiceGroup';
import './Service.css';


// const addService=[
//     {
//         id:1,
//         img:"https://i.ibb.co/TL7mFzW/service1.png",
//         "name":'Web and Mobile Design',
//        "title":'Web design encompasses many different skills and disciplines in the production and maintenance of websites. '
        
//     },
//     {
//         id:2,
//         img:"https://i.ibb.co/C2rKfQF/service2.png",
//         "name":'Graphic Design',
        
//         "title":'Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration.'
//     },
//     {
//         id:3,
//         img:"https://i.ibb.co/ChfZHVX/service3.png" ,
//         "name":'Web Development',
        
//         "title":'Web development is the work involved in developing a Web site for the Internet or an intranet.'
//     },
//     {
//         id:4,
//         img:"https://i.ibb.co/BLwkWK4/service4.png",
//         "name":'App Design',
         
//         "title":'Mobile app design encompasses both the user interface (UI) and user experience (UX).'
//     },
//     {
//         id:5,
//         img:"https://i.ibb.co/25c8wGT/service5.png",
//         "name":'ios Developer',
        
//         "title":'An iOS developer is responsible for developing applications for mobile devices powered by Apple iOS operating system. '
//     },
//     {
//         id:6,
//         img:"https://i.ibb.co/BLwkWK4/service4.png",
//         "name":'Python Developer',
        
//         "title":'An Python developer is responsible for developing applications for mobile devices powered by Apple iOS operating system. '
//     }
    

// ]
const Services = () => {
   const [addService, setAddService] = useState([]);
  console.log(addService);
    useEffect(()=>{
        fetch('http://localhost:5000/addService')
        .then(res => res.json())
        .then(data => setAddService(data))
    }, [])
    return (
        
        <div className="service-container">
           <h2 >Provide <span style={{color:'#7AB259'}}>Awesome Services</span></h2>
        <div className="row justify-content-around ">
           
              
              {
                  addService.map(service=><ServiceGroup service={service} ></ServiceGroup>)
              }
        </div>
       
        </div>
        
        
    );
};

export default Services;