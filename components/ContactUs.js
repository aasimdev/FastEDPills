import Link from 'next/link'
import React from 'react'

const ContactUs = () => {
    return (
        <div className='bg-white pt-12 pb-28 md:pb-52'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                <div className='text-center mb-8'>
                    <h1 className='text-heading text-2xl font-bold'>Contact Us</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='bg-[#f8f8f8] shadow-box px-5 lg:px-9 py-5 lg:pt-9 lg:pb-8'>
                        <h2 className='text-xl text-heading font-semibold mb-8 leading-none'>Send A Message</h2>
                        <form className="space-y-4 sm:space-y-5" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm sm:text-lg font-medium text-heading">
                                    Email
                                </label>
                                <div className="mt-2 sm:mt-3">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder='charlene@gmail.com'
                                        required
                                        className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm sm:text-lg font-medium text-heading">
                                    Message
                                </label>
                                <div className="mt-2 sm:mt-3">
                                    <textarea className='block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base resize-none h-64'></textarea>
                                </div>
                            </div>



                            <div className='text-center'>
                                <button
                                    type="submit"
                                    className="mt-4 sm:mt-2 theme-btn blue-btn capitalize"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='lg:pl-12 mt-5 lg:mt-8'>
                        <h3 className='text-xl text-heading font-semibold mb-6 leading-none'>Give Us A Call</h3>
                        <div className='mb-6'>
                            <p>Monday - Friday: XAM - XAM (EST)</p>
                            <p>Saturday - Sunday: XAM - XPM (EST)</p>
                        </div>
                        <div className='mb-6'>
                            <h5 className='text-sm font-semibold text-blue'>Address:</h5>
                            <p>1234 Lorem Hwy Ipsum Dolor, NY 12345</p>
                        </div>
                        <div className='mb-6 flex items-center gap-1'>
                            <h5 className='text-sm font-semibold text-blue'>Customer Service:</h5>
                            <Link href="tel:0123456789" className='text-sm text-text'> 1-877-260-6968</Link>
                        </div>
                        <div className='mb-6'>
                            <h5 className='text-sm font-semibold text-blue'>Email us anytime:</h5>
                            <Link href='mailto:info@fastedpills.com' className='text-sm text-text'>info@fastedpills.com</Link>
                        </div>
                        <div>
                            <h5 className='text-sm font-semibold text-blue'>More questions or concerns:</h5>
                            <Link href="/frequently-asked-questions" className='text-sm text-text'>Visit our FAQ page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs