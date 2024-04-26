import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../Components/Footer';
const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className='px-[6%]'>
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;