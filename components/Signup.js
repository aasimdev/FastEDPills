import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Signup = () => {
    return (
        <div className="bg-signup bg-center bg-no-repeat bg-cover">
            <div className='px-4 sm:px-0 pt-14 pb-48 mx-auto max-w-[530px]'>
                <h1 className='theme-heading text-center'>Sign up for a new account</h1>
                <p className='text-center text-base sm:text-xl mt-5'>Please fill this form to create an account</p>
                <div className='bg-white pt-8 px-5 sm:px-12 pb-24 sm:pb-12 rounded mt-8 sm:mt-10'>
                    <div className='w-[90px] h-[90px] rounded-full flex items-center justify-center mb-11 sm:mb-12 mx-auto bg-gray300'>
                        <Image src="/images/add-user.png" alt="add user" width="47" height="52" />
                    </div>
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
                                    className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm sm:text-lg font-medium text-heading">
                                Password
                            </label>
                            <div className="mt-2 sm:mt-3">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder='•••••••••••••'
                                    className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                />
                            </div>
                        </div>



                        <div className='text-center'>
                            <button
                                type="submit"
                                className="mt-4 sm:mt-2 theme-btn"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                </div>

                <div className="flex flex-col justify-center text-center mt-6 gap-2.5">
                    <Link href="#" className='text-blue text-base underline'>
                        Forgot your password?
                    </Link>

                    <div className="text-sm">
                        <p className='text-base text-[#494949]'>Not a customer? <Link href="#" className='text-blue text-base underline'>Get Started</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup