import React, { useContext, useEffect, useState } from 'react';
import { TbDeviceGamepad2 } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { TbCategory2 } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import { Link } from "react-router-dom"
import { LoginPageContext } from '../context/LoginPageContextProvider';

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
export const SideMenu = ({ toggleMenu }) => {
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
        <div className={` ${toggleMenu ? "w-[20%]" : "w-[5%]"} h-[96vh] rounded-2xl p-7 shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgb(16,6,54,0.60)] transition-all duration-700 overflow-hidden`}>
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
                            <Link onClick={() => { navlink.hash !== "login" && handleActiveLink(navlink.id), navlink.hash === "login" && handleToggleLoginPage() }} to={navlink.hash !== "login" && navlink.hash} className={`flex items-center gap-3 py-1 px-2 ${navlink.active ? "border-2 shadow-[#553ac78a_0px_8px_24px]" : ""} rounded-md hover:bg-[#1b2b39b3] transition duration-300`}>
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
