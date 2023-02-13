import React from 'react'
import Card from '../common/Card'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

// Icons
import freeOnlineIcon from '@/public/images/free-online-health.png'
import preferredTreatmentIcon from '@/public/images/preferred-treatment.png'
import ordernDeliveryIcon from '@/public/images/order-and-delivery.png'
import calendarIcon from '@/public/images/calendar.png'
import onlineSupportIcon from '@/public/images/online-support.png'


const HowItWorks = () => {
    return (
        <>
            <div className="mx-auto md:px-12 xl:px-0 xl:max-w-screen-xl">
                <div className='bg-white pt-12 px-8 pb-8 border border-gray'>
                    <h1 className='theme-heading text-center'>How it works</h1>
                    <p className='text-base lg:text-xl uppercase text-center mt-4'>GET E.D. MEDICATION THE RIGHT WAY WITH FastEDPills</p>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 mt-10 md:mt-12 pt-1'>
                        <div className='relative'>
                            <Card
                                title="FREE ONLINE HEALTH REVIEW"
                                paragraph="Complete a quick, 5-minute health questionnaire, to be reviewed by our US-licensed physicians."
                                icon={freeOnlineIcon}
                            />
                            <div className='absolute left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-[unset] lg:top-2/4 lg:-translate-y-1/2 lg:-right-14 mt-2 lg:mt-[unset]'>
                                <ChevronRightIcon className='text-blue w-12 h-12 rotate-90 lg:rotate-0' />
                            </div>
                        </div>
                        <div className='relative'>
                            <Card
                                title="SELECT PREFERRED TREATMENT"
                                paragraph="Choose from our selection of E.D. 
                            treatments that fit your lifestyle and 
                            budget. FastEDPills offers branded Viagra 
                            and Cialis, as well as affordable generic 
                            options to lower treatment costs."
                                icon={preferredTreatmentIcon}
                            />
                            <div className='absolute left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-[unset] lg:top-2/4 lg:-translate-y-1/2 lg:-right-14 mt-2 lg:mt-[unset]'>
                                <ChevronRightIcon className='text-blue w-12 h-12 rotate-90 lg:rotate-0' />
                            </div>
                        </div>
                        <div>
                            <Card
                                title="ORDER and DELIVERY"
                                paragraph="If approved by our US-licensed physician, 
                            your selected E.D. treatment will be 
                            shipped discreetly to your address, at no 
                            additional cost. All E.D. medications are 
                            shipped directly from US-based 
                            pharmacies within 1 business day."
                                icon={ordernDeliveryIcon}
                            />
                        </div>
                    </div>
                    <div className='text-center'>
                        <Link href="#" className='theme-btn mt-9'>Get Started NOW <ChevronRightIcon /></Link>
                    </div>
                </div>

            </div>
            <div className="mx-auto md:px-12 xl:px-0 xl:max-w-screen-xl mt-8">
                <div className='bg-white pt-14 px-8 pb-12 border border-gray'>
                    <div className='max-w-3xl mx-auto'>
                        <h2 className='text-center text-heading text-2xl md:text-[30px] font-bold'>Treating E.D. in the 21st Century </h2>
                        <p className='text-center text-base lg:text-lg mt-4'>FastEDPills offers the right system to help you get the treatment you need,
                            right from the comfort and privacy of your home
                        </p>

                        <div className='grid md:grid-cols-2 mt-10 md:mt-12 gap-8'>
                            <Card
                                title="NO IN-PERSON DOCTOR APPOINTMENTS"
                                paragraph="By having a US-licensed physician 
                                evaluate your medical history and health 
                                information for free, you save time and 
                                money, without missing out on anything!"
                                icon={calendarIcon}
                            />
                            <Card
                                title="100% ONLINE"
                                paragraph="Order and select the treatment that fits 
                                your lifestyle and budget, right from the 
                                comfort of your home. No more awkward 
                                small talk with your pharmacists!"
                                icon={onlineSupportIcon}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className='text-center mb-24'>
                <Link href="/register-an-account" className='theme-btn mt-12'>Get Started <ChevronRightIcon /></Link>
            </div>
        </>
    )
}

export default HowItWorks