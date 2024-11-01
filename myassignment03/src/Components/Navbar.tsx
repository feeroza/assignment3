
"use client";
import Link from 'next/dist/client/link';
import React from 'react'
import Image from 'next/image'; 
const Navbar = () => {
  return (


    <div>
      <nav className='bg-pink-950 text-white h-12  flex justify-between items-center px-2 py-3'>
        <div className='flex items-center space-x-2 mb-4 sm:mb-0'>
          <img
          src='/logo.jpg'
          alt='logo'
          className='w-10 h-10 rounded-full'
          />
            <h1 className='text-lg sm:text-xl md:text-2xl lg:t'>
        <a href ="#!">Fabulous</a>
            </h1>
        </div>

        <div>
          <ul className='flex space-x-5'>
            <li><Link href= "/" className='hover:-text-red-600'>Home </Link> </li>
            <li><Link href= "./About"className='hover:-text-red-600'>About us </Link></li>
            <li><Link href= "./Contect"className='hover:-text-red-600'>Contect us </Link> </li>
          </ul>
        </div>
        <div>
            <ul className='flex space-x-3'>
                <li><Link href="#!" className='hover:-text-red-600'>Login</Link></li>
                <li><Link href="#!" className='hover:-text-red-600'>Signup</Link></li>
            </ul>
        </div>
        
      </nav>
    </div>

  )
}

export default Navbar
