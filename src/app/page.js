"use client"
import {delay, easeIn, motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div className="h-full w-full"
    initial={{y: "-200vh"}}
    animate={{y: "0%"}}
    transition={{duration:1}}
    >
      <div className="h-full flex flex-col px-4 md:px-8 lg:px-20 lg:flex-row xl:px-48">
            {/* Image */}
            <div className="relative h-1/2 lg:h-full lg:w-1/2 ">
              <Image src="/hero.png" alt="" fill className="object-contain " priority={true}/>
            </div>
            {/* Text */}
            <div className="h-1/2 flex flex-col gap-10 items-center justify-center lg:h-full lg:w-1/2">
            {/* HEADER */}
            <h1 className="font-bold text-2xl md:text-5xl">
              KNOWLEDGE AND CREATIVITY MEETS CODE, CREATING A TIMELESS DIGITAL WORLD. 
            </h1>
            {/* DESC */}
            <p className="md:text-xl">
              Welcome to my world of creativity, where I turn my thoughts and knowlegde into code lines. With my thirst for knowledge I am able to create a collection of projects with various latest technologies.
            </p>
            {/* BUTTON */}
            <div className="w-full flex gap-5 ">
              <Link href={'/portfolio'}>
                <button className="ring-1 ring-black p-3 rounded-lg">
                  My Portfolios 
                </button>
              </Link>
              <Link href={'/contact'}>
                <button className="ring-1 ring-black p-3 rounded-lg bg-black text-white"> 
                  My Contacts
                </button>
              </Link>
            </div>
            </div>
      </div>
    </motion.div>
  );
}
