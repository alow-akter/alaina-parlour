import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Shared/Footer/Footer';
import Navber from '../Shared/Navber/Navber';


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer className='w-full'></Footer>
        </div>
    );
};

export default Main;