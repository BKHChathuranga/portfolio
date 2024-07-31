import Link from 'next/link'
import React from 'react'
import Logo from '../../public/LOGO.png';
import Image from 'next/image';

const NavBar = () => {
  return (
    <div className='sticky top-0 z-50 '>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#whatIDo">Skills</Link></li>
              <li><Link href="#projects">My Work</Link></li>
              <li><Link href="#experience">Experience</Link></li>
              <li><Link href="#publications">Publications</Link></li>
            </ul>
          </div>
          <Image src={Logo} height={50} alt='logo'/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#whatIDo">Skills</Link></li>
            <li><Link href="#projects">My Work</Link></li>
            <li><Link href="#experience">Experience</Link></li>
            <li><Link href="#publications">Publications</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn transition ease-in-out delay-150 hover:scale-110 duration-300 bg-gradient-to-r from-[#1d262b] via-[#2a3338] to-[#41494e]" href='Hashan Chathuranga.pdf' target='blank' rel="noopener noreferrer">Resume</a>
        </div>
      </div></div>
  )
}

export default NavBar