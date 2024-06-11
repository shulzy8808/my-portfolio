"use client"
import {motion} from "framer-motion"
const About = () => {
    return(
        <motion.div className="h-full w-full"
        initial={{y: "-100vh"}}
        animate={{y: "0%"}}
        transition={{duration:1}}
        >
             {/*ABOUT ME*/}
            <div>
               <h1>
                    PROFESSIONAL SUMARY
                </h1>
                <p>
                Creative task-driven individual with over 2years of experience in web design, development and security, equipped with knowledge in HTML, CSS, JavaScript and other programming languages apart from experience in team management and project management. Proficient in testing, UI/UX interface designing, market research and troubleshooting complex issues. I am passionate about creating, engaging user experiences, constantly learning and adapting to new technologies with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high quality results under strict deadlines.
                </p>
            </div>
             {/*SKILLS*/}
            <div>
                <p>
                    HTML
                </p>
                <p>
                CSS
                </p>
                <p>
                    Javascript
                </p>
                <p>
                React.js
                </p>
                <p>
                NextJS
                </p>
                <p>
                Linux
                </p>
                <p>
                Version Control
                </p>
                <p>
                RESTful APIs
                </p>
                <p>
                    Tailwind CSS
                </p>
                <p>
                    Bootstrap
                </p>
                <p>
                    Noode.js
                </p>
                <p>
                    Express.js
                </p>
                <p>
                    MongoDB
                </p>
                <p>
                    SCSS
                </p>
                <p>
                    Communication
                </p>
                <p>
                    Analytical
                </p>
                <p>
                    Eye for Details
                </p>
            </div>
            {/*EXPERIENCE*/}
            <div>
               
            </div>
              {/*  EDUCATION */}
              <div>
               
            </div>
        </motion.div>
    )
}
export default About