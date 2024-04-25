import { useContext, useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";



const Login = () => {
    const { user,
        login,
        looding,
        loginwithgoogle,
        loginwithgithub } = true

    const loginhandle = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then(() => {
                toast.success("LOGIN SUCCESSFUL")
            })
            .catch(error => {
                toast(error.message)
            })
    }
    const goglelogin = () => {
        loginwithgoogle()
            .then(() => {
                toast.success("LOGIN SUCCESSFUL")
            })
            .catch(error => toast.error(error.message))

    }
    const gitlogin = () => {
        loginwithgithub()
            .then(() => toast.success("LOGIN SUCCESSFUL"))
            .catch(error => toast.error(error.message))

    }
    const [type, settype] = useState('password')

    return (

        <div className="animate__backInDown">
            
            
            <div>
                <div className="hero mb-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card shrink-0 max-w-sm shadow-2xl bg-base-100 p-10 w-80 sm:w-96 ">
                            <h1 className='text-3xl mb-2 font-semibold'>Login your account</h1>
                            <form onSubmit={loginhandle} className="card-body mb-2 p-0">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <div className='flex items-center input input-bordered'>
                                        <input name='password' type={type} placeholder="password" className="w-full" required />
                                        {
                                            type == "password" ? <FaEyeSlash onClick={() => settype("text")} /> : <FaEye onClick={() => settype("password")} />
                                        }

                                    </div>

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-1">
                                    <button className="btn w-fu btn-primary bg-blue-500 text-white outline-none border-none">Login</button>
                                </div>
                            </form>
                            <p className="text-sm text-center">Dont’t Have An Account ? <Link to={'/register'}>Register</Link> </p>

                            <div className="flex justify-center items-center py-5">
                                <hr className="border-[1px] border-[#0000001b] w-full" />
                                <p className="px-3 text-lg">or</p>
                                <hr className="border-[1px] border-[#0000001b] w-full" />
                            </div>

                            <div onClick={goglelogin} className="flex justify-center gap-6 items-center border-[1px] border-solid border-[#00000043] rounded-lg btn">
                                <img width={'10%'} src="gogle.png" alt="" />
                                <p>Login with Google</p>
                            </div>
                            <div onClick={gitlogin} className="flex justify-center gap-6 items-center border-[1px] mt-4 border-solid border-[#00000043] rounded-lg btn">
                                <img width={'10%'} src="github.png" alt="" />
                                <p>Login with Github</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;