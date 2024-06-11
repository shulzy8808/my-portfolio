"use client"
import {AnimatePresence, easeOut, motion} from  "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const PageTransition =({children})=>{
    const pathName = usePathname()
    const pathNameCapital = pathName.substring(1)
    const variant1 = {
        trans:{
            height: "0",
        },
        trans1:{
            height: "120vh",
            transition: {
                ease: "easeOut",
                duration: .5
            }
        }
    } 
    const variant2 = {
        trans: {
            opacity: 1
        },
        trans1:{
            opacity: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    }
    const variant3 = {
        trans: {
            height: "120vh",
        },
        trans1:{
            height: "0",
            transition: {
                delay: .5,
                duration: .5,
            }
        },
    }
    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-blue-0">
                <motion.div className="h-screen w-screen fixed bg-black z-40 text-white rounded-b-[75px]"
                variants={variant1}
                animate={"trans"}
                exit={"trans1"}
                />
                <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0  text-5xl z-50 cursor-default text-white w-fit h-fit"
                variants={variant2}
                initial={"trans"}
                animate={"trans1"}
                exit={"trans1"}
                >
                    {pathNameCapital.charAt(0).toUpperCase() + pathNameCapital.slice(1)}
                </motion.div>
                <motion.div className="h-screen w-screen fixed bg-black z-10 rounded-t-[75px] bottom-0"
                variants={variant3}
                initial={"trans"}
                animate={"trans1"}
                />
          <div className="h-24">
            <Navbar/>
          </div>
          <div className= "h-[calc(100vh-6rem)]">
            {children}
          </div>
        </div>
        </AnimatePresence>
    )
}
export default PageTransition

