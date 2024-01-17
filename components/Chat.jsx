import React, { useState } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { send } from '../public/assets/icons';

const Chat = ({ chat, setChat }) => {
    const [prompt, setPrompt] = useState('')
    const handleChange = async (e) => {
        setPrompt(e.target.value)
    }

    const handlePrompt = async (e) => {
        e.preventDefault()
    }
    return (
        <motion.div className='bg-white w-[300px] h-[50vh] flex flex-col relative right-24 bottom-2'>
            <div className='h-[10%] bg-white-400 border-b-2 border-b-[#ddd] flex justify-between items-center px-5'>
                <h1 className='font-bold italic '>Chat with LLM</h1>
                <svg onClick={() => setChat(false)} width="20" height="20" viewBox="0 0 20 20" className="text-white flex justify-center items-center cursor-pointer">
                    <motion.path
                        strokeWidth="3"
                        stroke="black"
                        strokeLinecap="round"
                        transition={{ duration: 1, type: 'ease' }}
                        variants={{
                            // closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 15 L 17 2.5" },
                        }}
                        animate={chat ? "open" : "closed"}
                    />

                    <motion.path
                        strokeWidth="3"
                        stroke="black"
                        strokeLinecap="round"
                        transition={{ duration: 1, type: 'ease' }}
                        variants={{
                            // closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 15" },
                        }}
                        animate={chat ? "open" : "closed"}

                    />
                </svg>
            </div>
            <div className='h-[80%]'>
 
            </div>
            <form onSubmit={handlePrompt} className='h-[10%] w-full flex justify-between border-t-2 border-t-[#ddd]'>
                <input type="text" className='h-full w-full outline-none px-3' onChange={(e) => handleChange(e)} />
                <button type='submit' className='px-5'><Image src={send} width={35} height={25}/></button>
            </form>

        </motion.div>
    )
}

export default Chat