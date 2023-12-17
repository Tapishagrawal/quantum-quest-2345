import React, { useContext, useState } from 'react'
import { LoginPageContext } from '../context/LoginPageContextProvider'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { postUserRegistration } from '../redux/Authentication/action';

export const Register = () => {
    const { handleToggleLoginPage, handleToggleRegisterPage } = useContext(LoginPageContext)
    const [newUserdata, setnewUserData] = useState({ username: "", email: "", password: "" })
    const { msg } = useSelector(store => store.authReducer);
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setnewUserData(prev => {
            return { ...prev, [name]: value }
        })
    }
    
    const handlePostUser = (newUserdata) => {
        dispatch(postUserRegistration(newUserdata))
    }
    return (
        <div>
            <div className='fixed top-0 left-[50%] z-[99]'> 
            </div>
            <div onClick={handleToggleRegisterPage} className='bg-[#3031504d] backdrop-blur-sm w-full h-screen fixed top-0 left-0 z-[52]'></div>
            <div className={`fixed w-[90%] sm:w-[initial]  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[52]`}>
                <div className='relative bg-[#152532] rounded-md w-full sm:w-[350px] flex flex-col items-center gap-3 p-7 shadow-[0px_15px_25px_rgba(109,71,222,0.15),0px_5px_10px_rgba(77,79,179,0.22)]'>
                    <div onClick={handleToggleRegisterPage} className='absolute cursor-pointer rounded-lg top-2 right-2 py-[0.1rem] px-3 bg-[#1B2635] shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)]'>
                        ESC
                    </div>
                    <h1 className='my-5 text-xl font-bold'>REGISTRATION</h1>
                    <div className='w-full flex flex-col items-center gap-3'>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            name="username"
                            value={newUserdata.username}
                            placeholder='Enter your username'
                            className='bg-transparent border-b focus:border-none px-2 py-1 rounded-sm w-[90%]  outline-none focus:outline-indigo-400 focus:outline-[3px]'
                        />
                        <input
                            onChange={handleInputChange}
                            type="email"
                            name="email"
                            required
                            value={newUserdata.email}
                            placeholder='Enter your email id'
                            className='bg-transparent border-b focus:border-none px-2 py-1 rounded-sm w-[90%] my-6 outline-none focus:outline-indigo-400 focus:outline-[3px]'
                        />
                        <input
                            onChange={handleInputChange}
                            type="password"
                            name="password"
                            value={newUserdata.password}
                            placeholder='Enter password'
                            className='bg-transparent border-b focus:border-none px-2 py-1 rounded-sm w-[90%] outline-none focus:outline-indigo-400 focus:outline-[3px]'
                        />
                        <button onClick={() => handlePostUser(newUserdata)} className='py-1 px-8 my-5 rounded-lg bg-[#1B2635] space-x-9 hover:scale-105 active:scale-95 active:shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3)] transition-all duration-150 shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)]'>SUBMIT</button>
                        <p>Already have account? <Link className='text-indigo-500 hover:text-indigo-400' onClick={handleToggleLoginPage} >Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
