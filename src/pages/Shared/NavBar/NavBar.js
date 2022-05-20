import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);
    const menuItem = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/review'>Reviews</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
        <li>{user ? <><button onClick={() => signOut(auth)} className='btn btn-ghost'>Log out</button></> : <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start ">
                <Link to='/'><p className="normal-case text-xl">Doctors Portal</p></Link>
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            {
                user && <div className="navbar-end">
                    <label for="dashBoard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            }
        </div>
    );
};

export default NavBar;