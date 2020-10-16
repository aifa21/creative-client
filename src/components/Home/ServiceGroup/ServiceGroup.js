import React from 'react';
import Orders from '../../Dashboard/Orders/Orders';
import {Link} from 'react-router-dom';
import  './ServiceGroup.css';
const ServiceGroup = ({service}) => {
    const {img,name,title,id}=service;
    return (
        
            <Link to={`/dashboard/order`}>
              <div className="col-md-3 col-sm-12">
                    <div className="info-container">
                    <div class="card-block ">
                   
                     <img src={img}/>
                      <div className="card-body">
                      <h5  >{name}</h5>
                     <small > {title} </small>
                     
                     </div>
            </div>
             </div>
            </div>
            </Link>
    );
};

export default ServiceGroup;