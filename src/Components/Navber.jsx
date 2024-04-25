import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { AuthContext } from '../Provider/AuthProvider';

const Navber = () => {
    const links = <>
        <NavLink activeclassname="active" to={'/'}><li>Home</li></NavLink>
        <NavLink activeclassname="active" to={'/all'}><li>All Art & craft Items</li></NavLink>
        <NavLink activeclassname="active" to={'/add'}><li>Add Craft Item</li></NavLink>
        <NavLink activeclassname="active" to={'/myart'}><li>My Art&Craft List</li></NavLink>
    </>

    const {user,LogOut} = useContext(AuthContext)
    return (
        <div className='px-[6%]'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Eco-Craft</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user ? <>

                        <a
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={`${user.displayName}`}
                            data-tooltip-place="left"
                        >
                            <img src={user.photoURL} width={'40px'} alt="" />
                        </a>
                        <a onClick={LogOut} className="btn ml-2">Log Out</a>
                    </>
                        : <Link to={'/login'}><button className="btn">Log In</button></Link>
                        
                }
                <Tooltip id="my-tooltip" />


            </div>
            </div>
        </div>
    );
};

export default Navber;