import React from 'react';

const Loading = () => {
    return (

        <div className='flex mt-56 justify-center items-center h-full '>
            <p className='text-7xl font-thin'>L</p>
            <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-pink-400'></div>
            <p className='text-7xl font-thin  visually-hidden'>ading....</p>
        </div>
    );
};

export default Loading;