import { CheckCircleIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = ({ title, product, reviewsCount, bottle, goodList }) => {
    return (
        <div className='bg-banner bg-center bg-no-repeat bg-cover'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                <div className='grid grid-cols-12 gap-8 px-0 md:px-14 py-6 items-center'>
                    <div className='col-span-12 lg:col-span-8 text-center lg:text-left'>
                        <div className='flex flex-col-reverse lg:block'>
                            <h1 className='text-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>{title}</h1>
                            <p className='mt-6 mb-8 text-heading text-xl'>
                                <span className='block lg:inline-block mb-1.5 lg:mb-0'>{product}</span>
                                <span className='inline-flex mx-3'>
                                    <StarIcon className='w-5 h-5 text-[#fed144]' />
                                    <StarIcon className='w-5 h-5 text-[#fed144]' />
                                    <StarIcon className='w-5 h-5 text-[#fed144]' />
                                    <StarIcon className='w-5 h-5 text-[#fed144]' />
                                    <StarIcon className='w-5 h-5 text-[#fed144]' />
                                </span>
                                {reviewsCount} reviews
                            </p>
                        </div>
                        <div className='flex flex-wrap flex-col gap-5 my-8 lg:hidden'>
                            {goodList?.map((item, index) => (
                                <div className='flex gap-2.5 items-center' key={index}>
                                    <CheckCircleIcon className='w-6 h-6 text-blue' />
                                    <p className='text-heading text-base font-medium'>{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <Link href='#' className='theme-btn'>
                            Get Started for free <ChevronRightIcon />
                        </Link>
                    </div>
                    <div className='col-span-12 lg:col-span-4 text-center'>
                        <Image src={bottle} alt={product} className='mx-auto' width="183" height="312" />
                        <div className='mt-2'>
                            <Image src="/images/pda-approved.png" alt="bottle" className='mx-auto' width="127" height="50" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner