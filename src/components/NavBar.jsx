import { React, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
            {/* MAIN NAVBAR */}
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                NexData.
            </h1>
            <ul className='hidden md:flex cursor-pointer'> {/* mobile first, above medium nav appears */}
                <li className='p-4 hover:scale-105 duration-50 hover:text-[#00df9a]'>Home</li>
                <li className='p-4 hover:scale-105 duration-50 hover:text-[#00df9a]'><a href='#Analytics'>About</a></li>
                <li className='p-4 hover:scale-105 duration-50 hover:text-[#00df9a]'><a href='#Sub'>Subscription</a></li>
                <li className='p-4 hover:scale-105 duration-50 hover:text-[#00df9a]'><a href='#WhyUs'>Us</a></li>
                <li className='p-4 hover:scale-105 duration-50 hover:text-[#00df9a]'>Resources</li>
            </ul>

            {/* MENU BUTTON */}
            <div onClick={handleNav} className='block md:hidden mr-5'>
                {nav ? <AiOutlineClose className='text-black' size={20} /> : <AiOutlineMenu className='text-black' size={20} />}

            </div>

            {/* HAMBURGER MENU */}
            <div className={nav ? `fixed left-0 top-0 w-[60%] h-full border-r 
                 border-r-gray-900 bg-white ease-in-out duration-500 `
                : `fixed left-[-100%]`}
            >
                <h1 className='w-full text-3xl font-bold m-4 pt-5 text-[#00df9a]'>
                    NexData.
                </h1>
                <ul className='cursor-pointer uppercase '>
                    <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white border-b border-b-gray-600'>Home</li>
                    <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white border-b border-b-gray-600'>Company</li>
                    <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white border-b border-b-gray-600'>Resources</li>
                    <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white border-b border-b-gray-600'>About</li>
                    <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white '>Resources</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar