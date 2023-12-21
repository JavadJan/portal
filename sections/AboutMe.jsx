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
        {/* 1 */}
        {(aboutDe && aboutDe) && <p className='flex-1'>{!lang ? aboutEn.filter(a => a.id === 'aboutMe')[0].aboutMe.introduction : aboutDe.filter(a => a.id === 'aboutMe')[0].aboutMe.introduction}</p>}

        {/* 3 */}
        {(aboutDe && aboutEn) && <div className='flex-1 flex flex-col gap-5'>
          {!lang ?
            aboutEn.filter(a => a.id === 'aboutMe')[0].aboutMe.education.map(ed => {
              return <div>
                <p className='text-[#777] font-bold '>{ed.start} - {ed.end}</p>

                <h1 className='text-xl'>{ed.title}</h1>
                <h2 className='flex justify-start items-center gap-3'><Image src={location} width={18} height={18} /> {ed.location}</h2>
                <p>{ed.output}</p>
              </div>
            })
            :
            aboutDe.filter(a => a.id === 'aboutMe')[0].aboutMe.education.map(ed => {
              return <div>
                <p>{ed.start} - {ed.end}</p>

                <h1>{ed.title}</h1>
                <h2>{ed.location}</h2>
                <p>{ed.output}</p>
              </div>
            })}
        </div>}
      </div>

      <div className='flex justify-between gap-10 max-md:flex-col'>

        {(aboutDe && aboutDe) && <p className='flex-1'>Passionate: {!lang ? aboutEn.filter(a => a.id === 'aboutMe')[0].aboutMe.passion : aboutDe.filter(a => a.id === 'aboutMe')[0].aboutMe.passion}</p>}

        {(aboutDe && aboutEn) && <div className='flex-1'>
          {!lang ?
            aboutEn.filter(a => a.id === 'aboutMe')[0].aboutMe.certificate.map(cr => {
              return <div>
                <h1>{cr.title}</h1>
                <a href={cr.reference} target='_blank' className='inline-block'>
                  <img src={cr.img} alt={cr.title} width={100} height={100} className='object-cover cursor-pointer' />
                </a>
              </div>
            })
            :
            aboutDe.filter(a => a.id === 'aboutMe')[0].aboutMe.certificate.map(cr => {
              return <div>
                <h1>{cr.title}</h1>
                <a href={cr.reference} target='_blank' className='inline-block'>
                  <img src={cr.img} alt={cr.title} height={100} width={100} className='object-cover cursor-pointer' />
                </a>
              </div>
            })}

        </div>}
      </div>
    </section>
  )
}

export default AboutMe