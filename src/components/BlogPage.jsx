import React from 'react'
import { ArrowRight } from 'lucide-react';


const BlogPage = () => {
    return (
        <div className='p-10 ml-20'>
            <h1 className='text-neutral-900 text-4xl font-medium'> Recent Blogs </h1>
            <div className='flex lg:flex-row md:flex-col flex-col mt-10'>
                <div className='border-neutral-100 rounded bg-white border lg:w-1/2 w-full p-10'>
                    <h1 className='text-neutral-900 text-3xl font-medium'> In one hundred years from now, thsi headline will still get attention. </h1>
                    <p className='text-neutral-500 mt-5'> The world is changingn and we  are in middle of a revolution. Technology has changed the way we wo </p>
                    <div className='flex mt-5'>
                        <h2 className='text-blue-900'> Read More </h2>
                        <ArrowRight className='ml-3 size-4 mt-1 text-blue-900' />
                    </div>
                </div>
                <div className='border-neutral-200 rounded border lg:w-1/2 w-full p-10'>
                <h1 className='text-neutral-900 text-3xl font-medium'> Beets Conserve Coffie Pakistan salami herbs aroma water cupcake whipped cream. </h1>
                <p className='text-neutral-500 mt-5'> Custered pie starter bartender mineral water carbs salami mariant grociries pasta dessert create </p>
                <div className='flex mt-5'>
                    <h2 className='text-blue-900'> Read More </h2>
                    <ArrowRight className='ml-3 size-4 mt-1 text-blue-900' />
                </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
