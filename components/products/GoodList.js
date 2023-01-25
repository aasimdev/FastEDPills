import { CheckCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'

const GoodList = ({ data }) => {
    return (
        <div className='bg-blue py-5 hidden lg:block'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-2xl">
                <div className='flex justify-between lg:gap-11'>
                    {data?.map((item, index) => (
                        <div className='flex gap-2.5 items-center' key={index}>
                            <CheckCircleIcon className='w-6 h-6 text-white' />
                            <p className='text-white text-base font-medium'>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GoodList