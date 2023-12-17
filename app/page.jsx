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

        <main className="relative ">
            {
                !de && !en ?
                    <div className="flex justify-center items-center h-[100vh">
                        Loading...
                    </div>
                    :
                    <>
                        {/* bg-[#160F30] */}
                        <section className={`snap-start px-28 max-lg:px-[3%] w-[100%]  z-50 sticky top-0 bg-[#001524] ${active ? 'scroll_active lg:bg-white text-black ' : 'text-white'}`}>
                            <Nav />
                        </section>
                        <section id="home" className="snap-start bg-[#001524] relative top-0 text-white-400 overflow-hidden">
                            <Profile />
                        </section>
                        <section id="skills" className='snap-start section padding bg-[#F3FDE8] h-[55vh] max-sm:h-[45vh] overflow-hidden'>
                            <Skills />
                        </section>
                        <section id="project" className='snap-start h-auto bg-[#F6F6F6] sm:px-16 px-3 sm:py-24 py-6'>
                            <Projects />
                        </section>
                        <section id="contact-me" className="snap-start max-sm:px-0 px-[3%] bg-planet h-[content] py-28">
                            <ContactMe />
                        </section>
                        <section id="about-me" className="snap-start section padding">
                            <AboutMe />
                        </section>

                        <section id="footer" className='snap-start section padding bg-black padding-t padding-x pb-8'>
                            <Footer />
                        </section>
                    </>
            }
        </main>

    )
}

export default Home