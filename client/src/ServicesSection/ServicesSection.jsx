import React from 'react'
import {ShieldCheckIcon,ClockIcon,BuildingLibraryIcon,MapIcon} from '@heroicons/react/24/outline';


function ServicesSection() {
    return (
        <>
            <div className='px-10'>
                <div className='Service__Section h-screen flex justify-center items-center px-10 relative'>
                    <div className='h-3/5 w-full bg-red-500 container mx-auto flex items-center overflow-hidden'>
                        <img src="Our__Services.png" alt="" className='w-full' />
                    </div>
                    <div className='Sercics__All__Element flex items-center bg-white rounded-xl my_shadow absolute right-80'>
                        <div className='p-20'>
                            <h4 className='text-3xl border-cyan-600 border-b-2'>Services</h4>
                            <h2 className='text-4xl my-6 mb-12'>Strive only for the best</h2>
                            <div className='mt-10 mb-10 text-xl flex items-center'>
                                <span className='bg-teal-200 p-2 rounded-full mr-6'><ShieldCheckIcon className='text-teal-600 h-10' /></span>
                                <p>High Class Security</p>
                            </div>
                            <div className='mt-10 mb-10 text-xl flex items-center'>
                                <span className='bg-indigo-200 p-2 rounded-full mr-6'><ClockIcon className='text-indigo-600 h-10' /></span>
                                <p>24 Hour Services</p>
                            </div>
                            <div className='mt-10 mb-10 text-xl flex items-center'>
                                <span className='bg-sky-200 p-2 rounded-full mr-6'><BuildingLibraryIcon className='text-sky-600 h-10' /></span>
                                <p>Best Hotle for you</p>
                            </div>
                            <div className='mt-10 text-xl flex items-center'>
                                <span className='bg-pink-200 p-2 rounded-full mr-6'><MapIcon className='text-pink-600 h-10' /></span>
                                <p>Turiest Guide Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesSection
