import React from 'react'
import laptop from '../assets/laptop.jpg'
import Button from './Button'



const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={laptop} alt="laptop" className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center '>
                    <p className='uppercase text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className=''>
                        Our comprehensive dashboard provides real-time insights and advanced
                        analytics to help you make informed decisions.
                        Customize your data views, track key performance indicators,
                        and integrate seamlessly with other tools for enhanced data management.
                    </p>
                    <Button title="Get Started" styles="bg-black text-[#00df9a] w-[120px] rounded-md font-medium my-6
                     mx-auto py-2" />
                </div>
            </div>
        </div>

    )
}

export default Analytics