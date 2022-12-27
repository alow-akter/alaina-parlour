import React from 'react';

const SiknService = () => {
    return (
        <div>
            <section className="bg-[#FFF8F5] mt-10">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <p className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                        <img src="https://demos.codezeel.com/wordpress/WP01/WP017/wp-content/uploads/2022/09/projects-1.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl mt-6 ">Let us handle your screen <p className='text-[#F73E7B] group-hover:underline group-focus:underline'>Professionally</p> </h3>
                            <span className="text-xs mt-10">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</span>
                            <div className='flex justify-around mt-10' >
                                <div className='mt-10'>
                                    <h3 class="text-3xl font-bold text-[#F73E7B]">500+</h3>
                                    <p class="mt-2 text-xs font-medium">
                                        Happy Customer
                                    </p>

                                    <span class="absolute bottom-8 right-8">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-10 w-10 text-pink-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </span>

                                </div>
                                <div className='mt-10'>
                                    <h3 class="text-3xl font-bold text-[#F73E7B]">10+</h3>
                                    <p class="mt-2 text-xs font-medium">
                                        Total Service
                                    </p>

                                    <span class="absolute bottom-8 right-8">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-10 w-10 text-pink-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </p>

                </div>
            </section>
        </div>
    );
};

export default SiknService;