"use client"
import { email1, github, instagram, linkedin, twitter } from '@public/assets/icons';
import { video } from '@public/assets/icons';
import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaPhone, } from 'react-icons/fa';
import { location } from '../public/assets/icons';
import { motion } from "framer-motion";
import { UserContext } from '@context/Provider';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmail } from 'validator';
import r_planet from '@public/assets/images/r-planet.jpeg'

const ContactMe = () => {
  const { de, en, lang, setLang } = useContext(UserContext)
  const [msgEn, setMsgEn] = useState(null)
  const [msgDe, setMsgDe] = useState(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const form1 = useRef()

  const success = () => toast.success('Message successfully received ✔')
  const err = () => toast.error('An error has occurred! Try again')
  const emailNotValid = () => toast.error('The email is not valid please, try with an valid email!')




  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(form1.current)
    if (isEmail(email)) {
      emailjs.sendForm('service_pun76bb', 'template_xaebh8m', form1.current, 'a8c8Yk5xsPBcuaC8v')
        .then((result) => {
          console.log(result.text);
          success()

          init()
        }, (error) => {
          err(error.text)

        });
    } else {
      emailNotValid()
    }
  }

  const init = () => {
    setEmail('')
    setFullName('')
    setMessage('')
  }
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
  // bg-[#00152491] 
  return (
    <motion.section
      className='max-container rounded-3xl px-[5%] flex justify-between items-center max-md:flex-col  max-md:gap-10 gap-0 max-lg:py-0 py-10 max-lg:h-auto lg:h-[60vh] relative z-20'>

      {(msgEn && msgDe) && <>
        <motion.div
          initial={window.innerWidth >= 768 ? { opacity: 0, y: 2, x: -500 } : { opacity: 0, y: 2, x: -50 }}
          whileInView={{ opacity: 1, type: "ease", y: 0, x: 0 }}
          transition={{ duration: 0.3, }}
          className='max-md:w-full w-[500px] bg-[#183D3Da4] max-lg:h-auto min-h-[80vh] h-auto  py-6 px-8 max-lg:mt-0 rounded-3xl max-sm:mb-10 flex flex-col justify-between max-lg:gap-6'>

          {/* <div className='flex justify-between '>
            <div className='hover:bg-[#2352344d] cursor-pointer  rounded-lg px-10 py-4'>
              <Image src={video} width={60} height={30} />
            </div>
            <div className='hover:bg-[#2352344d] cursor-pointer  rounded-lg px-10 py-4'>
              Calendar
            </div>
          </div> */}


          <div className='flex flex-col gap-6 h-auto py-1 max-md:text-gray-500'>
            <h1 className='text-center text-2xl whitespace-nowrap max-lg:text-xl  font-montserrat text-white-400 w-full'>{!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.title : msgDe.filter((ms) => ms.id === 'contact')[0].contact.title}</h1>
            {/* <p className='text-white-400 font-montserrat pl-10'>{!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.desc : msgDe.filter((ms) => ms.id === 'contact')[0].contact.desc}</p> */}

            {/* start */}
            <form
              className='w-full font-palanquin flex flex-col items-start gap-4'
              ref={form1}
              onSubmit={sendEmail}>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white-400' htmlFor="email">{!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.fullName : msgDe.filter((ms) => ms.id === 'contact')[0].contact.fullName}</label>
                <input name='fullName' type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.fullName : msgDe.filter((ms) => ms.id === 'contact')[0].contact.fullName} className='px-2 w-[100%] py-2 outline-none border-none' />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white-400' htmlFor="email">{!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.email : msgDe.filter((ms) => ms.id === 'contact')[0].contact.email}</label>
                <input name='email' type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.email : msgDe.filter((ms) => ms.id === 'contact')[0].contact.email} className='px-2 w-[100%] py-2 outline-none border-none' />
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label className='text-white-400' htmlFor="message">{!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.message : msgDe.filter((ms) => ms.id === 'contact')[0].contact.message}</label>
                <textarea name="message" id="" cols="25" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={!lang ? msgEn.filter((ms) => ms.id === 'contact')[0].contact.message : msgDe.filter((ms) => ms.id === 'contact')[0].contact.message} className='px-2 outline-none py-1'></textarea>
              </div>
              <button type='submit' className='self-stretch border-1 text-center border-white-400 w-32 h-12 z-20 bg-[#0766AD] rounded-lg cursor-pointer text-white-400 text-xl'>{!lang ? 'send' : 'senden'}</button>
            </form>
            {/* end */}
            <div className='flex gap-5 text-white-400'>
              <FaPhone style={{ transform: 'scaleX(-1)' }} />
              <a href={`tel:+49216485282`} className="hover:text-blue-500 transition-colors">
                +4921 648 5282
              </a>
            </div>
            <div className='flex gap-5 text-white-400'>
              <Image src={email1} width={18} height={18} />
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
          <div className='w-full flex justify-center items-center my-4 gap-2  md:mb-1'>
            <a href='https://linkedin.com/in/javad-khavari' target='_blank' className='cursor-pointer p-2  flex justify-center items-center w-[35px] h-[35px] ring-1 ring-white-400 rounded-full transition-all duration-100 ease-in hover:bg-white-400 '>
              <Image src={linkedin} width={25} height={25} />
            </a>
            <a href='https://twitter.com/Javad_Bamyan' target='_blank' className='cursor-pointer p-2 flex justify-center items-center w-[35px] h-[35px] ring-1 ring-white-400 rounded-full transition-all duration-100 ease-in hover:bg-white-400'>
              <Image src={twitter} width={25} height={25} />
            </a>
            <a href='https://github.com/JavadJan' target='_blank' className='cursor-pointer p-2 flex justify-center items-center w-[35px] h-[35px]  ring-1 ring-white-400 rounded-full transition-all duration-100 ease-in hover:bg-white-400'>
              <Image src={github} width={25} height={25} />
            </a>

          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </motion.div>



        <motion.div className='max-md:w-[350px] w-[450px] max-md:h-[350px] h-[450px] max-md:relative absolute max-md:right-1 right-10 -z-10 lg:brightness-75  earth bg-no-repeat bg-cover'
          initial={window.innerWidth > 768 ? { opacity: 0, y: 2, x: 500 } : { y: 2, x: 50 }}
          whileInView={{ opacity: 1, y: 0, type: "ease", x: 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>

      </>}
    </motion.section>

  )

}

export default ContactMe