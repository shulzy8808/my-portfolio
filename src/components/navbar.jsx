"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavbarLists from "./navbarLists"
import {color, delay, motion} from 'framer-motion'

        {/* padding affects ssmall screens first, then increases as it goes up */}
const menuLists =[
    {url: "/", title:"Home"},
    {url: "/about", title:"About"},
    {url: "/portfolio", title:"Portfolio"},
    {url: "/contact", title:"Contact"}
]
const topiconTransition = {
    isClosed:{
        x: 0,
    },
    isOpened: {
        backgroundColor: "rgb(230,230,255)",
        rotate: 45
    }
}
const centericonTransition = {
    isClosed:{
        x: 0,
    },
    isOpened: {
        opacity: 0
    }
}
const bottomiconTransition = {
    isClosed:{
        x: 0,
    },
    isOpened: {
        backgroundColor: "rgb(230,230,255)",
        rotate: -45,
    }
}
const iconpageTransition = {
        isClosed:{
            y: '-100vh',
        },
        isOpened:{
            y: 0,
            transition:{
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        },
}
const iconinfoTransition ={
    isClosed:{
        y: 10,
        opacity: 0
    },
    isOpened: {
        y: 0,
        opacity: 1,
        color: "rgb(230,230,255)",
    }
}
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
                    <motion.div className="w-10 h-1 bg-black rounded origin-left" 
                        variants={topiconTransition}
                        animate={open ? "isOpened" : "isClosed"}> 
                    </motion.div>
                        <motion.div className="w-10 h-1 bg-black rounded"
                        variants={centericonTransition}
                    animate={open ? "isOpened" : "isClosed"}
                    ></motion.div>
                    <motion.div className="w-10 h-1 bg-black rounded origin-left"
                            variants={bottomiconTransition}
                            animate={open ? "isOpened" : "isClosed"}></motion.div>
                </button>
            {/* MENU LIST */}
            {open && (<motion.div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-10 text-3xl font-semibold z-40" 
                variants={iconpageTransition}
                animate={"isOpened"}
                initial={"isClosed"}
              >
                {menuLists.map(menuList=>(
                    <motion.div key={menuList.title} 
                    variants={iconinfoTransition}
                    > 
                        <Link href={menuList.url}>
                            {menuList.title}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>)}
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