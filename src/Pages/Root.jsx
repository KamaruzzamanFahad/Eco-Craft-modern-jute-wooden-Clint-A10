import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Navber';
import { ToastContainer, toast } from 'react-toastify';
const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;