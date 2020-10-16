import React from 'react';
import './HeaderMain.css';
import frame from '../../../images/logos/Frame.png';
const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center">
            <div className="hire-div col-md-4 col-sm-6 offset-md-1">
            <h2 style={{color: 'black'}}>Let's Grow Your <br/> Brand To The<br/> Next Level</h2>
                <p style={{color: 'black'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className=" nav-button">Hire Us</button>
            </div>
            <div className="col-md-6 col-sm-6">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
            
        </main>
    );
};

export default HeaderMain;