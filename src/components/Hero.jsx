import React from 'react'
import { ReactTyped } from 'react-typed'
import Button from './Button'
import board from '../assets/board.jpg'



const Hero = () => {
    return (
        <div className='text-black '>
            <img className='w-[300px] -mr-[25px] md:mr-[-10px] lg:mr-[10px] xl:mr-[100px] md:w-[400px] lg:w-[450px] mx-auto mt-5 lg:mt-3' src={board} alt="" />
            <div className='max-w-[1540px] -mt-[200px] md:mt-[-350px] lg:mt-[-380px] md:items-start md:m-2 w-full h-[80vh] md:h-[90vh] mx-auto text-center
                flex flex-col justify-center'
            >
                <div className=' max-w-[1240px] md:text-start mx-auto flex flex-col md:items-start'>
                    <p className='md:w-[200px] capitalize text-3xl md:text-7xl font-bold'>
                        Data Analytics.
                    </p>
                    <h1 className='text-[#00df9a] md:text-8xl sm:text-7xl text-7xl font-bold font-sans py-3 md:py-1'>Simplified.</h1>

                    <div className='flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl 
                        text-2xl font-bold pt-0 pb-2'
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

                    <p className='md:text-2xl text-xl font-bold text-gray-600 '>
                        Monitor your data analytics to increase revenue for BTB, BTC, & SaaS platforms.
                    </p>
                    <Button
                        title="Get started"
                        styles="bg-[#00df9a] text-black w-[120px] rounded-md font-medium my-6
                        mx-auto md:mx-0 py-2"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero