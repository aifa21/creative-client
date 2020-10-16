import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import uber from '../../../images/logos/uber.png';
import airbnb from '../../../images/logos/airbnb.png';
import './SomeLogo.css';
const SomeLogo = () => {
    return (
        <div className="logo-div d-flex justify-content-around">
            <div className="service">
          <img src={slack}></img>
          </div>
          <div className="service">
          <img src={google}></img>
          </div>
          <div className="service">
          <img src={netflix}></img>
          </div>
          <div className="service">
          <img src={uber}></img>
          </div>
          <div className="service">
          <img src={airbnb}></img>
          </div>
       
        </div>
    );
};

export default SomeLogo;