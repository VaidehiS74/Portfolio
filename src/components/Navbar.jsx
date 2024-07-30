import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='overflow-x-hidden mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <div className='text-white text-5xl mx-2 w-10'>Vs</div>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
            <a href='https://www.linkedin.com/in/vaidehi-singh2004' target="_blank"><FaLinkedin /></a>
            <a href='https://github.com/VaidehiS74' target="_blank"><FaGithub /></a>
            <a href='https://x.com/Vaidehi61212147' target="_blank"><FaSquareXTwitter /></a>
            <a href='https://www.instagram.com/vaidehiiii____singh/' target="_blank"><FaInstagram /></a>
        
        </div>
    </nav>
  )
}

export default Navbar