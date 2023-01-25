import Image from 'next/image'
import React from 'react'

const Membership = () => {
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
        <div className='bg-white pt-12 pb-28 md:pb-52'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                <div className='grid grid-cols:1 lg:grid-cols-2 gap-8 items-start'>
                    <div className='border border-gray text-center pt-6 pb-10 px-5'>
                        <h3 className='text-heading text-2xl font-bold'>Treatment</h3>
                        <div className=' mt-9 md:mt-12'>
                            <Image src="/images/bottle-viagra.png" className='mx-auto' alt="treatment" width="336" height="343" />
                        </div>
                        <p className='text-base md:text-lg'>60mg Sildenafil - 12 Doses - 3x per week</p>
                        <a href="#" className='theme-btn blue-btn mt-6 md:mt-7 mfulwidth'>Switch Plan</a>
                    </div>
                    <div className='border border-gray text-center pt-6 pb-16 px-3'>
                        <h3 className='text-heading text-2xl font-bold'>Status</h3>
                        <div className='bg-[#01ac49] text-lg text-white inline-block rounded w-36 py-2 px-4 mt-8'>Active</div>

                        <ul className='mt-16'>
                            {statusList.map((item, index) => (
                                <li className='flex justify-between items-center border-b border-gray500 pb-2 pt-2 px-6 last-of-type:border-0' key={index}>
                                    <p className='font-medium text-sm md:text-lg text-heading text-left'>{item.label}</p>
                                    <span className='text-sm md:text-lg text-left w-36 md:w-48'>{item.value}</span>
                                </li>
                            ))}

                        </ul>

                        <a href="#" className='theme-btn mt-24 mfulwidth'>Stop Subscription</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Membership