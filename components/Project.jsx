"use client"
import { UserContext } from '@context/Provider'
import React, { useContext } from 'react'

export const Project = ({ project }) => {
    return (
        <div className='cursor-pointer h-[450px] flex flex-col bg-white rounded-lg overflow-hidden shadow-lg ring ring-white-400 hover:brightness-50'>
            <img src={project.img} alt="" className='object-cover h-[47%] brightness-50 hover:backdrop-blur-xl hover:bg-white/30' />
            <div className='px-2 py-4 flex flex-col justify-between h-[100%] '>
                <h1>{project.title}</h1>
                <p className='text-[14px] text-[#555] font-montserrat'>{project.desc}</p>
                <p className='text-[#777] text-[16px]'>{project.result}</p>
                <div className=''>
                    {project.tech.map((t) => {
                        return <span>{t}</span>
                    })}
                </div>
            </div>
        </div>
    )
}

// export default Project