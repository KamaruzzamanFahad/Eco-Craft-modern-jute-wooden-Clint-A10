import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { AuthContext } from '../Provider/AuthProvider';





const Navber = () => {
    const links = <>
        <NavLink activeclassname="active" to={'/'}><li>Home</li></NavLink>
        <NavLink activeclassname="active" to={'/all'}><li>All Art & craft Items</li></NavLink>
        <NavLink activeclassname="active" to={'/add'}><li>Add Art & Craft Item</li></NavLink>
        <NavLink activeclassname="active" to={'/myart'}><li>My Art & Craft List</li></NavLink>
    </>

    
    const [theme, settheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme') : "light")
    const [ischack, setcheck] = useState((theme == "light")? true : false)


    const darklighandle = (e) => {
        if (ischack) {
            setcheck(false)
            localStorage.setItem("theme","dark")
            settheme("dark")
        }
        else {
            setcheck(true)
            localStorage.setItem("theme","light")
            settheme("light")
        }
        console.log(ischack)
    }
    const cardstyles = {
        color: (theme == "light") ? 'black' : 'rgb(240, 240, 240)',
        'background-color': (theme == "light") ? '#eeeeee' : '#ffffff22',
    };

    const mebustyl = {
        color: (theme == "light") ? 'black' : 'white',
        'background-color': (theme == "light") ? '#e8e8e8' : 'black',
    };

    const { user, LogOut } = useContext(AuthContext)
    return (
        <div className='py-5'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul style={mebustyl} tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
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

                    <div className="form-control mr-2">
                        <label className="label cursor-pointer">
                            <input checked={!ischack} onChange={darklighandle} type="checkbox" className="toggle" />
                        </label>
                    </div>
                    {
                        user ? <>
                            <div className="dropdown dropdown-end dropdown-hover z-[10]">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar z-[10]">
                                <div className="w-10 rounded-full">
                                    <img alt="user" src={user.photoURL} />
                                </div>
                                </div>
                                <ul style={cardstyles} tabIndex={0} className="mt-0 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#ececec] rounded-box w-52">
                                    <li><a>{user.displayName}</a></li>
                                    <li><a onClick={LogOut}>Logout</a></li>
                                </ul>
                            </div>
                        </>
                            : <div className='flex justify-end items-center flex-row'>
                                <Link to={'/login'}><button className="btn">Log In</button></Link> <Link to={'/register'}><button className="btn ml-2">Register</button></Link>
                            </div>


                    }


                    <Tooltip id="my-tooltip" />


                </div>


            </div>

        </div>
    );
};

export default Navber;