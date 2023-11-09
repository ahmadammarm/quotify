import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link 
      href={'/'}
      className='
      hover:text-teal-500
      transition
      duration-300
      ease-in-out
        font-bold 
        text-2xl 
      '>
        Quotify
      </Link>
    </div>
  )
}

export default Logo