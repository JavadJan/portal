import { navLinks } from '@/constant'
import React, { useContext, useEffect, useState } from 'react'
import { FlagIcon } from 'react-flag-kit'
import { motion } from "framer-motion";
import { UserContext } from '@context/Provider';

const NavMenu = ({ lang, handleLang, menuDe, menuEn, dropDown }) => {

  const variants = {
    open: {
      clipPath: "circle(2530px at 10px 10px)",
      transition: {
        type: "spring",
        stiffness: 2000,
        damping: 2000,
        duration: 1
      }
    },
    closed: {
      transition: {
        delay: 0.7,
        opacity: 0,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }

  return (
    <motion.div
      className='w-1/3 justify-center py-14 absolute p-10 z-20 shadow-2xl bg-opacity-40 top-16 right-0 items-start max-lg:flex hidden max-md:full_menu max-md:bg-[#1A120B]'
      // initial={{ opacity: 0.5, scale: 0.7, clipPath: "circle(530px at 10px 10px)" }}
      variants={variants}
      animate={dropDown ? "open" : "closed"}
    >

      {<motion.ul
        className={`text-[16px] font-montserrat relative max-md:text-white w-full h-full space-y-4 flex max-md:justify-center max-sm:justify-start flex-col right-1`}

      >
        {(!lang && menuEn && menuDe) ?
          menuEn.filter((mn) => mn.id === 'menu')[0].menu.map((item, i) => {
            return (<motion.li
              key={item.lable}
              className='hover:bg-[#0478e4] max-lg:w-full max-sm:w-[45%] px-5 py-2 rounded-lg'
              initial={{ scale: 1 }}
              whileHover={{ x: -10, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href={item.href}
                className=''>{item.lable}

              </a>
            </motion.li>)
          })
          :
          menuDe.filter((mn) => mn.id === 'menu')[0].menu.map((item) => {
            return (<motion.li
              key={item.lable}
              className='hover:bg-[#0478e4] whitespace-nowrap max-lg:w-full max-sm:w-[55%] px-5 py-2 rounded-lg'
              initial={{ scale: 1 }}
              whileHover={{ x: -10, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <a href={item.href}>{item.lable}</a>
            </motion.li>)
          })}
        <div className="cursor-pointer space-y-2" onClick={handleLang}>

          {!lang ? <motion.span
            className="flex justify-start gap-3 h-content text-[14px] font-montserrat hover:bg-[#0478e4] max-sm:w-[45%] px-5 py-2 rounded-lg"
            initial={{ scale: 1 }}
            whileHover={{ x: -10, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          > <FlagIcon code="DE" height={15} width={30} />DE
          </motion.span> :
            <motion.span
              className="flex justify-start gap-3 h-content text-[14px] font-montserrat hover:bg-[#0478e4] w-[45%] px-5 py-2 rounded-lg"
              initial={{ scale: 1 }}
              whileHover={{ x: -10, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            > <FlagIcon code="US" height={15} width={30} /> EN</motion.span>}
        </div>
      </motion.ul>}
    </motion.div>
  )
}

export default NavMenu