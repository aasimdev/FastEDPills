import { PencilIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
    const statusList = [
        {
            label: "Order Status:",
            value: "Confirmed"
        },
        {
            label: "ID Verification:",
            value: "Verification Sent"
        },
        {
            label: "Medical Status:	",
            value: "Completed"
        },
        {
            label: "Created:",
            value: "00-00-2022 00:00:00"
        },
        {
            label: "Subscription Status:",
            value: "Active"
        },
        {
            label: "Delivery:",
            value: "Every 00 days"
        },
        {
            label: "Auto Renewal Date:",
            value: "00-00-2022"
        },
    ]
    return (
        <div className='bg-white py-11 mdpt-12 md:pb-52'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                    <div className='border border-gray pt-5 px-3 pb-5'>
                        <h3 className='text-text text-base font-semibold ml-1'>Personal Information</h3>
                        <h1 className='text-blue text-3xl md:text-[40px] font-bold ml-1'>John Doe</h1>
                        <ul className='mt-6'>
                            <li className='flex justify-between items-center border-b border-gray500 pb-2 pt-2 px-3 last-of-type:border-0'>
                                <p className='font-medium text-base text-text'>Email:</p>
                                <span className='text-base text-left w-48'>emailadd@gmail.com</span>
                            </li>
                            <li className='flex justify-between items-center border-b border-gray500 pb-2 pt-2 px-3 last-of-type:border-0'>
                                <p className='font-medium text-base text-text'>Phone Number:</p>
                                <span className='text-base text-left w-48'>(123)456-7890</span>
                            </li>
                            <li className='flex justify-between items-center border-b border-gray500 pb-2 pt-2 px-3 last-of-type:border-0'>
                                <p className='font-medium text-base text-text'>DOB:</p>

                                <span className='text-base text-left w-48'>02 34 5678</span>
                            </li>
                            <li className='flex justify-between items-center border-b border-gray500 pb-2 pt-2 px-3 last-of-type:border-0'>
                                <p className='font-medium text-base text-text'>Password:</p>
                                <span className='text-base text-left w-48'>*********</span>
                            </li>

                        </ul>
                    </div>
                    <div className='space-y-8'>
                        <div className='border border-gray pt-5 px-4 pb-7 relative'>
                            <button type='button' className='bg-graylighter uppercase text-text text-sm font-medium flex items-center justify-center gap-2 rounded-md w-28 h-10 absolute right-4 top-3'>
                                <PencilIcon className='w-5 h-5' />
                                <span>Edit</span>
                            </button>
                            <p className='uppercase text-[#adadad]'>SHIPPING INFO</p>
                            <h3 className='text-lg font-semibold text-text mt-2 mb-6'>John Doe</h3>

                            <p>(123)456-7890</p>
                            <p>123 Insert Address Here</p>
                            <p>Lorem, NY, 12345</p>
                        </div>
                        <div className='border border-gray pt-5 px-4 pb-7 relative'>
                            <button type='button' className='bg-graylighter uppercase text-text text-sm font-medium flex items-center justify-center gap-2 rounded-md w-28 h-10 absolute right-4 top-3'>
                                <PencilIcon className='w-5 h-5' />
                                <span>Edit</span>
                            </button>
                            <p className='uppercase text-[#adadad]'>BILLING INFO</p>
                            <h3 className='text-lg font-semibold text-text mt-2 mb-6'>John Doe</h3>

                            <p>123 Insert Address Here</p>
                            <p>Lorem, NY, 12345</p>
                        </div>
                        <div className='border border-gray pt-5 px-3 pb-14 relative'>
                            <button type='button' className='bg-graylighter uppercase text-text text-sm font-medium flex items-center justify-center gap-2 rounded-md w-28 h-10 absolute right-4 top-3'>
                                <PencilIcon className='w-5 h-5' />
                                <span>Edit</span>
                            </button>
                            <p className='uppercase text-[#adadad]'>PAYMENT INFO</p>
                            <div className='mt-5'>
                                <Image src="/images/payment-profile.png" width="302" height="27" alt="payment" />
                            </div>
                            <ul className='mt-6'>
                                <li className='flex justify-between items-center border-b border-gray500 pb-2 pt-2 px-3 '>
                                    <p className='font-medium text-base text-text'>CC# :</p>
                                    <span className='text-base text-left w-48'>1234********7890</span>
                                </li>
                                <li className='flex justify-between items-center border-b border-gray500 pb-2 pt-2 px-3 '>
                                    <p className='font-medium text-base text-text'>Exp. Date:</p>
                                    <span className='text-base text-left w-48'>01/28</span>
                                </li>
                                <li className='flex justify-between items-center border-b border-gray500 pb-2 pt-2 px-3 '>
                                    <p className='font-medium text-base text-text'>CVC:</p>

                                    <span className='text-base text-left w-48'>****</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile