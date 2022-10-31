import React from 'react'

function ContactDirectly() {
  return (
    <>
        <div className='container mx-auto mb-80'>
            <div >
                <h1 className='text-6xl font-bold mb-32 '>
                    <span className='font-light border-b-2 border-cyan-600'>If Contact</span> Us Directly
                </h1>
                <div className='md:flex justify-center items-center'>
                    <div className=''>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0806013254773!2d90.40624741541471!3d23.744504994917587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b88bfd0133c5%3A0xfde0a96bf5fecf99!2sStamford%20University%20Bangladesh!5e0!3m2!1sen!2sbd!4v1666886999077!5m2!1sen!2sbd" className='w-full' />
                    </div>
                    <div className='flex-1'>
                        <div className='text-2xl font-light text-slate-500'>
                            <p>51 Siddheswari Road, Dhaka 1217</p>
                            <p>info.booktogo@gmail.com</p>
                            <p>+880 1998027752</p>
                        </div>
                        <div className='my-20'>
                            <h1 className='text-2xl'>Why Don't Messege Us Directly</h1>
                        </div>
                        <div className='w-full'>
                            <form action="" className='w-full'>
                                <div className='my-5'>
                                    <input type="text" placeholder='Your Name' className='w-1/2 h-10 border-b-2 border-slate-600 outline-none pl-4 text-xl '></input>
                                </div>
                                <div className='my-5'>
                                    <input type="text"  placeholder='Your Email Address' className='w-1/2 h-10 border-b-2 border-slate-600 outline-none pl-4 text-xl '></input>
                                </div>
                                <div className='my-5'>
                                    <textarea type="text" placeholder='Your Messege' className='w-1/2 h-52 border-b-2 border-slate-600 outline-none pl-4 pt-5 text-xl'></textarea>
                                </div>
                                <div className='w-full flex justify-end'>
                                    <button className='bg-cyan-600 py-3 px-10 text-xl text-white'>
                                        SENT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactDirectly
