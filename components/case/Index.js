import React from 'react'
import SubmittedAnswers from './SubmittedAnswers'
import SubmittedFiles from './SubmittedFiles'
import SubmittedForPhysician from './SubmittedForPhysician'

const Case = () => {
    return (
        <div className='bg-white py-11 sm:pt-14 sm:pb-52'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                <div className='grid grid-cols-12 lg:grid-cols-12 gap-8'>
                    <SubmittedAnswers />
                    <div className='space-y-8 col-span-12 lg:col-span-5'>
                        <SubmittedFiles />
                        <SubmittedForPhysician />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Case