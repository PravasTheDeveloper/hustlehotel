import React from 'react'
// import LogoImage from '../../public/Logo-Designs.png';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

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
                                <Link to="/"  className='mx-5'>Home</Link>
                                <Link to="about" className='mx-5'>About</Link>
                                <li className='mx-5'>Hotels</li>
                                <li className='mx-5'>Cars</li>
                                <li className='mx-5'>Tour</li>
                            </ul>
                        </div>
                        <div className='h-full flex items-center'>
                            <div className='w-6 Home__Page__Search__Icon flex justify-center items-center'>
                                <MagnifyingGlassIcon className='w-8' />
                            </div>
                            <div className='bg-cyan-600 h-full flex items-center px-5'>
                                <Link to="signin">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation
