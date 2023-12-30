"use client"
import { code, github, linkedin, twitter } from '@public/assets/icons'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from "@context/Provider";


const Footer = () => {
    const { de, en, lang } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [deFooter, setDeFooter] = useState(null)
    const [enFooter, setEnFooter] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(false)
                const resDe = await de
                const resEn = await en

                setDeFooter(resDe)
                setEnFooter(resEn)
                setLoading(true)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }

        }
        getData()
    }, [de, en])
    return (
        <section className='text-white flex flex-col justify-between h-full font-palanquin gap-10'>
            <div class="container mx-auto flex justify-between  flex-wrap max-md:gap-8">
                <div class="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 flex justify-start gap-10 items-center flex-col">
                    <h2 class="text-2xl font-bold mb-4 name">Mohammad Javad Khavari</h2>
                    <Image src={code} width={50} height={50} alt="logo" />
                    <div>
                        <a href={`mailto:khavarimjavad@gmail.com`} className="hover:text-blue-500 transition-colors block">
                            Email: khavarimjavad@gmail.com
                        </a>
                        <a href={`tel:+49216485282`} className="hover:text-blue-500 transition-colors block">
                            Tel: +4921 648 5282
                        </a>                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h2 class="text-lg font-bold mb-4">About Portfolio</h2>
                    <p>This portfolio showcases my expertise in web development, featuring a seamless integration of Tailwind CSS and customizations, powered by Next.js. The multilingual presentation in both Deutsch and English is achieved by fetching data from Firebase, stored in two distinct languages using Postman. Images are efficiently stored in Firebase Storage. The entire portfolio is deployed on Netlify, reflecting precision, efficiency, and a commitment to modern web technologies.</p>
                </div>
                {(deFooter && enFooter) && <div class="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0 flex flex-col gap-5">
                    {!lang ?
                        enFooter.filter((mn) => mn.id === 'menu')[0].menu.map((item) => {
                            return (
                                <a
                                    key={item.lable}
                                    href={item.href}
                                    className="block"
                                >{item.lable}</a>
                            )
                        })
                        :
                        deFooter.filter((mn) => mn.id === 'menu')[0].menu.map((item) => {
                            return (
                                <a key={item.lable} href={item.href} className="block">{item.lable}</a>
                            )
                        })}
                </div>}

            </div>
            <div class="w-full flex flex-col justify-center">
                <hr className='bg-white text-white mb-10' />
                <div className='w-full flex justify-center items-center mb-4 gap-2 md:mb-1'>
                    <a href='https://linkedin.com/in/javad-khavari' target='_blank' className='cursor-pointer p-2  flex justify-center items-center w-[35px] h-[35px] ring-1 ring-white-400 rounded-full'>
                        <Image src={linkedin} width={25} height={25} />
                    </a>
                    <a href='https://twitter.com/Javad_Bamyan' target='_blank' className='cursor-pointer p-2 flex justify-center items-center w-[35px] h-[35px] ring-1 ring-white-400 rounded-full'>
                        <Image src={twitter} width={25} height={25} />
                    </a>
                    <a href='https://github.com/JavadJan' target='_blank' className='cursor-pointer p-2 flex justify-center items-center w-[35px] h-[35px]  ring-1 ring-white-400 rounded-full'>
                        <Image src={github} width={25} height={25} />
                    </a>

                </div>
                <div className='flex justify-center'>
                    <h2 class="max-md:text-sm text-lg font-bold mb-4">Copyright</h2>
                    <p className='max-md:text-[14px] text-[16px]'>&copy; 2023 Mohammad Javad Khavari. All rights reserved.</p></div>
            </div>
        </section>
    )
}

export default Footer