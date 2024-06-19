import React from 'react'
import {
    FaDribbbleSquare, FaFacebookSquare, FaInstagram,
    FaTwitterSquare, FaGithub
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-full mx-auto bg-[#000300]'
        >
            <div className="max-w-[1240px]  mx-auto py-16 px-4 grid 
            lg:grid-cols-3 gap-8  text-gray-300">
                <div>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                        NexData.
                    </h1>
                    <p className='py-4'>
                        Next-Level Insights for Business Growth
                    </p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare className='cursor-pointer hover:scale-105' size={25} />
                        <FaInstagram className='cursor-pointer hover:scale-105' size={25} />
                        <FaTwitterSquare className='cursor-pointer hover:scale-105' size={25} />
                        <FaGithub className='cursor-pointer hover:scale-105' size={25} />
                        <FaDribbbleSquare className='cursor-pointer hover:scale-105' size={25} />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between'>
                    <div>
                        <h6 className='font-medium text-gray-400'>Solutions</h6>
                        <ul>
                            <li className="py-2 cursor-pointer text-sm">Analytics</li>
                            <li className="py-2 cursor-pointer text-sm">Marketing</li>
                            <li className="py-2 cursor-pointer text-sm">Commerce</li>
                            <li className="py-2 cursor-pointer text-sm">Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Support</h6>
                        <ul>
                            <li className="py-2 cursor-pointer text-sm">Pricing</li>
                            <li className="py-2 cursor-pointer text-sm">Documentation</li>
                            <li className="py-2 cursor-pointer text-sm">API</li>
                            <li className="py-2 cursor-pointer text-sm">FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Company</h6>
                        <ul>
                            <li className="py-2 cursor-pointer text-sm">About</li>
                            <li className="py-2 cursor-pointer text-sm">Blog</li>
                            <li className="py-2 cursor-pointer text-sm">Careers</li>
                            <li className="py-2 cursor-pointer text-sm">Press</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Legal</h6>
                        <ul>
                            <li className="py-2 cursor-pointer text-sm">Claim</li>
                            <li className="py-2 cursor-pointer text-sm">Policy</li>
                            <li className="py-2 cursor-pointer text-sm">Terms</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer