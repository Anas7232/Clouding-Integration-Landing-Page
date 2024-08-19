import React from 'react'
import { Plus } from 'lucide-react';
import { Check } from 'lucide-react';
import { X } from 'lucide-react';
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'

const ServiceSecondPage = () => {
    return (
        <div className='mt-10 bg-neutral-100 p-10'>
            <div className='flex flex-wrap justify-around lg:flex-row md:flex-col p-5'>
                <div className='lg:w-1/2 w-full p-10'>
                    <h1 className='uppercase  text-blue-900 text-lg font-medium'> Faster Service </h1>
                    <h1 className='text-black text-4xl font-medium mt-4'> Simple affordable pricing for everyone </h1>
                    <p className='text-neutral-500 mt-8'> Business-to-consumer angel investor channels focus product management crowdsource stock funding. </p>
                </div>
                <div className='border lg:flex lg:justify-center lg:items-center lg:w-1/2 w-full border-neutral-500 border-dashed'>
                    <div className='flex border bg-blue-900 border-neutral-600 p-3 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-900'>
                        <Plus className='text-white size-4 mt-1 mr-2' />
                        <h3 className='text-white'> Add Element </h3>
                    </div>
                </div>
            </div>

            <div className='mt-10 p-10'>
                <div className='flex flex-wrap justify-around lg:flex-row md:flex-col'>
                    <div className='border bg-white border-neutral-100 w-full lg:w-1/3 md:w-1/2 p-10'>
                        <h2 className='text-black font-medium text-2xl ml-4'> Basic </h2>
                        <h1 className='text-black font-medium text-7xl mt-2 ml-4'> $149 </h1>
                        <p className='text-neutral-800 text-md mt-2 ml-4'> Per Month </p>
                        <p className='text-neutral-800 text-md mt-8 text-md ml-4'> Handshake return on investment network effects influencer sales social media early adopters. </p>
                        <div className='flex mt-10 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-800 ml-3 mb-3'> 5 Team Members </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-800 ml-3 mb-3'> 1GB Storage </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-800 ml-3 mb-3'> Superfast Network </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <X className='text-neutral-500 size-5' />
                            <p className='text-neutral-500 ml-3 mb-3'> Firewall & Security </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <X className='text-neutral-500 size-5' />
                            <p className='text-neutral-500 ml-3 mb-3'> Multiple Devices </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <X className='text-neutral-500 size-5' />
                            <p className='text-neutral-500 ml-3 mb-3'> Dedicated Support </p>
                        </div>
                        <div className='mt-12 ml-4'>
                            <a href="#" className='inline-flex justify-center items-center text-center w-full lg:px-20 md:px-10 px-5 py-3 rounded-md text-blue-900 font-medium tracking-tight border-solid border bg-white border-blue-800'>
                                Start Free Trail
                            </a>
                        </div>
                    </div>

                    <div className='border bg-white border-neutral-100 w-full lg:w-1/3 md:w-1/2 p-10'>
                    <h2 className='text-blue-900 font-medium text-2xl ml-4'> Premium </h2>
                        <h1 className='text-black font-medium text-7xl mt-2 ml-4'> $299 </h1>
                        <p className='text-neutral-800 text-md mt-2 ml-4'> Per Month </p>
                        <p className='text-neutral-800 text-md mt-8 text-md ml-4'> Handshake return on investment network effects influencer sales social media early adopters. </p>
                        <div className='flex mt-10 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-800 ml-3 mb-3'> 5 Team Members </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-800 ml-3 mb-3'> 1GB Storage </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-800 ml-3 mb-3'> Superfast Network </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-700 ml-3 mb-3'> Firewall & Security </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-700 ml-3 mb-3'> Multiple Devices </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-700 ml-3 mb-3'> Dedicated Support </p>
                        </div>
                        <div className='mt-12 ml-4'>
                            <a href="#" className=' inline-flex justify-center items-center text-center w-full lg:px-20 md:px-10 px-5 py-3 rounded-md text-white font-medium tracking-tight border-solid border-1 bg-blue-900 border-blue-800'>
                                Start Free Trail
                            </a>
                        </div>
                    </div>

                    <div className='border bg-white border-neutral-100 w-full lg:w-1/3 md:w-1/2 p-10'>
                    <h2 className='text-black font-medium text-2xl ml-4'> Basic </h2>
                        <h1 className='text-black font-medium text-7xl mt-2 ml-4'> $149 </h1>
                        <p className='text-neutral-800 text-md mt-2 ml-4'> Per Month </p>
                        <p className='text-neutral-800 text-md mt-8 text-md ml-4'> Handshake return on investment network effects influencer sales social media early adopters. </p>
                        <div className='flex mt-10 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-800 ml-3 mb-3'> 5 Team Members </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-800 ml-3 mb-3'> 1GB Storage </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <Check className='text-blue-900 size-5' />
                            <p className='text-neutral-800 ml-3 mb-3'> Superfast Network </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <X className='text-neutral-500 size-5' />
                            <p className='text-neutral-500 ml-3 mb-3'> Firewall & Security </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <X className='text-neutral-500 size-5' />
                            <p className='text-neutral-500 ml-3 mb-3'> Multiple Devices </p>
                        </div>
                        <div className='flex mt-2 ml-4'>
                            <X className='text-neutral-500 size-5' />
                            <p className='text-neutral-500 ml-3 mb-3'> Dedicated Support </p>
                        </div>
                        <div className='mt-12 ml-4'>
                            <a href="#" className=' inline-flex justify-center items-center text-center w-full py-3 lg:px-20 md:px-10 px-5 rounded-md text-blue-900 font-medium tracking-tight border-solid border bg-white border-blue-800'>
                                Start Free Trail
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap justify-around lg:flex-row md:flex-col p-5'>
                <div className='lg:w-1/2 w-full p-10'>
                    <h1 className='uppercase  text-blue-900 text-lg font-medium'> Faster Service </h1>
                    <h1 className='text-black text-4xl font-medium mt-4'> Trusted by thousands of happy customers </h1>
                    <p className='text-neutral-500 mt-8'> Business-to-consumer angel investor channels focus product management crowdsource stock funding. </p>
                </div>
                <div className='border lg:flex lg:justify-center lg:items-center lg:w-1/2 w-full border-neutral-500 border-dashed'>
                    <div className='flex border bg-blue-900 border-neutral-600 p-3 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-900'>
                        <Plus className='text-white size-4 mt-1 mr-2' />
                        <h3 className='text-white'> Add Element </h3>
                    </div>
                </div>
            </div>

           <div className='p-20 border-b border-neutral-300'>
           <div className='flex justify-around items-center lg:flex-row md:flex-col flex-col lg:mt-5 mt-10'>
                <img src={ brand1 } className='mt-4 w-56' alt="Brand" />
                <img src={ brand2 } className='mt-4' alt="Brand" />
                <img src={ brand3 } className='mt-4' alt="Brand" />
                <img src={ brand4 } className='mt-4' alt="Brand" />
                <img src={ brand5 } className='mt-4' alt="Brand" />
            </div>

            <div className='flex justify-around items-center lg:flex-row md:flex-col flex-col lg:mt-5 mt-10'>
                <img src={ brand4 } className='mt-4' alt="Brand" />
                <img src={ brand5 } className='mt-4' alt="Brand" />
                <img src={ brand1 } className='mt-4 w-56' alt="Brand" />
                <img src={ brand2 } className='mt-4' alt="Brand" />
                <img src={ brand3 } className='mt-4' alt="Brand" />
            </div>
           </div>

        </div>
    )
}

export default ServiceSecondPage
