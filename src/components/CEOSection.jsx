import React from 'react'
import ceo from '../assets/ceo.png'
import { Layers2 } from 'lucide-react';

const CEOSection = () => {
  return (
    <div className='mt-10 bg-neutral-100'>
            <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-1/2'>
                    <img src={ceo} alt="CEO" className='rounded-r-full' />
                </div>
                <div className='pt-12 w-full lg:w-1/2 pl-20 pr-20'>
                    <div>
                        <Layers2 className='text-blue-900 size-12' />
                        <p className='mt-10 font-md leading-relaxed text-neutral-500'> These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. </p>
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-blue-900 text-lg font-medium'> Melissa Gomez </h2>
                        <p className='text-neutral-500 mt-1'> CEO & Founder, Example LLC </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CEOSection
