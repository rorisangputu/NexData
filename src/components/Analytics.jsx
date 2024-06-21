import React from 'react'
import laptop from '../assets/laptop.jpg'
import chart from '../assets/chart.jpg'
import Button from './Button'



const Analytics = () => {
    return (
        <div className='w-full grid grid-rows-2 bg-white 
            h-screen  sm:my-9 px-5  '>
            <div className='max-w-[1240px]mx-auto grid md:grid-cols-2'>
                <img
                    src={laptop}
                    alt="laptop"
                    className='w-[20vh] sm:w-[25vh] md:w-[50vh] mx-auto my-4'
                />
                <div className='flex flex-col justify-center  '>
                    <p className='uppercase text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className=''>
                        Our comprehensive dashboard provides real-time insights and advanced
                        analytics to help you make informed decisions.
                        Customize your data views, track key performance indicators,
                        and integrate seamlessly with other tools for enhanced data management.
                    </p>
                </div>
            </div>
            <div className='max-w-[1240px]  mx-auto grid md:grid-cols-2'>

                <div className=' order-2 md:order-none flex flex-col justify-center px-2 '>
                    <p className='uppercase text-[#00df9a] font-bold'>In depth reporting</p>
                    <h1 className='md:text-4xl sm:text-3xl lg:w-[540px] text-2xl font-bold py-2'>Formulate In Depth Information Analysis</h1>
                    <p className=''>
                        Formulate comprehensive insights,
                        monitor essential performance indicators, and make informed decisions. Tailor your data views and integrate effortlessly
                        with other tools to optimize your data management processes.
                    </p>
                </div>

                <img
                    src={chart}
                    alt="laptop"
                    className='w-[20vh] 
                    sm:w-[25vh] md:w-[50vh] mx-auto my-4'
                />
            </div>
            <div className='h-15 mt-6 lg:mt-0 mx-auto justify-center items-center flex'>
                <Button title="Subscribe" styles="bg-black text-[#00df9a] w-[120px] rounded-md font-semibold 
                     mx-auto py-2" />
            </div>
        </div>

    )
}

export default Analytics