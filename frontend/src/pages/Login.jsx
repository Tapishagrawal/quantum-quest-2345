import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoginPageContext } from '../context/LoginPageContextProvider'
import toast, { Toaster } from 'react-hot-toast';
import { postUserLogin } from '../redux/Authentication/action';
import { Navigate, useNavigate } from "react-router-dom"

export const Login = () => {
    const { handleToggleLoginPage, handleToggleRegisterPage } = useContext(LoginPageContext)
    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const { token } = useSelector((store) => store.authReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(token)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleLoginPost = async (e) => {
        e.preventDefault();
        if (loginData.email === "admin@gmail.com" && loginData.password === "admin") {
            return navigate("/admin")
        }
        const status = await dispatch(postUserLogin(loginData))
        if (status === 201) {
            toast.error("Wrong credetial.", {
                style: {
                    borderRadius: '10px',
                    background: '#5f8fa821',
                    color: '#fff',
                },
            })
        } else if (status === 200) {
            toast.success("you have logged in successfully!", {
                icon: "🎉",
                style: {
                    borderRadius: '10px',
                    background: '#5f8fa821',
                    backdropFilter: "blur(2px)",
                    color: '#fff',
                },
            })
        } else {
            toast.error("Somthing went wrong!", {
                style: {
                    borderRadius: '10px',
                    background: '#a244427a',
                    backdropFilter: "blur(2px)",
                    color: '#fff',
                },
            })
        }

    }
    if (token) {
        setTimeout(() => {
            handleToggleLoginPage(false);
            navigate("/")
        }, 500)
    }
    return (
        <div>
            <div onClick={handleToggleLoginPage} className='bg-[#3031504d] backdrop-blur-sm w-full h-screen fixed top-0 left-0 z-[52]'></div>
            <div>
                <Toaster />
            </div>
            <div className={`fixed w-[90%] sm:w-[initial] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[52]`}>
                <form onSubmit={handleLoginPost} className='relative bg-[#152532] rounded-md w-full sm:w-[350px] flex flex-col items-center gap-3 p-7 shadow-[0px_15px_25px_rgba(109,71,222,0.15),0px_5px_10px_rgba(77,79,179,0.22)]'>
                    <div onClick={handleToggleLoginPage} className='absolute cursor-pointer rounded-lg top-2 right-2 py-[0.1rem] px-3 bg-[#1B2635] shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)]'>
                        ESC
                    </div>
                    <div>
                        <img className='rounded-full' src="https://placehold.co/100" alt="" />
                    </div>
                    <div className='w-full flex flex-col items-center gap-3'>
                        <input
                            onChange={handleInputChange}
                            type="email"
                            name='email'
                            value={loginData.email}
                            required
                            placeholder='Enter your email id'
                            className='bg-transparent border-b focus:border-none px-2 py-1 rounded-sm w-[90%] my-6 outline-none focus:outline-indigo-400 focus:outline-[3px]'
                        />
                        <input
                            onChange={handleInputChange}
                            type="password"
                            name='password'
                            value={loginData.password}
                            required
                            placeholder='Enter password'
                            className='bg-transparent border-b focus:border-none px-2 py-1 rounded-sm w-[90%] outline-none focus:outline-indigo-400 focus:outline-[3px]'
                        />
                        <input type='submit' value="LOGIN" className='py-1 px-8 my-5 rounded-lg bg-[#1B2635] space-x-9 hover:scale-105 active:scale-95 active:shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3)] transition-all duration-150 shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)]' />
                        <p>Don't have an account? <Link className='text-indigo-500 hover:text-indigo-400' onClick={handleToggleRegisterPage} >Signup</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
