import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Cart = () => {
    let [plan, setPlan] = useState('4doses')
    return (
        <div className='bg-white pt-12 pb-28 md:pb-52'>
            <div className="mx-auto px-4 sm:px-0 sm:max-w-[540px]">
                <div className='bg-[#f5f5f5] rounded p-6 sm:py-9 sm:px-12'>
                    <RadioGroup value={plan} onChange={setPlan}>
                        <RadioGroup.Label className="text-text text-sm font-medium">How many times you believe you will take the medication
                            each month, select one:</RadioGroup.Label>
                        <div className='grid grid-cols-3 gap-[1px] mt-5 mb-6'>
                            <RadioGroup.Option value="4doses" className="rounded-l overflow-hidden">
                                {({ checked }) => (
                                    <span className={checked ? 'bg-blue text-center text-white text-sm h-11 flex justify-center items-center cursor-pointer' : 'bg-white text-center text-[#545a5d] text-sm h-11 flex justify-center items-center cursor-pointer'}>4 doses</span>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="8doses">
                                {({ checked }) => (
                                    <span className={checked ? 'bg-blue text-center text-white text-sm h-11 flex justify-center items-center cursor-pointer' : 'bg-white  text-center text-[#545a5d] text-sm h-11 flex justify-center items-center cursor-pointer'}>8 doses</span>
                                )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="12doses" className="rounded-r overflow-hidden">
                                {({ checked }) => (
                                    <span className={checked ? 'bg-blue text-center text-white text-sm h-11 flex justify-center items-center cursor-pointer' : ' bg-white text-center text-[#545a5d] text-sm h-11 flex justify-center items-center cursor-pointer'}>12 doses</span>
                                )}
                            </RadioGroup.Option>
                        </div>
                    </RadioGroup>
                    <div className='bg-white rounded p-4 sm:p-8 text-center mb-8'>
                        <p className='font-semibold text-lg text-blue'>YOUR PRICE</p>
                        <div className='mb-9 mt-6 relative after:bg-[url("/images/shadow.png")] z-0 after:bg-contain after:bg-no-repeat after:bg-center after:absolute after:w-[336px] after:h-[87px] after:-bottom-9 after:left-1/2 after:-translate-x-1/2 after:z-[-1]'>
                            <Image src="/images/ordered-product.png" className='mx-auto' alt="Product" width="173" height="308" />
                        </div>
                        <h1 className='font-semibold text-blue text-sm max-w-xs mx-auto'>You chose Viagra at “Lorem Ipsum” level X
                            doses a month</h1>
                        <p className='text-sm text-text mt-5 sm:mt-9 opacity-60'>A physician will determine if this dosage is right for
                            you, or recommended a more appropriate dosage.</p>
                    </div>
                    <div className='flex gap-3 sm:gap-8'>
                        <Link href="#" className='bg-orange rounded-md text-white flex items-center w-24 sm:w-[155px] justify-center h-11 sm:h-[58px] p-4 text-xs sm:text-lg font-medium'>
                            <ChevronLeftIcon className='w-6 h-6' />
                            <span>Back</span>
                        </Link>
                        <Link href="#" className='bg-blue rounded-md text-white flex items-center grow justify-center h-11 sm:h-[58px] p-4 text-xs sm:text-lg font-medium'>
                            <span>Proceed to Checkout</span>
                            <ChevronRightIcon className='w-6 h-6' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart