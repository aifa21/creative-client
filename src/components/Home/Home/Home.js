import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';
import SomeLogo from '../SomeLogo/SomeLogo';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SomeLogo></SomeLogo>
            <Services></Services>
            <Works></Works>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;