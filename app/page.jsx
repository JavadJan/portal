"use client"
import Nav from "@components/Nav"
import { UserContext } from "@context/Provider"
// import Nav from "@components/Nav"
import AboutMe from "@sections/AboutMe"
import ContactMe from "@sections/ContactMe"
import Footer from "@sections/Footer"
import Profile from "@sections/Profile"
import Projects from "@sections/Projects"
import Skills from "@sections/Skills"
import { useContext, useEffect, useState } from "react"

const Home = () => {
    const [active, setActive] = useState(false)
    const { de, en } = useContext(UserContext)

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
                    <div className="flex justify-center items-center w-full h-[100vh">
                        Loading...
                    </div>
                    :
                    <>
                        <section className={`px-28 snap-start max-lg:px-[3%] w-[100%] bg-[#2B1F31] z-50 sticky top-0 ${active ? 'scroll_active lg:bg-white-400' : 'text-white-400'}`}>
                            <Nav />
                        </section>
                        <section id="home" className="snap-start w-full bg-[#2B1F31] relative top-0 text-white-400">
                            <Profile />
                        </section>
                        <section id="skills" className='snap-start section padding bg-[#1A120B] h-[50vh]'>
                            <Skills />
                        </section>
                        <section id="project" className='snap-center section bg-pale-blue padding'>
                            <Projects />
                        </section>
                        <section id="contact-me" className="snap-center section padding">
                            <ContactMe />
                        </section>
                        <section id="about-me" className="snap-center section padding">
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