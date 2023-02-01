import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'

const HeartAttack = ({ register, errors, prevStep, nextStep }) => {
    return (
        <div className='bg-white shadow-box-xs p-5 md:py-9 md:px-12 rounded-lg'>
            <div className="space-y-[10px]">

                <span className="text-text text-sm font-medium">Have you ever had a heart attack? Cardiac surgery?</span>
                <div className='flex gap-2 mt-[10px] mb-6'>
                    <div className="relative inline-flex">
                        <input
                            id="yes"
                            name="cardiacsurgery"
                            type="radio"
                            value="Yes"
                            {...register("cardiacsurgery", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="yes" className="text-center text-[#767f84] text-base h-11 md:h-[55px] flex justify-center items-center cursor-pointer bg-[#fafafa] rounded uppercase w-20 md:w-[100px] peer-checked:bg-blue peer-checked:text-white">
                            Yes
                        </label>
                    </div>
                    <div className="relative inline-flex">
                        <input
                            id="no"
                            name="cardiacsurgery"
                            type="radio"
                            value="no"
                            {...register("cardiacsurgery", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="no" className="text-center text-[#767f84] text-base h-11 md:h-[55px] flex justify-center items-center cursor-pointer bg-[#fafafa] rounded uppercase w-20 md:w-[100px] peer-checked:bg-blue peer-checked:text-white">
                            No
                        </label>
                    </div>
                </div>
                {errors?.cardiacsurgery && <p className='text-orange text-xs mt-2'>Please select one option</p>}

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

export default HeartAttack