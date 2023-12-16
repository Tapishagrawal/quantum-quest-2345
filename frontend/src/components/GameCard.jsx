import React, { useContext } from 'react';
import { FaHeart } from "react-icons/fa6";
import { IoBagAdd } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { ToggleMenuContext } from '../context/ToggleMenuContextProvider';

export const GameCard = ({ _id, title, description, level, category, rating, discount, price, image, trailer, active }) => {
    const { toggleMenu } = useContext(ToggleMenuContext);
    return (
        <div className={`relative ${toggleMenu ? "h-[280px] w-[24%]" : "h-[310px] w-[22%]"} p-3 pb-0 shadow-[-5px_-5px_15px_rgba(255,255,255,0.2),5px_5px_15px_rgb(16,6,54,0.60)] rounded-lg mb-4 transition-all duration-700`}>
            <div className='w-full h-[45%] overflow-hidden rounded-md'>
                <img className='w-full' src={image} alt="game poster" />
            </div>
            <Link className='absolute top-1 right-0 bg-[#0D171F] p-3 rounded-bl-xl'>
                <FaHeart />
            </Link>
            <div className='flex justify-between items-center my-2'>
                <p className='bg-indigo-600 px-3 rounded-md text-sm'>{level}</p>
                <div className='flex gap-1'>
                    {
                        new Array(rating).fill(0).map((_, i) => (
                            <span key={i} >
                                <TiStarFullOutline color="#ff0000" />
                            </span>
                        ))
                    }
                </div>
            </div>
            <h3 className={`text-lg font-semibold ${toggleMenu ? "" : "mt-5"} transition-all duration-700`}>{title}</h3>
            <div className={`flex items-center justify-between ${toggleMenu ? "my-3" : "mt-4"} transition-all duration-700`}>
                <p className='bg-red-700 px-1 rounded-md text-sm font-semibold'>{discount * 100}%</p>
                <p className='text-xs line-through'>${price.toFixed(2)}</p>
                <p>${((1 - discount) * price).toFixed(2)}</p>
            </div>
            <Link className='absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-tl-xl rounded-br-lg'>
                <IoBagAdd />
            </Link>
        </div>
    )
}
