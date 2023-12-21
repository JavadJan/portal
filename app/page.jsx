"use client"
import Nav from "@components/Nav"
import { UserContext } from "@context/Provider"
import AboutMe from "@sections/AboutMe"
import ContactMe from "@sections/ContactMe"
import Footer from "@sections/Footer"
import Profile from "@sections/Profile"
import Projects from "@sections/Projects"
import Skills from "@sections/Skills"
import { useContext, useEffect, useState } from "react"

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
                        <section className={`px-28 max-lg:px-[3%] w-[100%]  z-50 sticky top-0 bg-[#001524] ${active ? 'scroll_active lg:bg-white text-black' : 'text-white'}`}>
                            <Nav />
                        </section>
                        <section id="home" className="bg-[#001524] relative top-0 text-white-400 overflow-hidden">
                            <Profile />
                        </section>

                        <section id="project" className='h-auto bg-[#F6F6F6] sm:px-16 px-3 sm:py-24 py-6 relative'>
                            <Projects />
                        </section>
                        <section id="contact-me" className="max-sm:px-0 px-[3%] bg-planet h-[content] py-28">
                            <ContactMe />
                        </section>

                        <section id="about-me" className="bg-planet">
                            <div className="w-full h-full bg-[#235952a4] section padding text-white relative">
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