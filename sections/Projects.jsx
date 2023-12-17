"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Project } from "@components/Project.jsx";
import { UserContext } from '@context/Provider';

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
    <section className='max-w-[1444px] mx-auto my-auto'>
      <h1>My Personal Project</h1>
      <div className='project'>
        {lang ?
          ((projectsEn && projectsDe) && projectsEn.filter(prj => prj.id === 'projects')[0].projects.map((project) => 
           { return <Project project={project} /> }))
          :
          ((projectsEn && projectsDe) && projectsDe.filter(prj => prj.id === 'projects')[0].projects.map((project) => { return <Project project={project} /> }))}


      </div>
    </section>
  )
}

export default Projects