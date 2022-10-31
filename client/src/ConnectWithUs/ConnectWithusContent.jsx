import React from 'react'

function ConnectWithusContent({title,subtitle,style}) {
    return (
        <>
            <div>
                <h1 className={style} >{title}</h1>
                <h3 className='text-2xl mt-4 text-slate-500'>{subtitle}</h3>
            </div>
        </>
    )
}

export default ConnectWithusContent
