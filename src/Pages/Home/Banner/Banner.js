import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../Image/assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'


const Banner = () => {
    return (

        <div className="hero mt-5  bg-[#FFF8F5]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className="rounded-lg sm:w-full lg:w-1/2 h-[600px] shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl text-[#F73E7B]">BEAUTY SALON
                    </h1>
                    <h2 className="mt-6 mb-8 text-5xl font-bold  sm:text-4xl">FOR EVERY WOMEN
                    </h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <Link className="px-6 py-3 text-lg font-semibold rounded btn bg-[#F73E7B] border-none text-white mt-5">Get an Appointment</Link>
                </div>
            </div>
        </div>

    );
};

export default Banner;