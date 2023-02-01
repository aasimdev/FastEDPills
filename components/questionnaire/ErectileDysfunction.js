import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

const ErectileDysfunction = ({ register, errors, prevStep, nextStep }) => {
    const [currentlyED, setCurrentlyED] = useState(false);
    return (
        <div className='bg-white shadow-box-xs p-5 md:py-9 md:px-12 rounded-lg'>
            <div className="space-y-[10px]">

                <span className="text-text text-sm font-medium">Are you currently taking any medications for erectile
                    dysfunction or pulmonary hypertension?
                    (Example: tadalafil, Cialis, sildenafil, Viagra, Revatio, Levitra)</span>
                <div className='flex gap-2 mt-[10px] mb-6'>
                    <div className="relative inline-flex">
                        <input
                            id="yes"
                            name="erectiledysfunction"
                            type="radio"
                            value="Yes"
                            {...register("erectiledysfunction", {
                                required: true,
                                onChange: (e) => { setCurrentlyED(e.target.value) }
                            })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="yes" className="text-center text-[#767f84] text-base h-11 md:h-[55px] flex justify-center items-center cursor-pointer bg-[#fafafa] rounded uppercase w-20 md:w-[100px] peer-checked:bg-blue peer-checked:text-white">
                            Yes
                        </label>
                    </div>
                    <div className="relative inline-flex">
                        <input
                            id="no"
                            name="erectiledysfunction"
                            type="radio"
                            value="No"
                            {...register("erectiledysfunction", {
                                required: true,
                                onChange: (e) => { setCurrentlyED(e.target.value) }
                            })}
                            className="h-4 w-4 opacity-0 invisible absolute peer"
                        />
                        <label htmlFor="no" className="text-center text-[#767f84] text-base h-11 md:h-[55px] flex justify-center items-center cursor-pointer bg-[#fafafa] rounded uppercase w-20 md:w-[100px] peer-checked:bg-blue peer-checked:text-white">
                            No
                        </label>
                    </div>
                </div>

                {errors?.erectiledysfunction && <p className='text-orange text-xs mt-2'>Please select one option</p>}



                {currentlyED === "Yes" &&
                    <div>
                        <label htmlFor="EDmedTaking" className="block text-sm font-medium text-text">
                            What are those medication for ED you are taking
                        </label>
                        <div className="mt-[10px]">
                            <textarea id="EDmedTaking"
                                name="EDmedTaking"
                                type="text"
                                {...register("EDmedTaking", { required: true })}
                                className="block resize-none w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-white h-[105px] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base">

                            </textarea>
                            {errors?.EDmedTaking && <p className='text-orange text-xs mt-2'>Please write the medication for ED</p>}
                        </div>
                    </div>
                }

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

export default ErectileDysfunction