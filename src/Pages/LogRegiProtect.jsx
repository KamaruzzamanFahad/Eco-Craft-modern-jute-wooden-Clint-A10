import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const LogRegiProtect = ({children}) => {
    const {user,looding} = useContext(AuthContext);
    const goto = useNavigate();
    if(looding){
        return <div className='flex justify-center items-center'><span className="loading loading-infinity loading-lg text-red-500"></span></div>
    }
    else if(!user){
        return children;
    }
    else{
        goto('/')
    }
};

export default LogRegiProtect;