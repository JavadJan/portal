"use client"
import Nav from "@components/Nav"
import { UserContext } from "@context/Provider"
import AboutMe from "@sections/AboutMe"
import ContactMe from "@sections/ContactMe"
import Footer from "@sections/Footer"
import Profile from "@sections/Profile"
import Projects from "@sections/Projects"
import Skills from "@sections/Skills"
import { useScroll, useTransform, motion } from "framer-motion"
import { useContext, useEffect, useRef, useState } from "react"

const Home = () => {
    const { de, en } = useContext(UserContext)
    const [active, setActive] = useState(false)

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)

    }
    useEffect(() => {
        window.addEventListener('scroll', isActive)
        return () => {
            window.removeEventListener('scroll', isActive)
        };
    }, []);
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })


    const yBg = useTransform(scrollYProgress, [0, 1], ["-100%", "400%"])
    const xBg = useTransform(scrollYProgress, [0, 1], ["20%", "-250%"])
    const startBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const startContact = useTransform(scrollYProgress, [0, 1], ["-400%", "500%"])
    const rocket = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"])
    return (

        <main className="relative">
            {
                !de && !en ?
                    <div className="flex justify-center items-center h-[100vh] text-lg text-center">
                        Loading...
                    </div>
                    :
                    <>
                        {/* bg-[#160F30] */}
                        {/* bg-[#001524] */}
                        <section className={`px-28 max-lg:px-[3%] w-[100%] z-50 sticky top-0 ${active ? 'scroll_active bg-white lg:bg-white text-black' : 'text-white bg-planet'}`}>
                            <Nav />
                        </section>
                        <section ref={ref} id="home" className="bg-planet relative top-0 text-white-400 overflow-hidden">
                            <motion.img style={{ y: yBg, x: xBg }}
                                className="absolute bottom-20 right-[5%] w-[15%] h-[15%] object-contain"
                                src="https://firebasestorage.googleapis.com/v0/b/myprojects-b250e.appspot.com/o/Turtle.png?alt=media&token=1abedd86-9a40-4dd7-990e-f0f4310e4d36" alt="" />
                            <motion.div className="bg-stars absolute h-full w-full" style={{ y: startBg }}></motion.div>
                            <Profile />
                        </section>

                        <section id="project" className='h-auto bg-[#F6F6F6] sm:px-16 px-3 sm:py-24 py-6 relative'>
                            <Projects />
                        </section>
                        <section id="contact-me" className="max-sm:px-0 px-[3%] bg-planet h-[content] py-28 relative">
                            <motion.div className="bg-stars absolute w-[90%] h-full overflow-hidden" style={{ y: startContact }}></motion.div>
                            <ContactMe />
                            <motion.img
                                animate={{ y: -10 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 0.4,
                                }}
                                // style={{ y: rocket }}
                                src="https://firebasestorage.googleapis.com/v0/b/myprojects-b250e.appspot.com/o/astro2.png?alt=media&token=9e3f06a2-0f8e-40bb-9901-3474d5748536" alt="" className="absolute object-cover top-[50%] left-[5%] w-[200px] brightness-50" />
                        </section>

                        <section id="about-me" className="bg-planet relative">

                            <div className="w-full h-full bg-[#235952a4] section padding text-white">

                                <AboutMe />
                                <img src="https://firebasestorage.googleapis.com/v0/b/myprojects-b250e.appspot.com/o/astro.png?alt=media&token=120ee86e-2168-485f-b6f2-a4b996ef7f93" alt=""
                                    className="absolute max-md:bottom-[-10px] bottom-[-15px] max-sm:right-0 right-14 max-md:w-[170px] w-[270px]"
                                />
                            </div>
                        </section>
                        <section id="skills" className='section padding bg-[#F3FDE8] h-[65vh] max-sm:h-[45vh] overflow-hidden'>
                            <Skills />
                        </section>

                        <section id="footer" className='section padding bg-black padding-t padding-x pb-8'>
                            <Footer />
                        </section>
                    </>
            }
        </main>

    )
}

export default Home