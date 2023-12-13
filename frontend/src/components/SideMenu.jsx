import React, { useState } from 'react';
import { SlGameController } from "react-icons/sl";
import { Link } from "react-router-dom"

const links = [
    {
        id:1,
        hash:"home",
        name:"Home",
        icon:"#",
        active:true,
    },
    {
        id:2,
        hash:"categories",
        name:"Categories",
        icon:"#",
        active:false,
    },
    {
        id:3,
        hash:"library",
        name:"My Library",
        icon:"#",
        active:false,
    },
    {
        id:4,
        hash:"bag",
        name:"My Bag",
        icon:"#",
        active:false,
    },
]
export const SideMenu = () => {
    const [navlinks, setNavLinks] = useState(links)
    return (
        <div className='w-[20%] h-screen p-7 border'>
            <Link to={"/"} className='text-3xl flex item'>
                <SlGameController />
                <span>GameSwap</span>
            </Link>
            <div>
                {
                    navlinks.map((navlink) =>(
                        <div>
                            <Link to={navlink.hash}>{navlink.name}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
