import React from 'react'
import {StarIcon} from '@heroicons/react/24/solid';

function RoomContent({image}) {
    return (
        <>
            <div className='bg-white shadow-xl w-1/4 best__hotel__box__sizing relative rounded-xl '>
                <div className='w-full h-56 bg-green-600 rounded-xl'>
                    <img src={image} alt="" className='w-full h-full rounded-xl' />
                </div>
                <div className='w-full bg-white rounded-xl p-8'>
                    <h1 className='text-2xl pb-5'>Duplex Room</h1>
                    <p className='text-slate-500 pb-5'>Semi double bed 1 guest room, 3 window</p>
                    <p className='text-xl font-bold pb-5'>Starting from 50 $/Night</p>
                    <button className='bg-cyan-600 text-white text-lg rounded-md p-1 px-4'>Book Now</button>
                </div>
                <div className='Room__Content__StartValue my_shadow h-8 absolute font-bold w-24 text-base text-orange-500 bg-white flex justify-center items-center my-shadow rounded bottom-8 right-10'>
                   <StarIcon className='h-5 mr-1'/> 4.9
                </div>
            </div>
        </>
    )
}

export default RoomContent
