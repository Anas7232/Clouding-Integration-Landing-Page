import React from 'react'
import workflow from '../assets/workflow.png'

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

const WordFlowPage = () => {
    return (
        <div className='mt-10 bg-neutral-100'>
            <div className='flex flex-wrap justify-center p-20'>
                <div className='p-2 w-full lg:w-1/2 '>
                    <motion.img
                        variants={imgVarient(2.5)}
                        initial="initial"
                        animate="animate"
                        src={workflow} alt="WorkFlow" />
                </div>
                <div className='pt-12 w-full lg:w-1/2 pl-20'>
                    <div>
                        <h2 className='text-blue-900 text-md pb-6 font-medium'> SECURE STORAGE </h2>
                        <h1 className='flex lg:text-5xl lg:leading-1 text-3xl md:text-2xl font-medium'> Save your data securely on cloud. </h1>
                        <p className='mt-10 font-md leading-relaxed text-neutral-500'> Business-to-consumer angel investor channels focus product management crowdsource stock funding learning curve branding churn rate. </p>
                        <p className='mt-10 text-md leading-relaxed text-neutral-500'> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordFlowPage
