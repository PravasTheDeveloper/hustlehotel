import React from 'react'
// import LogoImage from '../../public/Logo-Designs.png';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Navigation() {
    return (
        <>
            <div className='Home__Page__Navigator container mx-auto px-10'>
                <div className='h-20'>
                    <div className="h-full flex justify-between items-center text-white border-b-2">
                        <div className='text-white h-14'>
                           <img src="Logo-Designs.png" alt="" className='h-full' />
                        </div>
                        <div className=''>
                            <ul className='flex'>
                                <li className='mx-5'>Home</li>
                                <li className='mx-5'>About</li>
                                <li className='mx-5'>Services</li>
                                <li className='mx-5'>Hotel</li>
                                <li className='mx-5'>Contacts</li>
                            </ul>
                        </div>
                        <div className='h-full flex items-center'>
                            <div className='w-6 Home__Page__Search__Icon flex justify-center items-center'>
                                <MagnifyingGlassIcon className='w-8' />
                            </div>
                            <div className='bg-cyan-600 h-full flex items-center px-5'>
                                Sign In
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation
