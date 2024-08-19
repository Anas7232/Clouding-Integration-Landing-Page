import React from 'react'
import heroimg from '../assets/heroimg.png';
import { motion } from "framer-motion"

const imgVarient = (duration) => (
    {
        initial: { y: -15 },
        animate: {
            y: [15, -15],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }
)

const HeroSection = () => {
    return (
        <div className='flex md:flex-row flex-col justify-around'>
            <div className='ml-10 mt-5'>
                <h2 className='text-blue-900 text-md pb-6 font-medium'> INTRODUCING </h2>
                <h1 className='flex lg:text-7xl text-5xl md:text-4xl font-medium'> Best storage for startups. </h1>
                <div className='mt-10'>
                    <p className='text-neutral-500 mb-3 text-md'> Store your file in secure cloud storage. </p>
                    <p className='text-neutral-500 text-md'> Start 7 day free trials </p>
                </div>
                <div className='mt-14'>
                    <a href="#" className='py-3 px-9 rounded-md text-white font-medium tracking-tight border-solid border bg-blue-900 hover:bg-white hover:text-blue-900 border-blue-800 transition duration-200'>
                        Start Free Trail
                    </a>
                </div>
                <div className='mt-10'> 
                <p className='text-neutral-500 text-md'> No Creadit Card Required. </p>
                </div>
            </div>
            <div className=''>
                <motion.img
                    variants={imgVarient(2.5)}
                    initial="initial"
                    animate="animate"
                src={heroimg} className='max-w-full h-auto mx-2 my-4' alt="HeroImg" />
            </div>
        </div>
    )
}

export default HeroSection
