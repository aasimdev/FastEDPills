import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import React from 'react'

const MedicalIssues = ({ register, errors, prevStep }) => {
    return (
        <div className='bg-white shadow-box-xs p-5 md:py-9 md:px-12 rounded-lg'>
            <div className="space-y-[10px]">
                <div>
                    <span className="text-text text-sm font-medium">Select any of the following medical issues that apply</span>
                </div>
                <div className='gap-[10px] flex flex-wrap'>
                    <div className="relative inline-flex">
                        <input
                            id="nothealthy"
                            value="nothealthy"
                            type="checkbox"
                            {...register("medicalissues", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="nothealthy" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                            I have been told that I am not healthy enough to have sex.
                        </label>
                    </div>

                    <div className="relative inline-flex">
                        <input
                            id="breathissue"
                            value="breathissue"
                            type="checkbox"
                            {...register("medicalissues", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="breathissue" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                            Within the last year I have experienced chest pain AND/OR
                            significant shortness of breath while undergoing exercise.
                        </label>
                    </div>

                    <div className="relative inline-flex">
                        <input
                            id="blurryvision"
                            value="blurryvision"
                            type="checkbox"
                            {...register("medicalissues", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="blurryvision" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                            I have experienced unexplained blurry vision or headaches.
                        </label>
                    </div>

                    <div className="relative inline-flex">
                        <input
                            id="notwalk"
                            value="notwalk"
                            type="checkbox"
                            {...register("medicalissues", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="notwalk" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                            I am unable to walk 1 mile on a flat surface within 20 minutes.
                        </label>
                    </div>
                    <div className="relative inline-flex">
                        <input
                            id="lowbloodpressure"
                            value="lowbloodpressure"
                            type="checkbox"
                            {...register("medicalissues", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="lowbloodpressure" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                            I have been diagnosed with low blood pressure
                        </label>
                    </div>
                    <div className="relative inline-flex">
                        <input
                            id="medissuenoneapply"
                            value="none apply"
                            type="checkbox"
                            {...register("medicalissues", { required: true })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="medissuenoneapply" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                            None Apply
                        </label>
                    </div>
                </div>
                {errors?.medicalissues && <p className='text-orange text-xs mt-2'>Please select at least one option</p>}
                <div className='flex justify-between gap-3 sm:gap-8 pt-5'>
                    <button className='bg-orange rounded-lg text-white flex items-center w-24 sm:w-[155px] justify-center h-11 sm:h-[58px] p-4 text-xs sm:text-lg font-medium' onClick={prevStep}>
                        <ChevronLeftIcon className='w-6 h-6' />
                        <span>Back</span>
                    </button>
                    <button className='bg-blue rounded-lg text-white flex items-center w-24 sm:w-[155px] justify-center h-11 sm:h-[58px] p-4 text-xs sm:text-lg font-medium' type='submit'>
                        <span>Submit</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MedicalIssues