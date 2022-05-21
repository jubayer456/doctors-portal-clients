import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashBoard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/* <!-- Page content here --> */}
                <h1 className='text-3xl text-purple-500'>wellcome to dash board</h1>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashBoard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'> My Appointment</Link></li>
                    <li><Link to='review'>My Review</Link></li>
                    <li>{admin && <Link to='users'>All users</Link>}</li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;