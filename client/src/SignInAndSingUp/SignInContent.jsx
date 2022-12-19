import React from 'react'

function SignInContent() {
  return (
    <>
      <div className='h-screen flex'>
        <div className='h-full bg-cyan-600 w-4/12'>
          <div className='h-full flex justify-center items-center'>
            <img src="signIn.png" alt=""  />
          </div>
        </div>
        <div className='h-full bg-white w-1/2 flex flex-col justify-center items-center flex-1'>
          <h1 className='text-2xl mb-20'>Sign In</h1>
          <div>
            <h5>Email : </h5>
            <input type="text" className='border-b-2 mb-24 mt-6 border-slate-700 outline-none w-72 text-lg '/>
          </div>
          <div>
            <h5>Password : </h5>
            <input type="text" className='border-b-2 mt-6 border-slate-700 outline-none w-72 text-lg'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInContent
