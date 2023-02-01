import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'

const RecreationalDrugs = ({ register, errors, prevStep, nextStep }) => {
    return (
        <div className='bg-white shadow-box-xs p-5 md:py-9 md:px-12 rounded-lg'>
            <div className="space-y-[10px]">
                <div>
                    <span className="text-text text-sm font-medium">Are you currently using any of the following recreational drugs?</span>
                </div>
                <div className='gap-[10px] flex flex-wrap'>
                    <div className="relative inline-flex">
                        <input
                            id="poppers"
                            value="poppers"
                            type="checkbox"
                            {...register("recreationls", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="poppers" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                            Poppers or Rush
                        </label>
                    </div>

                    <div className="relative inline-flex">
                        <input
                            id="amylnitrate"
                            value="amylnitrate"
                            type="checkbox"
                            {...register("recreationls", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="amylnitrate" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                            Amyl Nitrate or Butyl Nitrate
                        </label>
                    </div>

                    <div className="relative inline-flex">
                        <input
                            id="methamphetamine"
                            value="methamphetamine"
                            type="checkbox"
                            {...register("recreationls", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="methamphetamine" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                            Methamphetamine (meth, speed, crystal)
                        </label>
                    </div>

                    <div className="relative inline-flex">
                        <input
                            id="cocaine"
                            value="cocaine"
                            type="checkbox"
                            {...register("recreationls", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="cocaine" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                            Cocaine
                        </label>
                    </div>
                    <div className="relative inline-flex">
                        <input
                            id="recreationalnoneapply"
                            value="recreationalnoneapply"
                            type="checkbox"
                            {...register("recreationls", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="recreationalnoneapply" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                            None Apply
                        </label>
                    </div>
                    
                </div>
                {errors?.recreationls && <p className='text-orange text-xs mt-2'>Please select at least one option</p>}
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

export default RecreationalDrugs