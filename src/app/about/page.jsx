"use client"

import {motion} from "framer-motion"
const About = () => {
    return(
        <motion.div      
        initial={{y: "-200vh"}}
        animate={{y: "0%"}}
        transition={{duration: 1}}
        className="h-full overflow-scroll"
        >
            <div>
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
                    {/*ABOUT ME*/}
                    <div className="flex flex-col gap-12 justify-center"> 
                        <h1 className="font-bold text-2xl">
                            PROFESSIONAL SUMARY
                        </h1>
                        <p>
                        Creative task-driven individual with over 2years of experience in web design, development and security, equipped with knowledge in HTML, CSS, JavaScript and other programming languages apart from experience in team management and project management. Proficient in testing, UI/UX interface designing, market research and troubleshooting complex issues. I am passionate about creating, engaging user experiences, constantly learning and adapting to new technologies with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high quality results under strict deadlines.
                        </p>
                        <div className="flex self-end">
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="60" viewBox="0 0 349 134" fill="none">
                                <path d="M107 21C98.4087 21 89.1896 19.228 81.5 23.5C76.2099 26.439 72.7566 29.3569 68.7778 33.7778C63.8765 39.2237 63 49.7743 63 57C63 64.4155 62 72.4906 62 80.2222C62 84.5186 63 88.9141 63 93.4444C63 97.9018 66.9403 101.541 68.0556 105.444C69.1172 109.16 76.9237 112.552 80 114C87.627 117.589 96.6548 120.019 104.944 121.056C112.523 122.003 122.106 125.319 130 122.5C146.043 116.77 164 107.403 164 88C164 83.5094 165 79.5739 165 75C165 70.0394 163.259 65.6581 163 61C162.73 56.1341 157.297 51.2972 154 48C148.29 42.2902 142.864 35.5981 136.222 31C125.771 23.7644 108.402 23 96 23C87.3406 23 102.579 23 105.5 23C112.353 23 120.486 25.9044 127.333 27C133.027 27.9109 136.829 29.2145 139.222 34C140.429 36.4134 143.072 43 146.5 43C151.784 43 161.311 37.4845 165 34C168.238 30.9416 174.713 27.1652 175 22C175.211 18.1994 170.914 -4.2456 167.778 4.22222C164.69 12.559 165 20.7025 165 29.5C165 34.7143 165.468 41.3965 166.5 46.5556C170.51 66.6066 167.734 88.0508 172.056 107.5C173.515 114.069 181.967 121 188.444 121C200.782 121 211.495 124.438 224 121.222C235.983 118.141 240 105.133 240 94.2222C240 90.3932 240.953 85.5824 238.556 82.5C235.43 78.4813 232.67 75.1127 228 72.7778C219.066 68.3107 209.339 76.1709 205 83.2222C201.493 88.9215 200.932 105.587 208.611 109C217.319 112.87 230.954 116.854 236 105.5C239.392 97.8682 237 90.5634 237 82.5C237 77.6802 236.581 90.6933 237.222 92.7778C238.497 96.9205 239.012 101.303 239.944 105.5C241.148 110.918 241.728 113 248 113C251.782 113 261.574 113.341 264.778 110.778C267.33 108.736 274.008 107.68 277.444 107.056C283.124 106.023 288.891 105.774 294.778 106C300.091 106.204 291.256 114.894 288.833 115.5C278.819 118.004 267.244 119.208 256.944 120C247.817 120.702 239.024 124.124 230 124.944C208.153 126.931 186.532 131.111 164.444 131.778C115 133.271 65.3974 130.541 16.0556 127.944C11.6615 127.713 -1.51124 127 2.88892 127C64.8489 127 126.814 125.138 188.778 125C205.717 124.962 221.319 125.903 238.222 127C268.719 128.979 299.594 129.971 330.111 127.778C333.88 127.507 344.002 127.998 347 125" 
                                stroke="black" 
                                strokeWidth="3" 
                                strokeLinecap="round"/>
                            </svg>
                        </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="60" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.4" d="M15.4807 13.2302L11.6907 8.18018H6.08072C5.12072 8.18018 4.64073 9.34018 5.32073 10.0202L10.5007 15.2002C11.3307 16.0302 12.6807 16.0302 13.5107 15.2002L15.4807 13.2302Z" fill="grey"/>
                                    <path d="M17.9195 8.18018H11.6895L15.4795 13.2302L18.6895 10.0202C19.3595 9.34018 18.8795 8.18018 17.9195 8.18018Z" fill="lightblue"/>
                            </svg>         
                    </div>             
                    {/*SKILLS*/}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">
                            SKILLS
                        </h1>
                            <div className="flex gap-2 flex-wrap">
                                <span className="rounded p-2 bg-black text-white ">
                                    HTML
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    CSS
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    Javascript
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    Tailwind CSS
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    Bootstrap
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    React.js
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    NextJS
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    Linux
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    Version Control
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    RESTful APIs
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    Node.js
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    Express.js
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    MongoDB
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    SCSS
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    Communication
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    Analytical
                                </span>
                                <span className=" ring-1 ring-black rounded p-1 bg-black text-white ">
                                    Eye for Details
                                </span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="60" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.4" d="M15.4807 13.2302L11.6907 8.18018H6.08072C5.12072 8.18018 4.64073 9.34018 5.32073 10.0202L10.5007 15.2002C11.3307 16.0302 12.6807 16.0302 13.5107 15.2002L15.4807 13.2302Z" fill="grey"/>
                                    <path d="M17.9195 8.18018H11.6895L15.4795 13.2302L18.6895 10.0202C19.3595 9.34018 18.8795 8.18018 17.9195 8.18018Z" fill="lightblue"/>
                            </svg>  
                    </div>
                    {/*EXPERIENCE*/}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl"> 
                            EXPERIENCE
                        </h1>
                        <div className="flex flex-col justify-center align-center">
                            <div className="flex justify-between">
                                {/* LEFT DETAILS */}
                                <div className="w-1/3 ">
                                        <h1 className="font-bold text-lg rounded-b rounded-s bg-gray-300 p-3 w-full">
                                        Senior Front-End Developer 
                                        </h1>
                                        <p className="text-sm font-serif font-thin italic p-3">
                                            I developed UI's for data-driven autonomous vehicle systems, alongside collaborating with backend developers and data scientists, to develop project delivery within a new innovation-focused squad.
                                        </p>
                                        <p className="text-xs text-red-300 p-3">
                                            September 2023 – January 2024
                                        </p>
                                        <p className="text-xs rounded bg-gray-300 p-2 w-fit">
                                            Olivdamarc 
                                        </p>
                                </div>
                                {/* LINES */}
                                <div className="w-1/6 flex justify-center">
                                    <div className="w-1 h-full relative bg-gray-300">
                                        {/* CIRCLES */}
                                        <div className="absolute rounded-full w-5 h-5 ring-4 ring-red-300 bg-gray-300  -left-2" />
                                    </div>
                                </div>
                                {/* RIGHT DETAILS */}
                                <div className="w-1/3">
                                    
                                </div>
                            </div>
                            <div className="flex justify-between">
                                {/* LEFT DETAILS */}
                                <div className="w-1/3">
                                        
                                </div>
                                {/* LINES */}
                                <div className="w-1/6 flex justify-center">
                                    <div className="w-1 h-full relative bg-gray-300">
                                        {/* CIRCLES */}
                                        <div className="absolute rounded-full w-5 h-5 ring-4 ring-red-300 bg-gray-300  -left-2" />
                                    </div>
                                </div>
                                {/* RIGHT DETAILS */}
                              
                                <div className="w-1/3">
                                        <h1 className="font-bold text-lg rounded-b rounded-e bg-gray-300 p-3 w-full">
                                        Front-End Developer 
                                        </h1>
                                        <p className="text-sm font-serif font-thin italic p-3">
                                            I developed the front end of a video conferencing app called Konn3ct from scratch, utilizing React for a responsive UI, integrating WebRTC for real-time communication, and Redux for state management. Implemented features like user authentication, video streaming, screenshare and other interactive UI elements, ensuring cross-browser compatibility and optimal performance.
                                        </p>
                                        <p className="text-xs text-red-300 p-3">
                                        October 2020 - September 2023 
                                        </p>
                                        <p className="text-xs rounded bg-gray-300 p-2 w-fit">
                                            Newwaves Ecosytem 
                                        </p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                {/* LEFT DETAILS */}
                                <div className="w-1/3 flex flex-col gap-2">
                                        <h1 className="font-bold text-lg rounded-b rounded-s bg-gray-300 p-3 w-full">
                                        Fullstack Developer Intern 
                                        </h1>
                                        <p className="text-sm font-serif font-thin italic p-3">
                                            I interned as a Full Stack Developer, where I got practical and hands on experience with a range of technologies and frameworks. I was able to gain lots of skills in both front-end and back-end development, contributing to several projects and my creativity.
                                        </p>
                                        <p className="text-xs text-red-300 p-3 ">
                                        October 2019 - October 2020 
                                        </p>
                                        <p className="text-xs rounded bg-gray-300 p-2 w-fit">
                                            GOMYCODE 
                                        </p>
                                </div>
                                {/* LINES */}
                                <div className="w-1/6 flex justify-center">
                                    <div className="w-1 h-full relative bg-gray-300">
                                        {/* CIRCLES */}
                                        <div className="absolute rounded-full w-5 h-5 ring-4 ring-red-300 bg-gray-300  -left-2" />
                                    </div>
                                </div>
                                {/* RIGHT DETAILS */}
                                <div className="w-1/3">
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  EDUCATION */}
                    <div>
                        <h1 className="font-bold">
                            EDUCATION
                        </h1> 
                            <p>
                                Manchester Metropolitan University –Master’s Degree Cyber Security
                            </p>
                            <p>
                                Babcock University
                            </p>
                            <p>
                                Thames Valley College
                            </p>
                    </div>
                </div>
                <div className="hidden">
                    {/* Brain SVG */}
                    Brain
                </div>
            </div>
        </motion.div>
    )
}
export default About