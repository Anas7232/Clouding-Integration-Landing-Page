import React from 'react'
import { CheckIcon } from 'lucide-react'
import { pricingOptions } from '../constants'

const FeatureSection = () => {
  return (
    <div className='mt-20'>
        <div className='flex flex-wrap'>
            { pricingOptions.map((option, index) => (
                <div className='w-full sm:w-1/2 lg:w-1/3' key={index}>
                    <div className='p-10 border-l border-neutral-100'>
                        <p className='text-lg text-neutral-950 font-medium mb-8'> 
                            {option.title} 
                        </p>
                        <p className="mb-8">
                            <span className='text-sm text-neutral-500 mt-6 mr-2'> {option.paragraph} </span>
                        </p>
                        <ul>
                            { option.features.map((feature, index) => (
                                <li className='mt-2 items-center flex' key={index}>
                                    <CheckIcon className='text-blue-600' />
                                    <span className='ml-2 text-neutral-500'> { feature } </span>
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>
            )) }
        </div>
    </div>
  )
}

export default FeatureSection
