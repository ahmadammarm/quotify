import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import React from 'react'

const Navbar = () => {
  return (
      <nav className="
      flex 
      justify-between 
      items-center 
      border-b
    border-gray-500
    dark:border-gray-400 
      px-4
      py-2
      ">
        <Logo />
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
        </div>
      </nav>
  )
}

export default Navbar