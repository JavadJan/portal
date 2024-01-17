import { turtle } from '@public/assets/images'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaRobot } from 'react-icons/fa'
import { chatbot } from '../public/assets/icons'
import { motion } from 'framer-motion'
import Chat from './Chat'
export const ChatRobot = () => {
  const [chat, setChat] = useState(true)
  const [change, setChange] = useState(false)
  const variants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, duration: 1 },
    },
    closed: { opacity: 0 }

  }

  return (
    <div className='fixed bottom-0 flex justify-start items-end flex-col right-0 z-50'>
      {chat &&   <Chat chat={chat} setChat={setChat}/> }
      <div className='bg-[#0478e4] h-fit w-fit p-3 rounded-full cursor-pointer relative bottom-0 right-14'>
        <Image src={chatbot} width={53} height={53} onClick={() => setChat(!chat)} />
      </div>
    </div >
  )
}

