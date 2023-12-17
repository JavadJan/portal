import React, { useState } from 'react'
import { motion } from "framer-motion";
export const Project = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    const variant = {
        hover: {
            y: "0%",
            transition: {
                duration: 1,
                ease: "linear",
            }
        },
        leave: {
            y: "100%",
            transition: {
                duration: 1,
                ease: "linear",
            }
        }
    }

    return (
        <motion.div className='cursor-context-menu h-[450px] flex flex-col bg-white rounded-lg overflow-hidden shadow-lg ring ring-white-400 relative'
            animate={isHovered ? 'hover' : 'leave'}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}

        >

            <img src={project.img} alt="" className='object-cover h-[47%] brightness-[0.65] hover:backdrop-blur-xl hover:bg-white/30' />
            <div className='px-2 py-4 flex flex-col justify-between h-[100%] '>
                <h1 className='text-xl'>{project.title}</h1>
                <p className='text-[16px] text-[#555] font-montserrat'>{project.desc}</p>
                <p className='text-[#777] text-[16px]'>{project.result}</p>

                <div className='flex gap-1 items-center'

                >
                    <span className='font-bold'>Tools: </span>
                    {project.tech.map((t) => {
                        return <span className='text-[14px]'>{t}</span>
                    })}
                </div>
            </div>

            <motion.div className='text-center bg-[#0478e4c9] h-12 text-white py-3 absolute bottom-0 w-full flex gap-5 justify-center items-center'
                variants={variant}
            >
                <a target="_blank" className='hover:bg-[#097999] px-4 py-2 rounded-md' href={project.demo}>Demo</a>
                <a target="_blank" className='hover:bg-[#097999] px-4 py-2 rounded-md' href={project.github}>Github</a>
            </motion.div>
        </motion.div>
    )
}

// export default Project