import React, { useState } from 'react';
import { TbDeviceGamepad2 } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { TbCategory2 } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom"

const links = [
    {
        id: 1,
        hash: "/",
        name: "Home",
        icon: <HiOutlineHome />,
        active: true,
    },
    {
        id: 2,
        hash: "categories",
        name: "Categories",
        icon: <TbCategory2 />,
        active: false,
    },
    {
        id: 3,
        hash: "library",
        name: "My Library",
        icon: <GoHeart />,
        active: false,
    },
    {
        id: 4,
        hash: "bag",
        name: "My Bag",
        icon: <IoBagOutline />,
        active: false,
    },
]
export const SideMenu = ({ toggleMenu }) => {
    const [navlinks, setNavLinks] = useState(links)
    return (
        <div className={` ${toggleMenu ? "w-[20%]" : "w-[5%]"} h-[96vh] rounded-2xl p-7 shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgb(16,6,54,0.60)] transition-all duration-700 overflow-auto`}>
            <Link to={"/"} className={`${toggleMenu ? "justify-start" : "justify-center"} text-3xl flex items-center gap-3`}>
                <div>
                    <TbDeviceGamepad2 />
                </div>
                <span className={`${toggleMenu ? "" : "hidden"} font-bold font-rubik`}>GameSwap</span>
            </Link>
            <div className={`flex flex-col gap-7 mt-10 ${toggleMenu ? "ml-5" : "text-2xl items-center"}`}>
                {
                    navlinks.map((navlink) => (
                        <div key={navlink.id}>
                            <Link to={navlink.hash} className='flex items-center gap-3'>
                                <i>{navlink.icon}</i>
                                <span className={`line-clamp-1 ${toggleMenu ? "" : "hidden"}`}>{navlink.name}</span>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
