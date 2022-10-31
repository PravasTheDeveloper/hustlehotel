import React from 'react'

function AboutUsSection() {
    return (
        <>
            <div className='container mx-auto px-10 py-52'>
                <div className='flex'>
                    <div className='w-1/2 flex justify-center items-center'>
                        <img src="About__Us__Pic.png" className='h-4/5' alt="" />
                    </div>
                    <div className=' w-1/2 flex flex-col justify-center'>
                        <h3 className='m-5 text-3xl leading-loose border-cyan-600 border-b-2'>About Us</h3>
                        <h1 className='m-5 text-5xl leading-relaxed	'>Make your holiday <br />easier</h1>
                        <p className='m-5 text-xl break-words leading-loose	tracking-widest	text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsSection
