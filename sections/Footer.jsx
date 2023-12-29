import { github, linkedin, twitter } from '@public/assets/icons'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <section className='text-white flex flex-col justify-between h-full font-palanquin gap-10'>
            <div class="container mx-auto flex justify-between flex-wrap max-md:gap-8">
                <div class="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h2 class="text-lg font-bold mb-4">About Portfolio</h2>
                    <p>This portfolio showcases my expertise in web development, featuring a seamless integration of Tailwind CSS and customizations, powered by Next.js. The multilingual presentation in both Deutsch and English is achieved by fetching data from Firebase, stored in two distinct languages using Postman. Images are efficiently stored in Firebase Storage. The entire portfolio is deployed on Netlify, reflecting precision, efficiency, and a commitment to modern web technologies.</p>
                </div>
                <div class="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h2 class="text-lg font-bold mb-4">Contact Information</h2>
                    <p>Email: khavarimjavad@gmail.com</p>
                    <p>Phone: +1521 648 5282</p>
                </div>

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