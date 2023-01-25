import Image from 'next/image'
import React from 'react'

const BestValue = () => {
    return (
        <div className='bg-white pt-11 pb-12 sm:pt-14 sm:pb-16'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-[760px]">
                <div className='text-center'>
                    <h3 className='theme-heading mb-12'>The best value, just for you</h3>
                    <Image src="/images/best.jpg" width="759" height="201" alt="best" />
                </div>
            </div>
        </div>
    )
}

export default BestValue