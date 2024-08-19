import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'
import { navItems } from '../constants';
import logo from '../assets/logo.png'

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <nav className='sticky top-0 z-50 py-4 backdrop-blur-lg'>
            <div className='container px-4 mx-auto relative text-sm'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center flex-shrink-0'>
                        <img className='w-15 h-15 mr-2' src={logo} alt="logo" />
                    </div>
                    <div className='hidden lg:flex justify-center items-center space-x-12'>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    className='hover:text-blue-900 text-neutral-800 transition ease-in-out duration-700' href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                        <a href="#" className='py-3 px-5 rounded-md text-blue-900 font-medium tracking-tight border-solid border-2 hover:bg-blue-800 hover:text-white border-blue-800 transition duration-200'>
                            Get Started
                        </a>
                    </div>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>
                            {mobileOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileOpen && (
                    <div className='fixed right-0 bg-blue-700 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-3'>
                                    <a className='hover:text-neutral-900 text-neutral-800 transition ease-in-out duration-700' href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-6 py-3'>
                            <a href="#" className='py-3 px-5 rounded-md text-blue-900 font-medium tracking-tight border-solid border-2 hover:bg-blue-800 hover:text-white border-blue-800 transition duration-200'>
                                Get Started
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
