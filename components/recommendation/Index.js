import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Recommendation = () => {
    return (
        <div className='bg-white pt-12 pb-28 md:pb-52'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                <div>
                    <h1 className='text-center text-heading text-xl sm:text-2xl font-bold mb-4 sm:mb-8'>Recommended Pill for ED Treatment</h1>
                    <p className='text-sm sm:text-lg mb-4 sm:mb-8'>A starting dosage of 60mg is the most common for men who are new to ED medication.</p>
                    <p className='text-sm sm:text-lg mb-4 sm:mb-8'>Based on the information you provided, a physician will determine if this dosage is right for you, or recommend a more
                        appropriate dosage.</p>

                    <div className='grid grid-cols-12 gap-8 sm:border border-[#a2a2a2] sm:p-4'>
                        <div className='col-span-12 lg:col-span-5'>
                            <div className='bg-[#f5f5f5] h-full px-3 pt-9 pb-6 relative'>
                                <span className='bg-blue text-white text-base sm:text-lg font-medium py-1 px-3'>Recommended for you</span>
                                <h2 className='text-[#005184] text-3xl sm:text-4xl font-light mt-8'>Generic <span className='block font-bold'>Viagra&#174;</span></h2>
                                <div className='h-64 flex justify-center items-center'>
                                    <Image src="/images/pills.png" className='mx-auto' alt="pills" width="110" height="100" />
                                </div>
                                <p className='absolute left-3 bottom-6 text-black text-lg'>(Sildenafil)</p>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-7'>
                            <div className='pt-4 lg:pt-9'>
                                <h3 className='text-heading font-semibold text-lg'>Erectile Enhancement © (by hour)</h3>
                                <div className='sm:pl-24 mt-7'>
                                    <Image src="/images/graph.png" alt="graph" width="424" height="189" />
                                </div>


                                <ul className='py-5 space-y-2'>
                                    <li className='flex items-center gap-2'>
                                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                                        <span className='text-heading text-sm sm:text-base'>  Sildenafil is the same active ingredient as Viagra®</span>
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                                        <span className='text-heading text-sm sm:text-base'> The most popular ED treatment for men</span>
                                    </li>
                                </ul>
                                <div className='mt-4 sm:mt-7 text-center sm:text-right'>
                                    <Link href="javascript:void(0)" className='theme-btn blue-btn !min-w-[277px]'>Continue</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10 text-center'>
                        <p className='text-sm sm:text-base text-[#494949] font-medium'>Prefer a different medication? <Link href="javascript:void(0)" className='text-blue underline underline-offset-4'>See all options</Link></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Recommendation