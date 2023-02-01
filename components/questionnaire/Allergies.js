import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Allergies = ({ register, errors, prevStep, nextStep }) => {
    return (
        <div className='bg-white shadow-box-xs p-5 md:py-9 md:px-12 rounded-lg'>
            <div className="space-y-[10px]">

                <div>
                    <label htmlFor="allergiesList" className="block text-sm font-medium text-text">
                        List medication allergies
                    </label>
                    <div className="mt-[10px]">
                        <textarea id="allergiesList"
                            name="allergiesList"
                            type="text"
                            {...register("allergiesList", { required: true })}
                            className="block resize-none w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-white h-[105px] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base">

                        </textarea>
                        {errors?.allergiesList && <p className='text-orange text-xs mt-2'>Please add the allergies</p>}
                    </div>
                </div>

                <div className='flex justify-between gap-3 sm:gap-8 pt-5'>
                    <button className='bg-orange rounded-lg text-white flex items-center w-24 sm:w-[155px] justify-center h-11 sm:h-[58px] p-4 text-xs sm:text-lg font-medium' onClick={prevStep}>
                        <ChevronLeftIcon className='w-6 h-6' />
                        <span>Back</span>
                    </button>
                    <button className='bg-blue rounded-lg text-white flex items-center w-24 sm:w-[155px] justify-center h-11 sm:h-[58px] p-4 text-xs sm:text-lg font-medium' onClick={nextStep}>
                        <span>Next</span>
                        <ChevronRightIcon className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Allergies