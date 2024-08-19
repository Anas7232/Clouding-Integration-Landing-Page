import React from 'react'
import mobile from '../assets/mobile.png'

const LastSection = () => {
    return (
        <div className='p-10 ml-20'>
            <div className='flex lg:flex-row md:flex-col flex-col mt-10'>
                <div className='border-neutral-100 bg-white border lg:w-1/2 w-full'>
                    <img src={ mobile } className='rounded' alt="Mobile" />
                </div>
                <div className='border-neutral-200 border bg-white lg:w-1/2 w-full p-10'>
                    <h1 className='text-blue-900 text-2xl font-medium mt-20'> 7 Days Free Trail. </h1>
                    <h1 className='text-black lg:text-6xl md:text-4xl text-3xl mt-5 font-medium'> Start your 7 days free trial without credit card </h1>
                    <p className='text-neutral-500 text-md mt-10'> Business-to-consumer angel investor channels focus product management crowdsource stock funding. </p>
                    <div className='border border-blue-900 flex justify-center items-center p-3 bg-blue-900 text-white cursor-pointer hover:bg-white hover:text-blue-900 mt-10 rounded-lg'> 
                        <h2> Start Your 7 Days Free Tail </h2>
                    </div>
                    <p className='text-neutral-500 mt-10'> Cancel anytime without any hassle. </p>
                </div>
            </div>
        </div>
    )
}

export default LastSection
