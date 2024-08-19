import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <>
            <div className='flex flex-wrap justify-around p-10'>
                <div className='w-full lg:w-1/4 md:w/1/2 p-5'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='w-full lg:w-1/4 md:w/1/2 p-5'>
                    <h1 className='text-2xl font-medium'> California Office </h1>
                    <p className='text-neutral-500 mt-5 text-md'> 4243 Woodland Terrace
                        Sacramento, CA 95814. Tel. 916 753 2645 </p>
                </div>
                <div className='w-full lg:w-1/4 md:w/1/2 p-5'>
                    <h1 className='text-2xl font-medium'> NEW YORK OFFICE </h1>
                    <p className='text-neutral-500 mt-5 text-md'> 885 Oakwood Avenue
                        New York, NY 10013
                        Tel. 212 660 0744 </p>
                </div>
                <div className='w-full lg:w-1/4 md:w/1/2 p-5'>
                    <h1 className='text-2xl font-medium'> Careers </h1>
                    <p className='text-neutral-500 mt-5 text-md'> jobs@example.com </p>
                </div>
            </div>
            <div className='flex flex-wrap justify-center mb-5'>
                <h2> Designed & Developed by Muhammad Anas </h2>
            </div>
        </>
    )
}

export default Footer
