import React, { useContext } from 'react'
import { Navbar } from '../components/Navbar'
import { AllRoutes } from '../components/AllRoutes'
import { ToggleMenuContext } from '../context/ToggleMenuContextProvider'

export const Main = () => {
    const { toggleMenu } = useContext(ToggleMenuContext)
    return (
        <div className={`custom-scrollbar ${toggleMenu ? "w-full md:w-[85%]" : "w-full md:w-[93%]"} h-[96vh] rounded-2xl px-7 shadow-[-1px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgb(16,6,54,0.60)] transition-all duration-700 ease-in-out overflow-auto`}>
            <div className={`fixed z-50 ${toggleMenu ? "w-[80%] md:w-[65%] lg:w-[73%]" : "w-[80%] min-[425px]:w-[87%]"} transition-all duration-700`}>
                <Navbar  />
            </div>
            <div className='mt-20'>
                <AllRoutes />
            </div>
        </div>
    )
}
