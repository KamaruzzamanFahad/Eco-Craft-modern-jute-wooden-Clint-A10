import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../Components/Footer';
const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navber></Navber>
            <div className='px-[7%]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;