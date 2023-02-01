import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'

const VitalTestedMedPractitioner = ({ register, errors, prevStep, nextStep }) => {
    return (
        <div className='bg-white shadow-box-xs p-5 md:py-9 md:px-12 rounded-lg'>
            <div className="space-y-[10px]">
                <div>
                    <span className="text-text text-sm font-medium">Have you had your vitals tested by a medical practitioner in the
                        past 3 years? This includes weight, blood pressure, and heart rate.</span>
                </div>

                <div className="relative inline-flex">
                    <input
                        id="normal"
                        value="normal"
                        type="checkbox"
                        {...register("vitalTestedMedPractitioner", { required: true })}
                        className="h-4 w-4 opacity-0 invisible absolute peer"
                    />
                    <label htmlFor="normal" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                        Normal ( less than 120 systolic and less than 80 diastolic)
                    </label>
                </div>

                <div className="relative inline-flex">
                    <input
                        id="elevated"
                        value="elevated"
                        type="checkbox"
                        {...register("vitalTestedMedPractitioner", { required: true })}
                        className="h-4 w-4 opacity-0 invisible absolute peer"
                    />
                    <label htmlFor="elevated" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                        Elevated ( 120 to 129 systolic and less than 80 diastolic)
                    </label>
                </div>

                <div className="relative inline-flex">
                    <input
                        id="high"
                        value="high"
                        type="checkbox"
                        {...register("vitalTestedMedPractitioner", { required: true })}
                        className="h-4 w-4 opacity-0 invisible absolute peer"
                    />
                    <label htmlFor="high" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                        High (130-160 systolic and between 80-100 diastolic)
                    </label>
                </div>

                <div className="relative inline-flex">
                    <input
                        id="uncontrolled"
                        value="uncontrolled"
                        type="checkbox"
                        {...register("vitalTestedMedPractitioner", { required: true })}
                        className="h-4 w-4 opacity-0 invisible absolute peer"
                    />
                    <label htmlFor="uncontrolled" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                        Uncontrolled (above 160 systolic OR higher than 100 diastolic)
                    </label>
                </div>
                <div className="relative inline-flex">
                    <input
                        id="controlled"
                        value="controlled"
                        type="checkbox"
                        {...register("vitalTestedMedPractitioner", { required: true })}
                        className="h-4 w-4 opacity-0 invisible absolute peer"
                    />
                    <label htmlFor="controlled" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                        Controlled with Medicine
                    </label>
                </div>

                {errors?.vitalTestedMedPractitioner && <p className='text-orange text-xs mt-2'>Please select at least one option</p>}

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

export default VitalTestedMedPractitioner