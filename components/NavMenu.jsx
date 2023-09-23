import { navLinks } from '@/constant'
import React from 'react'

const NavMenu = () => {
  return (
    <div className='w-1/3 justify-center py-14 absolute z-40 shadow-2xl bg-opacity-40 top-16 items-start left-0 max-lg:flex hidden max-md:full_menu max-md:bg-slate-400'>
      <ul className='text-black relative space-y-3 text-[16px] font-montserrat'>
        {navLinks.map((item) => {
          return <li className='list-none'><a href={item.href}>{item.label}</a></li>
        })}
      </ul>
    </div>
  )
}

export default NavMenu