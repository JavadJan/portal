"use client"
import { email, github, instagram, linkedin, twitter } from '@public/assets/icons';
import { video } from '@public/assets/icons';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react'
import { FaPhone, } from 'react-icons/fa';
import { location } from '../public/assets/icons';
import { motion } from "framer-motion";
import { UserContext } from '@context/Provider';

const ContactMe = () => {
  const { de, en, lang, setLang } = useContext(UserContext)
  const [msgEn, setMsgEn] = useState(null)
  const [msgDe, setMsgDe] = useState(null)
  useEffect(() => {
    const getMenu = async () => {
      try {
        const resEn = await en
        const resDe = await de

        setMsgDe(resDe)
        setMsgEn(resEn)
      } catch (error) {
        console.log(error)
      }
    }
    getMenu()

  }, [de, en])
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.2, y: 2 }}
      whileInView={{ scale: 1, opacity: 1, type: "ease", y: 0 }}
      transition={{ duration: 1.5 }}
      className='max-container bg-[#001524] rounded-3xl px-[5%] flex justify-between max-sm:flex-col gap-[3%] py-10 max-lg:h-auto h-[66vh] '>
      {(msgEn && msgDe) && <>

        <div className='max-lg:w-full w-[40%] bg-[#235952] max-lg:h-auto min-h-[80vh] h-auto  pt-6 pb-10 px-8 -mt-24 max-lg:mt-0 rounded-3xl max-sm:mb-10 relative flex flex-col gap-[2%] max-lg:gap-6'>

          <div className='flex justify-between'>
            <div className='hover:bg-[#2352344d] cursor-pointer  rounded-lg px-10 py-4'>
              <Image src={video} width={60} height={30} />
            </div>
            <div className='hover:bg-[#2352344d] cursor-pointer  rounded-lg px-10 py-4'>
              Calendar
            </div>
          </div>

          <h1 className='text-center text-3xl whitespace-nowrap max-lg:text-xl  font-montserrat text-white-400 w-full'>{!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.title : msgDe.filter((ms) => ms.id === 'contact')[0].contact.title}</h1>

          <div className='flex flex-col gap-6 h-[85%] py-1'>
            <p className='text-white-400 font-montserrat pl-10'>{!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.desc : msgDe.filter((ms) => ms.id === 'contact')[0].contact.desc}</p>
            <div className='flex gap-5 text-white-400'>
              <FaPhone style={{ transform: 'scaleX(-1)' }} />
              <a href={`tel:+49216485282`} className="hover:text-blue-500 transition-colors">
                +4921 648 5282
              </a>
            </div>
            <div className='flex gap-5 text-white-400'>
              <Image src={email} width={18} height={18} />
              <a href={`mailto:khavarimjavad@gmail.com`} className="hover:text-blue-500 transition-colors">
                khavarimjavad@gmail.com
              </a>
            </div>
            <div className='flex gap-5 text-white-400'>
              <Image src={location} width={18} height={18} />
              <a
                href='https://www.google.com/maps/place/Krefeld/@51.3456345,6.5920815,12z/data=!3m1!4b1!4m6!3m5!1s0x47b8baab475e5359:0x2fa2b9edc6d18857!8m2!3d51.3345409!4d6.565208!16zL20vMDE4aHF0?entry=ttu'
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors">Krefeld, Germany</a>
            </div>

          </div>


          <div className='flex justify-center gap-5 items-center'>
            <a href='https://linkedin.com/in/javad-khavari' target='_blank' className='cursor-pointer p-1  flex justify-center items-center'>
              <Image src={linkedin} width={40} height={40} />
            </a>
            <a href='https://twitter.com/Javad_Bamyan' target='_blank' className='cursor-pointer p-1 flex justify-center items-center'>
              <Image src={twitter} width={40} height={40} />
            </a>
            <a href='https://github.com/JavadJan' target='_blank' className='cursor-pointer p-1 flex justify-center items-center mt-2'>
              <Image src={github} width={40} height={40} />
            </a>

          </div>
        </div>

        <div className='max-lg:w-full w-[60%] flex flex-col justify-center items-start gap-2 font-palanquin'>


          <form className='w-full font-palanquin flex flex-col items-start gap-4'>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-white-400' htmlFor="email">{!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.fullName : msgDe.filter((ms) => ms.id === 'contact')[0].contact.fullName}</label>
              <input name='email' type="text" placeholder={!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.fullName : msgDe.filter((ms) => ms.id === 'contact')[0].contact.fullName} className='px-2 w-[100%] py-2 outline-none border-none' />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-white-400' htmlFor="email">{!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.email : msgDe.filter((ms) => ms.id === 'contact')[0].contact.email}</label>
              <input name='email' type="email" placeholder={!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.email : msgDe.filter((ms) => ms.id === 'contact')[0].contact.email} className='px-2 w-[100%] py-2 outline-none border-none' />
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label className='text-white-400' htmlFor="message">{!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.message : msgDe.filter((ms) => ms.id === 'contact')[0].contact.message}</label>
              <textarea name="message" id="" cols="25" rows="6" placeholder={!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.message : msgDe.filter((ms) => ms.id === 'contact')[0].contact.message} className='px-2 outline-none py-1'></textarea>
            </div>
            <button type='submit' className='self-stretch border-1 border-white-400 w-36 h-14 bg-[#0766AD] rounded-lg cursor-pointer text-white-400 text-2xl'>{!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.send : msgDe.filter((ms) => ms.id === 'contact')[0].contact.send}</button>
          </form>



          <div className='flex gap-5'>
          </div>
        </div>
      </>}
    </motion.section>

  )

}

export default ContactMe