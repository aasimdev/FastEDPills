import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TreatmentBox = ({ title, description, bottle, linkTitle, startPrice, link, id }) => {
    return (
        <div className='border border-gray rounded-md group transition-all' key={id}>
            <div className='bg-gray100 py-2 px-3.5 border-b border-gray rounded-t-md'>
                <p>{title}</p>
            </div>
            <div className='px-3.5 pt-6 pb-4'>
                <div className='text-center'>
                    <Image src={bottle} className='mx-auto' alt={title} width="96" height="166" />
                </div>
                <p className='mt-6 text-[13px] leading-[18px] md:h-14 overflow-hidden'>{description}</p>
            </div>
            <Link href={link} className='bg-blue flex items-center justify-between px-3.5 py-2 rounded-b-md transition-all duration-500 group-hover:bg-darkblue'>
                <span className='text-[13px] leading-[18px] font-semibold text-white'>{linkTitle}  (from ${startPrice}/pill)</span>
                <ChevronRightIcon className='w-6 h-6 text-white' />
            </Link>
        </div>
    )
}

export default TreatmentBox