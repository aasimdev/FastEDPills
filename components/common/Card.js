import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Card = ({ title, paragraph, icon }) => {
    return (
        <>
            <div className='border border-gray200 text-center shadow-box rounded-md pt-8 pb-6 px-4 relative h-full mx-auto max-w-xs bg-white'>
                <div className='w-[90px] h-[90px] rounded-full flex items-center justify-center mb-8 mx-auto bg-gray300'>
                    <Image src={icon} className='mx-auto' alt="Free online" width="39" height="50" />
                </div>
                <div>
                    <h5 className='text-heading text-base font-semibold uppercase'>{title}</h5>
                    <p className='mt-3'>{paragraph}</p>
                </div>

            </div>

        </>
    )
}

export default Card