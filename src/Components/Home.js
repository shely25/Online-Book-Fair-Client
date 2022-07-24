import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Stall from './Stall';
import Extra from './Extra';
import Information from './Information';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stall></Stall>
            <Information></Information>
            <Extra></Extra>
            <Review></Review>
        </div>
    );
};

export default Home;