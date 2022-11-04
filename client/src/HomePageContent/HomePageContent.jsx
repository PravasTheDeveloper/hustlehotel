import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import HotelSelectOption from './HotelSelectOption';
import CarSelectOption from './CarSelectOption';

function HomePageContent() {

    const [selectServices, setselectServices] = useState(1)

    return (
        <>
            <div className='Home__Page__Content flex justify-center items-center container mx-auto p-10 ' >
                {/* <div>
                    <div className='text-white w-screen'>
                        <h1 className='text-7xl font-light uppercase'>Get Preeminent Hotel</h1>
                        <div className='w-1/2 text-lg mt-32 mx-auto'>
                            <ul className='w-full flex justify-between bg-white text-black rounded-lg'>
                                <li className='bg-teal-500 py-5 px-8 text-white rounded-lg'>LUXURY HOTEL</li>
                                <li className='py-5 px-8'>LUXURY HOTEL</li>
                                <li className='py-5 px-8'>LUXURY HOTEL</li>
                                <li className='py-5 px-8'>LUXURY HOTEL</li>
                            </ul>
                        </div>
                        <div className='w-1/2 text-lg mb-32 mx-auto'>
                            <ul className='w-full flex justify-between text-white border rounded-lg'>
                                <li className=' py-4 px-16 rounded-l-lg flex justify-center items-center'>Location <ChevronDownIcon className='w-8 mt-2 ml-2' /></li>
                                <li className='py-4 px-16 border-l-2 flex justify-center items-center'>Members <ChevronDownIcon className='w-8 mt-2 ml-2' /></li>
                                <li className='py-4 px-16 border-l-2 flex justify-center items-center'>Check In <ChevronDownIcon className='w-8 mt-2 ml-2' /></li>
                                <li className='py-4 px-20 rounded-lg bg-teal-500 text-white flex justify-center items-center'>Search</li>
                            </ul>
                        </div>
                        <h1 className='text-7xl font-light uppercase'>In <span className='font-bold'>Bangladesh</span></h1>
                    </div>
                </div> */}
                <div className='container mx-auto Home__Page__Content'>
                    <div className='lg:flex h-full'>
                        <div className='lg:w-1/2 h-full flex items-center justify-center bg-green-70'>
                            <div className=' bg-white w-4/5 p-10 rounded-xl shadow-lg'>
                                {/* <div>
                                    <h1 className='text-xl font-bold mb-6'>Search Room</h1>
                                </div> */}
                                <div className='flex justify-around mb-5 text-xl'>
                                    <div className={selectServices === 1?"text-cyan-600 border-b-2 border-cyan-600 cursor-pointer":"cursor-pointer"} onClick={() => {setselectServices(1)}}>
                                        <i class="fa-solid fa-hotel"></i> HOTELS
                                    </div>
                                    <div className={selectServices === 2?"text-cyan-600 border-b-2 border-cyan-600  cursor-pointer":"cursor-pointer"} onClick={() => {setselectServices(2)}}>
                                        <i class="fa-solid fa-car"></i> CARS
                                    </div>
                                </div>
                                {selectServices === 1?
                                    <HotelSelectOption />
                                    :
                                    <CarSelectOption />
                                }
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col items-end justify-around h-full p-10 box-border text-white bg-blue-60'>
                            <div className='text-right font-light uppercase'>
                                <h2 className='text-4xl'>Get Preeminent Hotel</h2>
                                <h1 className='text-6xl mt-10'>IN <span className='font-bold'>Bangladesh</span></h1>
                            </div>

                            <div className='bg-white w-4/6 text-black text-xs p-8 rounded-xl'>
                                <h3 className='text-xl'>Spacial Offer</h3>
                                <div className='text-slate-500 mt-4'>
                                    Cox's Bazar
                                </div>
                                <div className='text-slate-500 flex justify-between mt-5'>
                                    <div><i class="fa-solid fa-bed"></i> 2 Bed</div>
                                    <div><i class="fa-solid fa-wifi"></i> Wifi</div>
                                    <div><i class="fa-solid fa-mountain"></i> Font View</div>
                                </div>
                                <div className='text-base flex justify-between items-center mt-6'>
                                    <div>
                                        4 Day at<span className='text-cyan-600 text-xl'> 4999 taka</span>
                                    </div>

                                    <button className='bg-cyan-600 text-white p-2 px-6 '>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageContent
