import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/assets/icons/Group 1372.png'
import logoOne from '../../Image/assets/icons/Group 1373.png'
import logoTwo from '../../Image/assets/icons/Group 1374.png'
const OurService = () => {
    return (
        <section className='mt-12 '>

            <h1 className="text-3xl justify-center gap-2 items-center flex font-bold">Our Awesome <p className="text-3xl  text-[#F73E7B]  ">Service
            </p>
            </h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mx-auto'>
                <div className='w-[370px] h-[319px] shadow-lg shadow-zinc-200 p-6'>
                    <img className='w-[60px] mx-auto mt-4' src={logoOne} alt="" />

                    <h3 class="mt-3 text-xl font-bold text-center">Anti Age Face Treatment</h3>
                    <h3 className='text-center font-medium text-xl text-[#F73E7B]'>$199</h3>

                    <p class="mt-4 text-sm text-center">
                        We craft stunning and  amazing web UI, <br /> using a well drrafted UX to fit your product.
                    </p>
                </div>
                <div className='shadow-lg shadow-zinc-400 p-6 w-[370px] h-[319px]'>
                    <img className='w-[60px] mx-auto mt-4' src={logoTwo} alt="" />

                    <h3 class="mt-3 text-xl font-bold text-center ">Hair Color & Styleing</h3>
                    <h3 className='text-center font-medium text-xl mt-2 text-[#F73E7B]'>$99</h3>

                    <p class="mt-2 text-sm text-center">
                        Amazing flyers, social media posts and brand representations that would make your brand stand out.
                    </p>
                </div>
                <div className='shadow-lg shadow-zinc-200 p-6 w-[370px] h-[319px]'>
                    <img className='w-[60px] mx-auto mt-4' src={logo} alt="" />

                    <h3 class="mt-3 text-xl font-bold text-center ">Skin Care Treatment</h3>
                    <h3 className='text-center font-medium text-xl mt-2 text-[#F73E7B]'>$299</h3>

                    <p class="mt-2 text-sm text-center">
                        With well written codes, we build amazing apps for all platforms, <br /> mobile and web apps in general.
                    </p>
                </div>
            </div>
            <Link to='/ourAllService' className='text-xl rounded-lg justify-center gap-2  items-center  flex mt-10'>
                <button className="btn border-none  py-3 px-8 bg-[#F73E7B] text-white">Explore More
                </button>
            </Link>
        </section>
    );
};

export default OurService;