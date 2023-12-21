"user client"
import { UserContext } from '@context/Provider'
import React, { useContext, useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { email1, github, instagram, linkedin, twitter } from '@public/assets/icons';
import { location } from '../public/assets/icons';
import Image from 'next/image';


const AboutMe = () => {
  const { de, en, lang } = useContext(UserContext)
  const [aboutDe, setAboutDe] = useState(null)
  const [aboutEn, setAboutEn] = useState(null)
  useEffect(() => {
    const getData = async () => {
      try {
        const aboutEn = await en
        const aboutDe = await de

        setAboutDe(aboutDe)
        setAboutEn(aboutEn)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [de, en])

  return (
    <section className='max-w-[1444px] mx-auto my-auto flex justify-between flex-col gap-8'>
      <motion.span
        animate={{ y: -10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.4,
          // rotate:360
        }}
        className=''
      >
        <img src="https://firebasestorage.googleapis.com/v0/b/myprojects-b250e.appspot.com/o/astro2.png?alt=media&token=9e3f06a2-0f8e-40bb-9901-3474d5748536" alt="" className="absolute object-cover top-[-230px] left-[-100px] max-md:left-[-50px]  w-[300px] " />
      </motion.span>

      <div className='flex justify-between gap-10 flex-wrap max-md:flex-col'>
        <div className='flex-1 flex flex-col justify-between max-md:gap-5'>
          {/* 1 introduction*/}
          {(aboutDe && aboutDe) && <p className=''>{!lang ? aboutEn.filter(a => a.id === 'aboutMe')[0].aboutMe.introduction : aboutDe.filter(a => a.id === 'aboutMe')[0].aboutMe.introduction}</p>}

          {/* 1. certificate */}
          {(aboutDe && aboutEn) && <div className='flex justify-end items-end columns-3 gap-10'>
            {!lang ?
              aboutEn.filter(a => a.id === 'aboutMe')[0].aboutMe.certificate.map(cr => {
                return <div className='col-span-2 flex flex-col items-end'>
                  <h1 className='mb-2'>{cr.title}</h1>
                  <a href={cr.reference} target='_blank' className='inline-block'>
                    <img src={cr.img} alt={cr.title} className=' cursor-pointer h-[100px] w-[130px]' />
                  </a>
                </div>
              })
              :
              aboutDe.filter(a => a.id === 'aboutMe')[0].aboutMe.certificate.map(cr => {
                return <div className='col-span-3 flex flex-col items-end'>
                  <h1 className='mb-2'>{cr.title}</h1>
                  <a href={cr.reference} target='_blank' className='inline-block'>
                    <img src={cr.img} alt={cr.title} className=' cursor-pointer h-[100px] w-[130px]' />
                  </a>
                </div>
              })}

          </div>}

        </div>

        {/* 2 education*/}
        {(aboutDe && aboutEn) && <div className='flex-1 flex flex-col gap-5'>
          {!lang ?
            aboutEn.filter(a => a.id === 'aboutMe')[0].aboutMe.education.map(ed => {
              return <div className='flex flex-col gap-1'>
                <p className='text-[#777] font-bold '>{ed.start} - {ed.end}</p>

                <h1 className='text-xl bg-[#333] w-fit px-2 italic'>{ed.title}</h1>
                <h2 className='flex justify-start items-center gap-3 bg-[#333] w-fit px-2 italic'><Image src={location} width={18} height={18} /> {ed.location}</h2>
                <p className='text-[#bbb]'>{ed.output}</p>
              </div>
            })
            :
            aboutDe.filter(a => a.id === 'aboutMe')[0].aboutMe.education.map(ed => {
              return <div className='flex flex-col gap-1'>
                <p>{ed.start} - {ed.end}</p>

                <h1 className='text-xl bg-[#333] w-fit px-2 italic'>{ed.title}</h1>
                <h2 className='flex justify-start items-center gap-3 bg-[#333] w-fit px-2 italic'><Image src={location} width={18} height={18} /> {ed.location}</h2>
                <p>{ed.output}</p>
              </div>
            })}
        </div>}
      </div>

      <div className='flex justify-around gap-10 max-md:flex-col max-md:mb-24'>

        {/* 2 passion */}
        {(aboutDe && aboutDe) && <p className='flex-1'>Passionate:
          <br />
          {!lang ? aboutEn.filter(a => a.id === 'aboutMe')[0].aboutMe.passion : aboutDe.filter(a => a.id === 'aboutMe')[0].aboutMe.passion}</p>}

        <div className='flex-1'></div>


      </div>
    </section>
  )
}

export default AboutMe