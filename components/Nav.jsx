"use client"
import { navLinks } from "@/constant"
import { hamburger, instagram, times } from "@/public/assets/icons"
import Image from "next/image"
import { useState } from "react"
import { FlagIcon, } from "react-flag-kit"
import NavMenu from "./NavMenu"

export const Nav = () => {
    const [lang, setLang] = useState(true)
    const [dropDown, setDropDown] = useState(false)
    const handleLang = () => {
        setLang(!lang)
    }

    return (
        <nav className="h-16 max-container flex justify-between items-center">
            <Image src={instagram} width={30} height={30} alt="logo" />
            <ul className="gap-10 justify-center items-center font-montserrat max-lg:hidden flex">
                {navLinks.map((item) => {
                    return <li>
                        <a href={item.href}>{item.label}</a>
                    </li>
                })}
                <div className="cursor-pointer space-y-2" onClick={handleLang}>
                    {!lang ? <span className="flex justify-between h-content w-[70px] text-[14px] font-montserrat">DE <FlagIcon code="DE" size={25} />
                    </span> :
                        <span className="flex justify-between h-content w-[70px] text-[14px] font-montserrat">EN <FlagIcon code="US" size={25} /></span>}
                </div>
            </ul>
            {dropDown === true && <NavMenu />}
            <div className="max-lg:block hidden cursor-pointer z-50" onClick={() => setDropDown(!dropDown)}>
                {!dropDown ? <Image src={hamburger} width={30} height={30} alt="hamburger list" /> :
                    <Image src={times} width={30} height={30} alt="hamburger list" />}
            </div>

        </nav>
    )
}
