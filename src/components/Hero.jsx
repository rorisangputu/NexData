import React from 'react'
import { ReactTyped } from 'react-typed'
import Button from './Button'



const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center
                flex flex-col justify-center'
            >
                <p className='text-[#00df9a] font uppercase font-bold'>
                    Growing with Data Analytics
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold font-sans md:py-6'>Grow with data</h1>

                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl 
                        text-xl font-bold py-4'
                    >
                        Fast, flexible solutions for
                    </p>
                    <ReactTyped
                        className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-600 md:pl-4 pl-2'
                        strings={['BTB', 'SaaS', 'BTC']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>

                <p className='md:text-2xl text-xl font-bold text-gray-600 '>
                    Monitor your data analytics to increase revenue for BTB, BTC, & SaaS platforms.
                </p>
                <Button
                    title="Get started"
                    styles="bg-[#00df9a] text-black w-[120px] rounded-md font-medium my-6
                     mx-auto py-2"
                />

            </div>
        </div>
    )
}

export default Hero