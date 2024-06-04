"use client"
import {motion} from "framer-motion"

const Animation = ()=>{
return (
    <div className=" h-full flex items-center justify-center">
        <motion.div className="w-96 h-96 bg-green-500 rounded"
        initial={{x:-100}}
        animate={{x:400, y:200, opacity:0.2}}
        transition={{delay:2, duration:4}}
        >

        </motion.div>
    </div>
)
}
export default Animation