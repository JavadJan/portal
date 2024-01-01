import React, { useState } from 'react'
import { motion } from "framer-motion";
export const Project = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    const variant = {
        hover: {
            y: "0%",
            transition: {
                duration: 0.7,
                ease: "linear",
            }
        },
        leave: {
            y: "101%",
            transition: {
                duration: 0.7,
                ease: "linear",
            }
        }
    }

    return (
        <motion.div className='cursor-context-menu h-[450px] flex flex-col bg-white rounded-lg overflow-hidden shadow-lg relative card'
            animate={isHovered ? 'hover' : 'leave'}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
        >

            <img src={project.img} alt="" className='object-cover h-1/3 brightness-[0.85] hover:backdrop-blur-xl hover:bg-white/30' />

            <div className='px-2 py-4 flex flex-col justify-between h-[100%] '>
                <h1 className='text-xl card-desc'>{project.title}</h1>
                <p className='text-[0.9rem] leading-6 text-[#4b4b4b] font-montserrat card-desc'>{project.desc}</p>
                <p className='text-[16px] card-desc'>{project.result}</p>

                <div className='flex gap-1 items-center text-[#0478e4] font-bold'

                >
                    <span className='font-bold'>Tools: </span>
                    {project.tech.map((t , index) => {
                        return <span className='flex items-center text-[12px]'>{project.tech.length-1 === index ? t : t+','}</span>
                    })}
                </div>
            </div>

            <motion.div className='text-center bg-[#0478e4] h-12 text-white py-3 absolute bottom-0 w-full flex gap-5 justify-center items-center'
                variants={variant}
            >
                <a target="_blank" className='btn px-4 py-2 ' href={project.demo}>Demo</a>
                <a target="_blank" className='btn px-4 py-2' href={project.github}>Github</a>
            </motion.div>
        </motion.div>
    )
}

// export default Project