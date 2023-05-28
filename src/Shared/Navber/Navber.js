import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navber = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const menuItems = <React.Fragment>

        <li><Link className='font-bold' to='/'>Home</Link></li>
        <li><Link className='font-normal' to='/appointment'>Appointment</Link></li>
        <li><Link to='/OurPortfolio'>Our Portfolio</Link></li>
        <li><Link to='/OurTeam'>Our Team</Link></li>
        <li><Link className='gap-5' to='/ContactUs'>Contact Us</Link></li>
        {/* <li><Link className='btn text-white w-32 h-12 rounded  font-bold bg-[#F73E7B] border-none' to='/login'>Login</Link></li> */}

        {
            user?.uid ?
                <>
                    <li className='hover:text-[#f5445f] bold'><Link to='/deshBorad'>DeshBorad</Link></li>
                    <li className='btn text-white w-32 h-12 rounded  font-bold bg-[#F73E7B] border-none bold'><button onClick={handleLogout}>Sing Out</button></li>
                </>
                : <li className='btn text-white w-32 h-12 rounded  font-bold bg-[#F73E7B] border-none'><Link to='/login'>Login</Link></li>

        }

    </React.Fragment>
    return (

        <div className="navbar flex justify-between bg-[#FFF8F5]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='w-[60px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wluVAMhk--BsGhCgY2ZL0cKQ69U8Vp7SBY94Huqe&s" alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-2xl gap-1"><h2 className='text-3xl text-[#F73E7B] font-bold '>Alaina's</h2>Parlour </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>

    );
};

export default Navber;