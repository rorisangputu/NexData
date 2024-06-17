import React from 'react'
import {
    FaDribbbleSquare, FaFacebookSquare, FaInstagramSquare,
    FaTwitterSquare, FaGithub
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid 
            lg:grid-cols-3 gap-8 text-gray-300'
        >
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                    DATALAND.
                </h1>
                <p>
                    The robust data analytics tool to help you make informed business decisions
                </p>
            </div>

        </div>
    )
}

export default Footer