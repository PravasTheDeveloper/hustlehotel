import React from 'react'
import { useState } from 'react'

function CarSelectOption() {

    
    const [personCal, setpersonCal] = useState(0)
    const [adultNmber, setadultNmber] = useState(1)
    const [childNumber, setchildNumber] = useState(0)
    const [hotelClasses, sethotelClasses] = useState("economy")
    const [roomSelect, setroomSelect] = useState(1)

    console.log(roomSelect)

    if (adultNmber > 4 * roomSelect) {
        setadultNmber(4 * roomSelect);
    } else if (adultNmber < 1) {
        setadultNmber(1)
    }

    if (childNumber > 2 * roomSelect) {
        setchildNumber(2 * roomSelect)
    }
    else if (childNumber < 0) {
        setchildNumber(0)
    }

    return (
        <>
            <div className='border border-slate-300 w-full rounded-2xl'>
                <div className='p-5 border-b border-slate-300 cursor-pointer'>
                    <h1 className='text-xs text-slate-400'>Location</h1>
                    <input type="text" className='border-b outline-none border-slate-500' />
                </div>
                <div className='flex justify-between'>
                    <div className=' border-r border-slate-300 w-2/4 h-max'>
                        <div className='p-5 border-b border-slate-300'>
                            <h1 className='text-xs text-slate-400'>Check-In</h1>
                            <input type="date" className='w-full border-b border-slate-300 outline-none text-base' />
                        </div>
                        <div className='p-5 border-b border-slate-300'>
                            <h1 className='text-xs text-slate-400'>Room</h1>
                            <select name="cars" id="cars" className='outline-none p-0' onChange={(e) => { setroomSelect(e.target.value) }}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-2/4'>

                        <div className='p-5 border-b border-slate-300'>
                            <h1 className='text-xs text-slate-400'>Check-Out</h1>
                            <input type="date" className='w-full border-b border-slate-300 outline-none' />
                        </div>
                        <div className='p-5 border-b border-slate-300'>
                            <h1 className='text-xs text-slate-400'>Room Type</h1>
                            <select name="hotelRoomClass" id="hotelRoomClass" className='outline-none p-0 text-sm' onChange={(e) => { sethotelClasses(e.target.value) }}>
                                <option value="economy">ECONOMY</option>
                                <option value="business">BUSINESS</option>
                                <option value="standard">STANDARD</option>
                                <option value="luxury">LUXURY</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div>
                    <div className={personCal == 0 ? 'p-5 border-b border-slate-300 relative cursor-pointer' : 'p-5 border-b border-slate-300 relative cursor-pointer bg-cyan-100'} >
                        <div onClick={() => { setpersonCal(!personCal) }}>
                            <h1 className='text-xs text-slate-400'>Guest</h1>
                            <h1 className='text-base font-bold'>{adultNmber} Adult , {childNumber} Child <i className="fa-solid fa-chevron-down ml-5"></i></h1>
                            <h1 className='text-xs text-slate-400'>Each Room 4 Adult and 2 Child</h1>
                        </div>
                        <div className={personCal == 1 ? `bg-white p-5 rounded-md absolute w-2/3 right-0 top-5 shadow-lg` : "bg-red-700 p-5 rounded-md absolute w-2/3 person__Table__css"}>
                            <div className='flex justify-between'>
                                <div className=''>
                                    <div className='my-5'>
                                        Adults
                                        <h1 className='text-xs text-slate-400'>12 Year or avobe</h1>
                                    </div>
                                    <div className='mb-5'>
                                        Child
                                        <h1 className='text-xs text-slate-400'>2-11 Year</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <div className='my-5 h-1/2'>
                                        <div className='flex items-center'>
                                            <div className='border-slate-600 border h-6 w-6 text-center rounded-full text-slate-600 hover:bg-cyan-200' onClick={() => { setadultNmber(adultNmber - 1) }}><i class="fa-solid fa-minus"></i></div>
                                            <div className='mx-3 text-xl'>{adultNmber}</div>
                                            <div className='border-slate-600 border h-6 w-6 text-center rounded-full text-slate-600 hover:bg-cyan-200' onClick={() => { setadultNmber(adultNmber + 1) }}><i class="fa-solid fa-plus"></i></div>
                                        </div>
                                    </div>
                                    <div className='mb-5 h-1/2'>
                                        <div className='flex items-center'>
                                            <div className='border-slate-600 border h-6 w-6 text-center rounded-full text-slate-600 hover:bg-cyan-200' onClick={() => { setchildNumber(childNumber - 1) }}><i class="fa-solid fa-minus"></i></div>
                                            <div className='mx-3 text-xl'>{childNumber}</div>
                                            <div className='border-slate-600 border h-6 w-6 text-center rounded-full text-slate-600 hover:bg-cyan-200' onClick={() => { setchildNumber(childNumber + 1) }}><i class="fa-solid fa-plus"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='absolute top-2 right-2 hover:text-red-500' onClick={() => { setpersonCal(0) }}>
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                            </div>

                        </div>
                    </div>

                    <button className='bg-cyan-600 w-full py-3 text-xl text-white none rounded-b-2xl'>
                        SEARCH
                    </button>
                </div>
            </div>
        </>
    )
}

export default CarSelectOption