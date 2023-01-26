import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

const GotQuestions = () => {
    return (
        <div className='bg-bg-[url("/images/gotquestions-bg.jpg")] bg-no-repeat bg-center bg-cover h-[349px]'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl h-full">
                <div className='flex flex-col items-center justify-center h-full'>
                    <h5 className='text-center theme-heading text-white'>Got Questions?</h5>
                    <p className='text-white text-base md:text-xl text-center mt-6 mb-9'>Speak to our team</p>
                    <Link href="#" className='bg-orange text-white font-semibold uppercase text-lg flex gap-3 rounded-full min-w-[335px] justify-center items-center h-14'> <ChatBubbleOvalLeftEllipsisIcon className='w-6 h-6 text-white' /> LET’S TALK</Link>
                </div>
            </div>
        </div>
    )
}

export default GotQuestions