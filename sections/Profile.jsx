import Button from '@/components/Button'
import { javad } from '@public/assets/images'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { UserContext } from "@context/Provider";


const Profile = () => {
    const { de, en, lang } = useContext(UserContext);
    const [userEn, setUserEn] = useState(null)
    const [userDe, setUserDe] = useState(null)


    useEffect(() => {
        const getLang = async () => {
            try {
                const langEn = await en
                const langDe = await de
                // console.log("why state does not have value:", langData.en.user.title)
                setUserEn(langEn)
                setUserDe(langDe)

            } catch (error) {
                console.log(error)
            }
        }
        getLang()


    }, [de, en])

    return (
        <section className='max-container flex justify-between items-center gap-10 max-md:flex-col max-md:gap-0 padding-profile'>
            {(userEn && userDe) &&
                < div
                    className='flex-1 flex flex-col gap-5 mt-[90px] z-10' >
                    <h1 className='text-coral-red text-2xl '>{!lang ? userEn.filter((data) => data.id === "user")[0].user.title : userDe.filter((data) => data.id === "user")[0].user.title}</h1>
                    <p className='font-montserrat'>{!lang ? userEn.filter((data) => data.id === "user")[0].user.desc : userDe.filter((data) => data.id === "user")[0].user.desc}</p>
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
            <div className='flex-1 w-full h-[500px] flex justify-center bg-cover bg-center self-end'>
                <div className='glassy-circle'></div>
                <motion.div
                    className='absolute left-[20%] -top-[30%] w-[200px] h-[150px] border border-white-400 ring-white z-20 max-lg:w-[20%] max-lg:h-[30%] max-lg:hidden'
                    animate={{ x: 1024, rotate: -50, y: 450 }}

                    initial={{ opacity: 0.5, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 0.5 }}
                    transition={{ duration: 3 }}
                ></motion.div>
                <Image src={javad} width={500} height={500} alt='' className='object-cover z-20' />
            </div>
        </section >
    )
}

export default Profile