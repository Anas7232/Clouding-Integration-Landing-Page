import React from 'react'
import { Settings } from 'lucide-react';
import { Check } from 'lucide-react';
import { ArrowBigDown } from 'lucide-react';

const ServicesPage = () => {
    return (
        <div className='flex flex-wrap justify-around lg:flex-row flex-col mt-5'>
            <div className='w-full lg:w-1/3 md:w-1/2 p-10'>
                <h2 className='text-blue-900 text-lg font-medium'> MORE SERVICES </h2>
                <h1 className='text-neutral-950 text-4xl mt-3 font-medium'> Serve your data faster with us. </h1>
                <p className='text-neutral-500 text-md mt-8'> Business-to-consumer angel investor channels focus product. </p>
                <div className='mt-12'>
                    <a href="#" className='py-3 px-9 rounded-md text-white font-medium tracking-tight border-solid border bg-blue-900 hover:bg-white hover:text-blue-900 border-blue-800 transition duration-200'>
                        Start Free Trail
                    </a>
                </div>
            </div>
            <div className='w-full lg:w-1/3 md:w-1/2 p-10'>
                <Settings className='text-blue-900 size-8' />
                <h2 className='text-black font-medium text-xl mt-6 mb-6'> Global CDN Newtwork </h2>
                <p className='text-neutral-500 mb-8'> MVP seed money innovator network effects marketing rockstar freemium interaction design. </p>
                <div className='flex'>
                    <Check className='text-blue-900 size-5' />
                    <p className='text-neutral-500 ml-3 mb-3'> 83 Edge Locations </p>
                </div>
                <div className='flex'>
                    <Check className='text-blue-900 size-5' />
                    <p className='text-neutral-500 ml-3 mb-3'> Advanced Cache </p>
                </div>
            </div>
            <div className='border-l border-neutral-100 w-full lg:w-1/3 md:w-1/2 p-10'>
            <ArrowBigDown className='text-blue-900 size-8' />
                <h2 className='text-black font-medium text-xl mt-6 mb-6'> Frequent Backup </h2>
                <p className='text-neutral-500 mb-8'> MVP seed money innovator network effects marketing rockstar freemium interaction design. </p>
                <div className='flex'>
                    <Check className='text-blue-900 size-5' />
                    <p className='text-neutral-500 ml-3 mb-3'> Daily & Weekly Backup </p>
                </div>
                <div className='flex'>
                    <Check className='text-blue-900 size-5' />
                    <p className='text-neutral-500 ml-3 mb-3'> Custom Backup Rules </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
