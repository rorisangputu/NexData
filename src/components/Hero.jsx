import React from 'react'
import { ReactTyped } from 'react-typed'
import Button from './Button'
import board from '../assets/board.jpg'



const Hero = () => {
    return (
        <div className='text-black w-full flex justify-center h-[85vh]'>
            <div className='container text-center md:my-[20rem] xl:my-0
               flex flex-col items-center mx-auto justify-center xl:flex-row'
            >
                <div className='md:text-start mx-auto flex flex-col'>
                    <p className='md:w-[200px] capitalize text-3xl md:text-7xl font-bold'>
                        Data Analytics.
                    </p>
                    <h1 className='text-[#00df9a] md:text-8xl sm:text-7xl text-7xl font-bold font-sans py-3 md:py-1'>Simplified.</h1>

                    <div className='flex justify-center w-full md:justify-start items-center'>
                        <p className='md:text-5xl sm:text-4xl 
                        text-2xl font-bold '
                        >
                            Fast, flexible solutions for
                        </p>
                        <ReactTyped
                            className='md:text-5xl sm:text-4xl text-2xl font-bold text-gray-600 md:pl-4 pl-2'
                            strings={['BTB', 'SaaS', 'BTC']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        />
                    </div>

                    <p className='md:text-xl  text-xl font-bold text-gray-600 '>
                        Monitor your data analytics to increase revenue for BTB, BTC, & SaaS platforms.
                    </p>
                    <Button
                        title="Get started"
                        styles="bg-[#00df9a] text-black w-[120px] rounded-md font-medium my-6
                        mx-auto md:mx-0 py-2"
                    />
                </div>
                <div>
                    <img className='w-[300px]  md:w-[300px] lg:w-[450px] mx-auto sm:-mt-20 sm:ml-40 lg:-mt-10 lg:-mr-52 xl:mt-0 xl:ml-0 xl:mr-0' src={board} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero