import { React, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            {/* MAIN NAVBAR */}
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                DATALAND.
            </h1>
            <ul className='hidden md:flex'> {/* mobile first, above medium nav appears */}
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Resources</li>
            </ul>

            {/* MENU BUTTON */}
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

            </div>

            {/* HAMBURGER MENU */}
            <div className={!nav ? `fixed left-0 top-0 w-[60%] h-full border-r 
                 border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden`
                : `fixed left-[-100%]`}
            >
                <h1 className='w-full text-3xl font-bold m-4 pt-5 text-[#00df9a]'>
                    DATALAND.
                </h1>
                <ul className='cursor-pointer uppercase '>
                    <li className='p-4 pl-4 hover:bg-[#000100] border-b border-b-gray-600'>Home</li>
                    <li className='p-4 pl-4 hover:bg-[#000100] border-b border-b-gray-600'>Company</li>
                    <li className='p-4 pl-4 hover:bg-[#000100] border-b border-b-gray-600'>Resources</li>
                    <li className='p-4 pl-4 hover:bg-[#000100] border-b border-b-gray-600'>About</li>
                    <li className='p-4 pl-4 hover:bg-[#000100] '>Resources</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar