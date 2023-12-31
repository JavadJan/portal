import Button from '@/components/Button'
// import { javad } from '@public/assets/images'
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { calcLength, motion, useScroll, useTransform } from "framer-motion";
import { UserContext } from "@context/Provider";
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@utils/firebase';


const Profile = () => {
    const { de, en, lang, dropDown } = useContext(UserContext);
    const [userEn, setUserEn] = useState(null)
    const [userDe, setUserDe] = useState(null)
    const screenWidth = window.innerWidth;

    const percentageX = 0.5; // 50%
    const calculatedX = screenWidth > 1440 ? percentageX * screenWidth : (percentageX - 0.1) * screenWidth;

    const variants = {
        md: {
            x: "-150%",
            transition: {
                repeat: Infinity,
                duration: 20,
                repeatType: 'mirror',
                ease: "linear",
            }
        },
        lg: {
            x: "-150%",
            transition: {
                repeat: Infinity,
                duration: 20,
                ease: "linear",
            }
        }
    }

    useEffect(() => {
        const getLang = async () => {
            try {
                const langEn = await en
                const langDe = await de
                setUserEn(langEn)
                setUserDe(langDe)

            } catch (error) {
                console.log(error)
            }
        }
        getLang()


    }, [de, en])
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const yBg = useTransform(scrollYProgress, [0, 1], ["50%", "1000%"])
    return (
        <section ref={ref} className='max-container flex justify-between padding-profile  max-md:flex-col max-md:gap-0  overflow-hidden'>
            
            {(userEn && userDe) &&
                < div
                    className='flex-1 flex flex-col gap-5 mt-[90px] z-10 max-lg:mb-10' >
                    <h1 className='text-coral-red text-2xl '>{!lang ? userEn.filter((data) => data.id === "user")[0].user.title : userDe.filter((data) => data.id === "user")[0].user.title}</h1>
                    <p className={`font-montserrat ${dropDown && 'max-md:text-gray-500'} `} >{!lang ? userEn.filter((data) => data.id === "user")[0].user.desc : userDe.filter((data) => data.id === "user")[0].user.desc}</p>
                    <div className='flex justify-start gap-6 pb-10'>
                        <Button label='Contact Me' />
                        <motion.span
                            animate={{ x: -10 }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 1
                            }}
                            role="img"
                            aria-label="finger emoji"
                            className='text-[24px]'
                        >
                            👈
                        </motion.span>
                    </div>
                </div>
            }
            <motion.p
                className='absolute ml-4 left-8 text-[150px] bottom-[250px] max-md:bottom-[30%] whitespace-nowrap opacity-5 max-md:text-[70px]'
                animate={window.innerWidth > 760 ? 'lg' : 'md'}
                variants={variants}
            >Innovative Full Stack Developer, fusing ML and software for transformative solutions</motion.p>
            <div className='flex-1 w-full h-[550px] flex justify-center bg-cover bg-center self-end'>
                <div className='glassy-circle'></div>
                {/* <motion.div
                    className='absolute left-[20%] -top-[30%] w-[200px] h-[150px] border border-white-400 ring-white z-20 max-lg:w-[20%] max-lg:h-[30%] max-lg:hidden'
                    animate={{ x: calculatedX, rotate: -50, y: 450 }}

                    initial={{ opacity: 0.5, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 3 }}
                ></motion.div> */}
                <Image id='myimg' src='https://firebasestorage.googleapis.com/v0/b/myprojects-b250e.appspot.com/o/javad.png?alt=media&token=6322cad0-f739-42ef-be37-23434fabaeb1' width={500} height={500} alt='' className='object-cover z-20' />
            </div>
        </section >
    )
}

export default Profile