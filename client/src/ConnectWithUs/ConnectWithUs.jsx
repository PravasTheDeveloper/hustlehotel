import React from 'react'
import ConnectWithusContent from './ConnectWithusContent'

function ConnectWithUs() {
  return (
    <>
      <div className='m-44'>
        <div className='container mx-auto h-52 w-full bg-white my_shadow rounded-md mb-80 flex items-center justify-around'>
          <ConnectWithusContent title="140+" subtitle="New Hotels" style="text-5xl"/>
          <ConnectWithusContent title="200+" subtitle="Our Own Guest" style="text-center text-5xl" />
          <ConnectWithusContent title="500+" subtitle="International Guest" style="text-right text-5xl" />
        </div>
      </div>
    </>
  )
}

export default ConnectWithUs
