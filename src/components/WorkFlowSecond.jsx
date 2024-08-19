import React from 'react'
import worksec from '../assets/worksec.png';
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

const WorkFlowSecond = () => {
    return (
        <div className='flex md:flex-row lg:flex-row flex-col justify-around'>
            <div className='ml-10 lg:mt-40'>
                <h2 className='text-blue-900 text-md pb-6 font-medium'> FASTER SERVICES </h2>
                <h1 className='flex lg:text-5xl text-3xl md:text-2xl font-medium'> Serve your data faster with us. </h1>
                <div className='mt-10'>
                    <p className='text-neutral-500 mb-3 text-md'> Business-to-consumer angel investor channels focus product management crowdsource stock funding. </p>
                </div>
                <div className='mt-10'>
                    <h2 className='text-blue-900 text-md  pb-0 font-medium'> Cloud Storage: 7ms </h2>
                    <hr className='h-1 w-80 my-4 bg-blue-900 rounded dark:bg-blue-900' />
                </div>
                <div className='mt-10'>
                    <h2 className='text-blue-200 text-md  pb-0 font-medium'> Others: 10ms </h2>
                    <hr className='h-1 w-96 my-4 bg-blue-200 rounded dark:bg-blue-200' />
                </div>
            </div>
            <div className=''>
                <motion.img
                    variants={imgVarient(2.5)}
                    initial="initial"
                    animate="animate"
                    src={worksec} className='size-11/12' alt="WorkSecond" />
            </div>
        </div>
    )
}

export default WorkFlowSecond
