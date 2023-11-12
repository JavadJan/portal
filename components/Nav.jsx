"use client"
// import { navLinks } from "@/constant"
import { close, code, hamburger, instagram, menu, times } from "@/public/assets/icons"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { FlagIcon, } from "react-flag-kit"
import NavMenu from "./NavMenu"
import { motion } from "framer-motion"
import { UserContext } from "@context/Provider";

const Nav = () => {
    const { de, en, lang, setLang } = useContext(UserContext)

    const [menuEn, setMenuEn] = useState(null)
    const [menuDe, setMenuDe] = useState(null)

    const [dropDown, setDropDown] = useState(false)
    const handleLang = () => {
        setLang(!lang)
    }

    const variants = {
        visible: {
            opacity: 1,
            x: 100,
            transition: { staggerChildren: 0.5 },
        },
        hidden: { opacity: 0 }

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
        <nav className={`h-16 max-container flex justify-between items-center`}>
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
                            <a href={item.href} className="hover:text-[#C07F00]">{item.lable}</a>
                        </li>)
                    })
                    :
                    menuDe.filter((mn) => mn.id === 'menu')[0].menu.map((item) => {
                        return (<li key={item.lable}>
                            <a href={item.href} className="hover:text-[#F2BE22]">{item.lable}</a>
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
                <Image
                    src={menu}
                    width={40}
                    height={40}
                    alt="hamburger list"
                    className={`text-white-400 ${!dropDown
                        ? 'transition duration-300 ease-in-out opacity-100'
                        : 'transition duration-300 ease-in-out opacity-0'
                        } ${dropDown ? 'hidden' : 'inline-block'}`}
                />

                <Image
                    src={close}
                    width={40}
                    height={40}
                    alt="times"
                    className={`${dropDown
                        ? 'transition duration-300 ease-in-out opacity-100'
                        : 'transition duration-300 ease-in-out opacity-0'
                        } ${dropDown ? 'inline-block' : 'hidden'}`}
                />
            </div>

        </nav>
    )
}

export default Nav