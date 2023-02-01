import React from 'react'

const ProgressBar = ({ percentage, step }) => {
    return (
        <div className='bg-[#e9ecef] h-5 w-full rounded overflow-hidden relative mb-6'>
            <span className='text-[9px] text-center justify-center text-white h-full bg-blue inline-flex items-center p-1 absolute
      leading-none' style={step == 1 ? {width: "42px"} :{ width: `${percentage}%` }}>  {step} of 13</span>
        </div>
    )
}

export default ProgressBar