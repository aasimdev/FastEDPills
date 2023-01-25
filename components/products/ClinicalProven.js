import React from 'react'

const ClinicalProven = ({ title, paragraph }) => {
    return (
        <div className='bg-white py-14 pb-14 sm:pb-20'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-2xl">
                <h4 className='theme-heading text-center'>{title}</h4>
                <p className='mt-7 sm:mt-9 text-base sm:text-xl text-center'>{paragraph}</p>
            </div>

        </div>
    )
}

export default ClinicalProven