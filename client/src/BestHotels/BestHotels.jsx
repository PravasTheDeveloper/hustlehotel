import React from 'react'
import RoomContent from './RoomContent'

function BestHotels() {
    return (
        <>
            <div className='container mx-auto pt-24 overflow-hidden'>
                <div className=''>
                    <h1 className='text-5xl m capitalize'><span className='border-cyan-600 border-b-4'>Most top</span><span className='font-bold'> hotels</span></h1>
                    <p className='text-lg py-8'>Bed Rooms</p>
                    <div className='flex justify-between'>
                        <RoomContent image="Hotle-One.png" />
                        <RoomContent image="Hotle-Two.png" />
                        <RoomContent image="Hotle-Three.png" />
                    </div>
                    <div className='flex justify-end mt-20 text-2xl underline text-cyan-600 cursor-pointer'>
                        See More
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestHotels
