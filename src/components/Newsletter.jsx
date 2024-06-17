import React from 'react'
import Button from './Button'


const Newsletter = () => {
    return (
        <div className='w-full bg-[#000300] text-white py-10 px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Want tips & tricks to optimize your analytics?
                    </h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input type="email" placeholder='Email' className='p-3 flex w-full rounded-md text-black' />
                        <Button title="Get Started" styles="bg-[#00df9a] text-black w-[140px] rounded-md ml-4 font-medium my-6
                        mx-auto py-3" />
                    </div>
                    <p className='text-medium text-l'>We care about the protection of your data. Read our <span className='text-[#00df9a] underline'>Privacy Policy</span></p>

                </div>
            </div>

        </div>
    )
}

export default Newsletter