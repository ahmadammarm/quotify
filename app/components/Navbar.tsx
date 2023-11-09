import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Link from 'next/link'
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
        <div className='flex'>
          <Link 
          href={'/about'}
          className='
            mr-5
            hover:text-teal-500
            transition
            duration-300
            ease-in-out
            cursor-pointer
          '
          >About</Link>
          <Link
          href={'/product'}
          className='
            mr-5
            hover:text-teal-500
            transition
            duration-300
            ease-in-out
            cursor-pointer
          '
          >Product</Link>
          <Link
          href={'/contact'}
          className='
            mr-5
            hover:text-teal-500
            transition
            duration-300
            ease-in-out
            cursor-pointer
          '
          >Contact</Link>
        </div>
        <div className="flex gap-4 items-center">
          <ThemeSwitcher />
        </div>
      </nav>
  )
}

export default Navbar