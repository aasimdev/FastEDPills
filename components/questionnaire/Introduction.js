import { ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import InputMask from "react-input-mask";

const Introduction = ({ register, errors, nextStep, }) => {
    return (
        <div className='bg-white shadow-box-xs p-5 md:py-9 md:px-12 rounded-lg'>
            <div className="space-y-4 sm:space-y-5">
                <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-text">
                        Patient First Name * <span className='text-[10px]'>(As it appears on your ID)</span>
                    </label>
                    <div className="mt-[10px]">
                        <input
                            id="firstname"
                            name="firstname"
                            type="text"
                            {...register('firstname', { required: true })}
                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-white placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                        />
                        {errors?.firstname && <p className='text-orange text-xs mt-2'>First Name is required</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-text">
                        Patient Last Name * <span className='text-[10px]'>(As it appears on your ID)</span>
                    </label>
                    <div className="mt-[10px]">
                        <input
                            id="lastname"
                            name="lastname"
                            type="text"
                            {...register('lastname', { required: true })}
                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-white placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                        />
                        {errors?.lastname && <p className='text-orange text-xs mt-2'>Last Name is required</p>}
                    </div>
                </div>
                <div className='w-2/3 md:w-1/2'>
                    <label htmlFor="birthday" className="block text-sm font-medium text-text">
                        Birthday * <span className='text-[10px]'>(ID verified after checkout)</span>
                    </label>
                    <div className="mt-[10px]">
                        <InputMask
                            mask="99-99-9999"
                            maskChar=''
                            name="birthday"
                            placeholder='MM-DD-YY'
                            {...register('birthday', { required: true })}
                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-white placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                        />
                        {errors?.birthday && <p className='text-orange text-xs mt-2'>Date is required</p>}
                    </div>
                </div>
                <div className='flex justify-end gap-3 sm:gap-8 pt-5'>
                    <button className='bg-blue rounded-lg text-white flex items-center w-24 sm:w-[155px] justify-center h-11 sm:h-[58px] p-4 text-xs sm:text-lg font-medium' onClick={nextStep}>
                        <span>Next</span>
                        <ChevronRightIcon className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Introduction