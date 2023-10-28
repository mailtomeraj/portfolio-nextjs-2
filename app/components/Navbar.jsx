'use client'


import Image from 'next/image'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll/modules'
import {FiSend}  from "react-icons/fi";
import {TbDownload}  from "react-icons/tb";
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { space } from 'postcss/lib/list';

const navLinks = [
    { link: "Bio", path: "bio",},
    { link: "Experience", path: "experience" },  
    { link: "Contact", path: "experience" },
    { link: "About", path: "experience" },
  ]
 
 const Navbar = () => {

 const [isMenuOpen, setIsMenuOpen] =  useState(false)
 const [isSticky, setIsSticky] = useState(false)

 const toggleMenu = () =>{
     setIsMenuOpen(!isMenuOpen)
 }

 useEffect(()=>{
    const handleScroll = () =>
    {
      setIsSticky( window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
 })

   return (
     <header className='w-full bg-white sticky left-0 right-0 top-0 border-b border-c-light-grey  z-10 '>
        <nav className={`px-4 lg:px-8 flex justify-between  items-center flex-row w-full h-20 ${isSticky? 'bg-white shadow-lg duration-300' :''}`}>
<div className='flex'>
        <Image className="" src="/images/logo-2.png" alt="Bordered avatar" width={66} height={45} /></div>
        <div className='hidden md:block'>
        <div className='flex justify-center items-center gap-4 '>
        <ul className=' flex gap-10 text-lg font-normal text-c-dark '>
                {
                navLinks.map((link) => {
                  return     <li className='gap-4'> <Link activeClass="active" to={link.path} spy={true} smooth={true} offset={0} duration={500}>
                  {link.link}
         </Link></li>
              })
              }
            
        </ul>
        <div className='flex pl-5 gap-4 '> <button className=' flex items-center justify-center bg-white text-c-dark-green rounded-full h-[42px] px-5 text-lg font-bold border border-c-dark-green'>
       
       <span className='mr-3 text-2xl'>
    
    <TbDownload/>
    
       </span>
       <span>Resume</span></button></div>

       <div className='flex'> <button className=' flex items-center justify-center bg-c-dark-green text-white rounded-full h-[42px] px-5 text-lg font-bold'>
       
       <span className='mr-3 font-bold text-lg'><FiSend/></span>
       <span>Say hi</span></button></div>
       </div>
</div>   
    {/* menu btn only for mobile device */}

    <div onClick={toggleMenu} className='md:hidden'>
{
  isMenuOpen ? (
    <AiOutlineClose size={30} className=" text-2xl cursor-pointer ease-in duration-500" />
             
            ) : (
              <AiOutlineMenu size={30} className=" text-2xl cursor-pointer ease-in duration-500" />
            )
}
</div>

  {/* Mobile version  listed menu */}
  {/* <div
          className={toggleMenu ? "left-0 top-0 w-[65%] h-screen relative bg-slate-800 ease-in duration-500 flex flex-col justify-start  z-10" : " left-[-100%]"}
        > */}

        <div className={isMenuOpen ? "left-0 top-20 w-[100%] h-screen fixed text-c-dark bg-white transition-all  ease-in duration-500 flex-col justify-start  z-50 " : " md: hidden "}>
      
        <ul className='flex flex-col text-lg font-normal text-c-dark '>
                {
                navLinks.map((link) => {
                  return     <li className='gap-4'> <Link activeClass="active" to={link.path} spy={true} smooth={true} offset={0} duration={500}>
                  {link.link}
         </Link></li>
              })
              }
            
        </ul>
        <div className='flex'>
        <div className='flex pl-5 gap-4 '> <button className=' flex items-center justify-center bg-white text-c-dark-green rounded-full h-[42px] px-5 text-lg font-bold border border-c-dark-green'>
       
       <span className='mr-3 text-2xl'>
    
    <TbDownload/>
    
       </span>
       <span>Resume</span></button></div>

       <div className='flex'> <button className=' flex items-center justify-center bg-c-dark-green text-white rounded-full h-[42px] px-5 text-lg font-bold'>
       
       <span className='mr-3 font-bold text-lg'><FiSend/></span>
       <span>Say hi</span></button></div>
       </div>
        </div>
        </nav>
     </header>
 )}
 
 export default Navbar