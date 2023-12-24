"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Project } from "@components/Project.jsx";
import { UserContext } from '@context/Provider';
import { FaPhone, FaReact } from 'react-icons/fa';
import Image from 'next/image';
import { firebase, tailwind, nextjs, mongodb, react } from "@public/assets/images"
import { motion } from "framer-motion";


const Projects = () => {
  const arr = [1, 2, 3, 4, 5]
  const { de, en, lang, setLang } = useContext(UserContext)

  const [projectsEn, setProjectEn] = useState(null)
  const [projectsDe, setProjectDe] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const dataEn = await en
        const dataDe = await de

        setProjectDe(dataDe)
        setProjectEn(dataEn)
      } catch (error) {

      }
    }

    getData()
  }, [de, en])

  return (
    <section className='max-w-[1444px] mx-auto my-auto pt-10'>
      

      <div className='absolute w-[100%] max-container max-lg:left-0 flex justify-center items-center max-md:gap-1 gap-4 max-md:-top-10 -top-16 z-30'>
        <div className='max-md:h-[70px] h-[120px] max-dm:w-[70px] w-[120px] project-shadow max-md:p-3 p-6 rounded-lg bg-[#0E2954] flex justify-center items-center'>
          <Image src={tailwind} />
        </div>
        <div className='max-md:h-[70px] h-[120px] max-dm:w-[70px] w-[120px] project-shadow max-md:p-3 p-6 rounded-lg bg-[#0E2954] flex justify-center items-center'><Image src={nextjs} /></div>
        <div className='max-md:h-[70px] h-[120px] max-dm:w-[70px] w-[120px] project-shadow max-md:p-3 p-6 rounded-lg bg-[#0E2954] flex justify-center items-center'><Image src={react} /></div>
        <div className='max-md:h-[70px] h-[120px] max-dm:w-[70px] w-[120px] project-shadow max-md:p-3 p-6 rounded-lg bg-[#0E2954] flex justify-center items-center'><Image src={firebase} /></div>
        <div className='max-md:h-[70px] h-[120px] max-dm:w-[70px] w-[120px] project-shadow max-md:p-3 p-6 rounded-lg bg-[#0E2954] flex justify-center items-center'><Image src={mongodb} /></div>
      </div>

      <h1 className='max-md:justify-start justify-center max-md:text-lg text-2xl max-md:w-full w-[60%] max-md:mx-2 mx-auto font-sans mb-5 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-violet-700'>{!lang ? "A showcase of my web development projects, demonstrating my skills in creating responsive and user-friendly websites" : "Eine Auswahl meiner Webentwicklungsprojekte, die meine Fähigkeiten in der Erstellung von responsiven und benutzerfreundlichen Websites demonstrieren."}</h1>

      <div className='project'>
        {!lang ?
          ((projectsEn && projectsDe) && projectsEn.filter(prj => prj.id === 'projects')[0].projects.map((project) => { return <Project project={project} /> }))
          :
          ((projectsEn && projectsDe) && projectsDe.filter(prj => prj.id === 'projects')[0].projects.map((project) => { return <Project project={project} /> }))}


      </div>
    </section>
  )
}

export default Projects