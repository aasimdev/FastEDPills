import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'

const NitratesList = ({ register, errors, prevStep, nextStep }) => {
    return (
        <div className='bg-white shadow-box-xs p-5 md:py-9 md:px-12 rounded-lg'>
            <div className="space-y-[10px]">
                <div>
                    <span className="text-text text-sm font-medium">Do you use nitrates or any of the following medications
                        listed below?</span>
                </div>

                <div className="relative inline-flex">
                    <input
                        id="nitroglycerin"
                        value="nitroglycerin"
                        type="checkbox"
                        {...register("nitrates", { required: true })}
                        className="h-4 w-4 opacity-0 invisible absolute peer"
                    />
                    <label htmlFor="nitroglycerin" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                        Nitroglycerin in any form – as a spray, tablet, patch or
                        ointment. Deponit, Minitran, Nitrek, Nitro-Bid, Nircot, Nitrodisc,
                        Niro-Dur, Nitrograd, Nitroglyn, Nitrol, Nitrolingua, Nitrolingual,
                        NitroMist, Nitrong, Nitronol, -Nitro-Par, Nitroquick, Nitrostat,
                        Nitrotab, Nitro-Time, Transdermal-Nitro, Medicine containing
                        nitrates
                    </label>
                </div>

                <div className="relative inline-flex">
                    <input
                        id="isosorbide"
                        value="isosorbide"
                        type="checkbox"
                        {...register("nitrates", { required: true })}
                        className="h-4 w-4 opacity-0 invisible absolute peer"
                    />
                    <label htmlFor="isosorbide" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                        Isosorbide Mononitrate or Isosorbide Dinitrate (Dilatrate,
                        Dilatrate-SR, Imdur, Ismo, Isordil, Monoket, Sorbitrate)
                    </label>
                </div>

                <div className="relative inline-flex">
                    <input
                        id="adempas"
                        value="adempas"
                        type="checkbox"
                        {...register("nitrates", { required: true })}
                        className="h-4 w-4 opacity-0 invisible absolute peer"
                    />
                    <label htmlFor="adempas" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                        Adempas (Riociquat), which is used to treat pulmonary
                        hypertension.
                    </label>
                </div>

                <div className="relative inline-flex">
                    <input
                        id="nitratesnoneapply"
                        value="nitratesnoneapply"
                        type="checkbox"
                        {...register("nitrates", { required: true })}
                        className="h-4 w-4 opacity-0 invisible absolute peer"
                    />
                    <label htmlFor="nitratesnoneapply" className="text-sm text-[#767f84] bg-[#f4f4f4] rounded p-3.5 cursor-pointer peer-checked:bg-blue peer-checked:text-white">
                        None Apply
                    </label>
                </div>

                {errors?.nitrates && <p className='text-orange text-xs mt-2'>Please select at least one option</p>}

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

export default NitratesList