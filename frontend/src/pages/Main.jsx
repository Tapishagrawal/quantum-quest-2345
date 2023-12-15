import React from 'react'
import { Navbar } from '../components/Navbar'
import { AllRoutes } from '../components/AllRoutes'

export const Main = ({ handleToggleMenu, toggleMenu }) => {
    return (
        <div className={`${toggleMenu ? "w-[80%]" : "w-[93%]"} h-[96vh] rounded-2xl px-7 shadow-[-1px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgb(16,6,54,0.60)] transition-all duration-700 overflow-auto`}>
            <div className={`fixed ${toggleMenu ? "w-[73%]" : "w-[87%]"}`}>
                <Navbar handleToggleMenu={handleToggleMenu} />
            </div>
            <div className='mt-20'>
                <AllRoutes />
            </div>
        </div>
    )
}
