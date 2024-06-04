"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavbarLists from "./navbarLists"
import {motion} from 'framer-motion'

        {/* padding affects ssmall screens first, then increases as it goes up */}
const menuLists =[
    {url: "/", title:"Home"},
    {url: "/about", title:"About"},
    {url: "/portfolio", title:"Portfolio"},
    {url: "/contact", title:"Contact"}
]

const Navbar = ()=>{
    const [open, setOpen] = useState(false);
    const isOpen =()=>{
            setOpen(!open)
    }
    return (
        <div className="h-full flex items-center justify-between px-8 sm:px-10 md:px-12 lg:px-20 xl:px-48">
            {/* Navigation Name Medium Screen */}
            <div className="hidden md:flex gap-3 text-xl w-1/3 ">
                {menuLists.map(menuList =>(
                    <NavbarLists key={menuList.title} menuList={menuList}/>
                ))}
            </div>
         {/* Navigation Name */}
           <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
                <Link href= '/' className="bg-black rounded-lg p-1 flex items-center justify-center font-semibold ">
                    <span className="text-white mr-1">
                        Ola
                    </span>
                    <span className=" w-16 h-8 bg-white rounded-md flex items-center justify-center">
                        damola
                    </span>
                </Link>
            </div>
             {/* Menu Icon */}
            <div className="md:hidden">  
                <button className="w-10 h-8 flex flex-col justify-between relative z-50" onClick={isOpen}>
                    <motion.div className="w-10 h-1 bg-black rounded">

                    </motion.div>
                    <motion.div className="w-10 h-1 bg-black rounded"></motion.div>
                    <motion.div className="w-10 h-1 bg-black rounded"></motion.div>
                </button>
            {/* MENU LIST */}
            {open && (<div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-10 text-3xl font-semibold z-40">
                {menuLists.map(menuList=>(
                    <Link href={menuList.url} key={menuList.title}>
                        {menuList.title}
                    </Link>
                ))}
            </div>)}
            </div>
            {/* Navigation Icons Wider Screen */}
            <div className="hidden md:flex gap-3 w-1/3 justify-center">
                <Link href="">
                    <Image src="/github.png" alt="GITHUB" width={25} height={25}/>
                </Link>
                <Link href="">
                    <Image src="/instagram.png" alt="INSTAGRAM" width={25}  height={25}/>
                </Link>
                <Link href="">
                    <Image src="/linkedin.png" alt="LINKEDIN" width={25} height={25}/>
                </Link>
                <Link href="">
                    <Image src="/pinterest.png" alt="PINTEREST" width={25} height={25}/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar