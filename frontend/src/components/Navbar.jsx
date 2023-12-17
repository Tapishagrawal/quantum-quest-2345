import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BiSliderAlt } from "react-icons/bi";
import { IoMdHeart } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { ToggleMenuContext } from '../context/ToggleMenuContextProvider';

export const Navbar = () => {
    const { handleToggleMenu } = useContext(ToggleMenuContext)
    return (
        <div className='flex rounded-xl justify-between items-center z-50 py-3 px-3 bg-[#0d171f9d] backdrop-blur-sm'>
            <Link className='text-xl' onClick={handleToggleMenu}>
                <BiSliderAlt />
            </Link>
            <div className='flex items-center gap-4'>
                <Link to={"/library"} className='relative bg-[#1b2635] shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)] px-4 py-[0.4rem] rounded-md '>
                    <IoMdHeart className='text-2xl' />
                    <span className='absolute text-[0.6rem] bottom-2 right-4 px-1 rounded-full bg-indigo-700'>0</span>
                </Link>
                <Link to={"/bag"} className='relative bg-[#1b2635] shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)] px-4 py-[0.4rem] rounded-md '>
                    <IoBag className='text-2xl'/>
                    <span className='absolute text-[0.6rem] bottom-1 right-4 px-1 rounded-full bg-indigo-700'>0</span>
                </Link>
                <div className='flex items-center bg-[#1b2635] shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)] gap-3 px-3 py-1 rounded-md max-[425px]:hidden'>
                    <div>
                        <img className='rounded-full' src="https://placehold.co/28" alt="" />
                    </div>
                    <div>
                        <p className='text-slate-400 text-xs'>User Name</p>
                        <p className='text-slate-400 text-xs'>View profile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
