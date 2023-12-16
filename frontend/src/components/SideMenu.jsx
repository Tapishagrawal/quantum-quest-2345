import React, { useContext, useEffect, useState } from 'react';
import { TbDeviceGamepad2 } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { TbCategory2 } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { BiSliderAlt } from "react-icons/bi";
import { Link } from "react-router-dom"
import { LoginPageContext } from '../context/LoginPageContextProvider';
import { ToggleMenuContext } from '../context/ToggleMenuContextProvider';

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
    {
        id: 5,
        hash: "login",
        name: "Login",
        icon: <IoLogInOutline />,
        active: false,
    }
]
export const SideMenu = () => {
    const { toggleMenu, handleToggleMenu } = useContext(ToggleMenuContext)
    const [navlinks, setNavLinks] = useState(links);
    const { handleToggleLoginPage } = useContext(LoginPageContext)

    const handleActiveLink = (id) => {
        const updatedlinks = links.map(link => {
            link.active = false;
            if (link.id === id) link.active = true;
            return link;
        })
        setNavLinks(updatedlinks)
    }
    useEffect(() => {
        const hashlink = window.location.href.split("/")[window.location.href.split("/").length - 1] || "/"
        const updatedlinks = links.map(link => {
            link.active = false;
            if (link.hash === hashlink) link.active = true;
            return link;
        })
        setNavLinks(updatedlinks)
    }, [])
    return (
        <div className={` relative z-[51] ${toggleMenu ? "md:w-[26%] lg:w-[20%] max-[768px]:fixed max-[768px]:w-64 max-[768px]:left-3 max-[768px]:bg-[#0D171F]" : "max-[768px]:fixed max-[768px]:w-64 max-[768px]:-left-64 md:w-[7%]"} h-[96vh] rounded-2xl p-7 shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgb(16,6,54,0.60)] transition-all duration-700 overflow-hidden`}>
            <span onClick={handleToggleMenu} className='absolute right-5 top-9 text-lg md:hidden'>
                <BiSliderAlt/>
            </span>
            <Link to={"/"} className={`${toggleMenu ? "justify-start" : "justify-center"} max-[768px]:text-2xl max-[1295px]:text-lg text-3xl flex items-center gap-3 transition-all duration-500`}>
                <div>
                    <TbDeviceGamepad2 />
                </div>
                <span className={`${toggleMenu ? "" : "md:hidden"} font-bold font-rubik`}>GameSwap</span>
            </Link>
            <div className={`flex flex-col gap-7 mt-10 ${toggleMenu ? "ml-5 max-[1235px]:ml-0" : "text-2xl items-center"} transition-all duration-500`}>
                {
                    navlinks.map((navlink) => (
                        <div key={navlink.id}>
                            <Link onClick={() => { navlink.hash !== "login" && handleActiveLink(navlink.id), navlink.hash === "login" && handleToggleLoginPage() }} to={navlink.hash !== "login" && navlink.hash} className={`flex items-center gap-3 py-1 px-2 ${navlink.active ? "border-2 shadow-[#553ac78a_0px_8px_24px]" : ""} rounded-md hover:bg-[#1b2b39b3] transition duration-300`}>
                                <i>{navlink.icon}</i>
                                <span className={`line-clamp-1 ${toggleMenu ? "" : "md:hidden"}`}>{navlink.name}</span>
                            </Link>
                        </div>
                    ))
                }
                <div className='flex items-center bg-[#1b2635] shadow-[0px_2px_4px_rgba(0,0,0,0.4),0px_7px_13px_-3px_rgba(0,0,0,0.3),0px_-3px_0px_inset_rgba(0,0,0,0.2)] gap-3 px-3 py-1 rounded-md min-[425px]:hidden -mt-5'>
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
