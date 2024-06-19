import React from 'react'
import single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';
import Button from './Button';


const Cards = () => {
    return (
        <div className='w-full py-[5rem] px-4 bg-white'>
            <div className='max-w-[1240px flex flex-col justify-center mb-5'>
                <h2 className='md:text-7xl sm:text-6xl text-5xl font-bold mx-auto font-sans md:py-4'>Our Plans</h2>
                <p className='text-[#00df9a] text-md font-semibold md:text-xl md:font-semibold mx-auto'>Packages that will <span className='text-black italic'> suit your </span> organisational <span className='text-black italic'>needs.</span></p>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl border 
                    border-gray-50 flex flex-col p-4 my-4 rounded-lg
                    hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto  bg-white'
                        src={single} alt="single-user"
                    />
                    <h2 className='text-2xl font-bold text-center py-8'>
                        Single User
                    </h2>
                    <p className='text-center text-4xl font-bold'>
                        $149
                    </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <Button
                        title="Start Trial"
                        styles="text-black bg-[#00df9a] w-[120px] rounded-md font-medium my-6
                        mx-auto py-2"
                    />
                </div>
                <div className='w-full shadow-xl border 
                    border-gray-50 flex flex-col p-4 my-4 rounded-lg
                    hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto  bg-white'
                        src={double} alt="double-user"
                    />
                    <h2 className='text-2xl font-bold text-center py-8'>
                        Multiplex
                    </h2>
                    <p className='text-center text-4xl font-bold'>
                        $349
                    </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                        <p className='py-2 border-b mx-8'>3 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 10GB</p>
                    </div>
                    <Button
                        title="Start Trial"
                        styles="bg-black text-[#00df9a] w-[120px] rounded-md font-medium my-6
                        mx-auto py-2"
                    />
                </div>
                <div className='w-full shadow-xl border 
                    border-gray-50 flex flex-col p-4 my-4 rounded-lg
                    hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto  bg-white'
                        src={triple} alt="triple-user"
                    />
                    <h2 className='text-2xl font-bold text-center py-8'>
                        Company
                    </h2>
                    <p className='text-center text-4xl font-bold'>
                        POA
                    </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Unlimited Storage</p>
                        <p className='py-2 border-b mx-8'>50 Granted User</p>
                        <p className='py-2 border-b mx-8'>Unlimted Sending</p>
                    </div>
                    <Button
                        title="Enquire"
                        styles="text-black bg-[#00df9a] w-[120px] rounded-md font-medium my-6
                        mx-auto py-2"
                    />
                </div>
            </div>
        </div >
    )
}

export default Cards