import React, { useCallback, useEffect, useState } from 'react'
import NavbarItem from './NavbarItem'
import {BsChevronDown,BsSearch,BsBell} from 'react-icons/bs';
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

const Navbar = () => {
    const [showMobileMenu,setShowMobileMenu] = useState(false);
    const [showAccountMenu,setShowAccountMenu] = useState(false);
    const [showBackground,setShowBackground] = useState(false);

    const toggleMenu = useCallback(()=>{
        setShowMobileMenu((current)=>!current);
    },[])

    const toggleAccountMenu = useCallback(()=>{
        setShowAccountMenu((current)=>!current);
    },[])

    const TOP_Offset = 66;

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY >= TOP_Offset){
                setShowBackground(true);
            }else{
                setShowBackground(false);
            }
            
        }
        window.addEventListener("scroll", handleScroll);

            return ()=>{
                window.removeEventListener("scroll", handleScroll);
            }
    },[])
  return (
    <nav className='w-full fixed z-40'>
        <div className={`
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}
        `}>
            <img src="/images/logo.png" className='h-4 md:h-7' alt="" />
            <div className='
                lg:flex
                flex-row
                ml-8
                gap-7
                hidden
            '>
                <NavbarItem label='Home'/>
                <NavbarItem label='Series'/>
                <NavbarItem label='Films'/>
                <NavbarItem label='New & Popular'/>
                <NavbarItem label='My List'/>
                <NavbarItem label='Browse by languages'/>
            </div>
            <div onClick={toggleMenu} className='lg:hidden flex flex-row cursor-pointer items-center ml-8 gap-3 relative'>
                <p className='text-white text-sm'>Browse</p>
                <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                <MobileMenu visible={showMobileMenu}/>
            </div>
            <div className='flex flex-row transition items-center ml-auto gap-7'>
                <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition '>
                    <BsSearch/>
                </div>
                <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition '>
                    <BsBell/>
                </div>
                <div className='flex flex-row gap-2 relative cursor-pointer items-center' onClick={()=>toggleAccountMenu()}>
                    <div className='w-6 h-6 lg:w-10 lg:h-10 cursor-pointer transition overflow-hidden rounded-md'>
                        <img src="/images/default-blue.png" alt="" />
                    </div>
                    <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}/>
                    <AccountMenu visible={showAccountMenu}/>
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar