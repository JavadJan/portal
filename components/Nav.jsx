"use client"
// import { navLinks } from "@/constant"
import { close, code, hamburger, instagram, logo2, menu, times } from "@/public/assets/icons"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { FlagIcon, } from "react-flag-kit"
import NavMenu from "./NavMenu"
import { motion } from "framer-motion"
import { UserContext } from "@context/Provider";

const Nav = () => {
    const { de, en, lang, setLang, dropDown, setDropDown } = useContext(UserContext)

    const [menuEn, setMenuEn] = useState(null)
    const [menuDe, setMenuDe] = useState(null)


    const handleLang = () => {
        setLang(!lang)
    }

    const variants = {
        open: {
            opacity: 1,
            transition: { staggerChildren: 0.5, duration: 1 },
        },
        closed: { opacity: 0 }

    }

    useEffect(() => {
        const getMenu = async () => {
            try {
                const resEn = await en
                const resDe = await de

                setMenuDe(resDe)
                setMenuEn(resEn)

            } catch (error) {
                console.log(error)
            }
        }
        getMenu()

    }, [de, en])



    return (
        <motion.nav
            initial={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
            className={`h-16 max-container flex justify-between items-center max-md:flex-row-reverse`}>
            <Image src={code} width={30} height={30} alt="logo" />
            {menuDe && menuEn && <motion.ul
                className="gap-10 justify-center items-center font-montserrat max-lg:hidden flex"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                {!lang ?
                    menuEn.filter((mn) => mn.id === 'menu')[0].menu.map((item) => {
                        return (<li key={item.lable}>
                            <a href={item.href} className="hover:text-[#0003c0]">{item.lable}</a>
                        </li>)
                    })
                    :
                    menuDe.filter((mn) => mn.id === 'menu')[0].menu.map((item) => {
                        return (<li key={item.lable}>
                            <a href={item.href} className="hover:text-[#0003c0] w-full">{item.lable}</a>
                        </li>)
                    })}
                <div className="cursor-pointer space-y-2" onClick={handleLang}>
                    {!lang ? <span className="flex justify-between h-content w-[70px] text-[14px] font-montserrat" onClick={handleLang}>DE <FlagIcon code="DE" height={15} width={30} />
                    </span> :
                        <span className="flex justify-between h-content w-[70px] text-[14px] font-montserrat">EN <FlagIcon code="US" height={15} width={30} /></span>}
                </div>
            </motion.ul>}
            {dropDown && <NavMenu menuDe={menuDe} menuEn={menuEn} lang={lang} handleLang={handleLang} dropDown={dropDown} />}
            <div className={`max-lg:block hidden cursor-pointer z-30 ${dropDown && "hover:bg-[#0478e4] p-2 rounded-lg"}`} onClick={() => setDropDown(!dropDown)}>
                <svg width="23" height="23" viewBox="0 0 23 23" className="text-white">
                    <motion.path
                        strokeWidth="3"
                        stroke="white"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" },
                        }}
                        animate={dropDown ? "open" : "closed"}
                    />
                    <motion.path
                        strokeWidth="3"
                        stroke="white"
                        strokeLinecap="round"
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        animate={dropDown ? "open" : "closed"}

                    />
                    <motion.path
                        strokeWidth="3"
                        stroke="white"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" },
                        }}
                        animate={dropDown ? "open" : "closed"}

                    />
                </svg>

            </div>

        </motion.nav>
    )
}

export default Nav