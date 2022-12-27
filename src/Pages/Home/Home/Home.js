import React from 'react';
import OurService from '../../OurService/OurService';
import Banner from '../Banner/Banner';
import SiknService from '../SiknService/SiknService';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <SiknService></SiknService>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;