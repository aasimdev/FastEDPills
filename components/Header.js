import React, { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon, PhoneIcon, HomeIcon, UserIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from './Breadcrumb'
import { useRouter } from 'next/router'

const navigation = [
    { name: <HomeIcon className='w-6 h-6 text-white' />, href: '/', current: false, icon: true },
    { name: 'Treatments', href: '/viagra', current: true, icon: false },
    { name: 'How it works', href: '/how-it-works', current: false, icon: false },
    { name: 'FAQ', href: '/frequently-asked-questions', current: false, icon: false },
    { name: 'About us', href: '/about-us', current: false, icon: false },
    { name: 'Contact us', href: '/contact-us', current: false, icon: false },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const [userFlag, setUserFlag] = useState(false);
    const router = useRouter();
    const [existing, setExisting] = useState([]);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            var existingData = localStorage.getItem("user_obj");
            existingData = existingData ? JSON.parse(existingData) : {};
            setExisting(existingData);
            var user_token = localStorage.getItem("user_token");
            if (user_token) {
                setUserFlag(true);
            }

        }
    }, [router]);

    const logout = () => {
        localStorage.removeItem("user_obj");
        localStorage.removeItem("user_token");
        setUserFlag(false);
        router.push('/')
    }


    return (
        <>
            {/* Header */}
            <Disclosure as="header">
                {({ open }) => (
                    <>
                        {/* Top Header */}
                        <div className='bg-blue lg:bg-graypaper'>
                            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl py-3 lg:py-4">
                                <div className="relative flex lg:h-16 justify-between">
                                    <div className="relative z-10 flex items-center lg:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center text-white hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue">
                                            <span className="sr-only">Open menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>

                                    <div className="relative z-10 flex px-2 lg:px-0">
                                        <div className="flex flex-shrink-0 items-center">
                                            <Link href="/" className='text-white lg:text-[#070708] text-3xl font-bold'>
                                                Fast<span className='text-[#070708] lg:text-blue'>ED</span>Pills
                                                {/* <Image src="/images/logo.png" className='hidden lg:block' alt="logo" width="165" height="29" />
                                                <Image src="/images/white-logo.png" className='lg:hidden' alt="logo" width="165" height="29" /> */}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='flex items-center lg:grow gap-x-3 lg:gap-0'>
                                        {/* Search */}
                                        <div className="relative z-0 flex flex-1 items-center justify-end lg:px-1">
                                            <button className='lg:hidden'>
                                                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 text-white" aria-hidden="true" />
                                            </button>

                                            {/* Search Input */}
                                            <div className="w-full sm:max-w-md hidden lg:block">
                                                <label htmlFor="search" className="sr-only">
                                                    Search
                                                </label>
                                                <div className="relative">
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5">
                                                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 text-blue" aria-hidden="true" />
                                                    </div>
                                                    <input
                                                        id="search"
                                                        name="search"
                                                        className="block w-full rounded border border-transparent py-2 pl-3 pr-10 text-sm bg-graylighter border-graylight placeholder-gray-400 focus:border-graylight focus:bg-graylighter focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-graylight sm:text-sm"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Customer phone */}
                                        <div className="lg:relative lg:z-10 lg:ml-5 xl:ml-14 lg:flex lg:items-center">
                                            <a href={`tel:0123456789`} className='flex items-center gap-x-2.5'>
                                                <PhoneIcon className='text-white lg:text-blue w-6 h-6 lg:w-12 lg:h-12' aria-hidden="true" />
                                                <div className='hidden lg:block'>
                                                    <span className='font-medium text-base'>Customer services</span>
                                                    <p className='text-blue font-bold text-[26px] leading-7'>000-000-0000</p>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navbar */}
                        <div className='bg-blue hidden lg:block'>
                            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                                <div className='flex items-center justify-between'>
                                    <nav className="lg:flex" aria-label="Global">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    router.asPath === item.href ? 'font-medium text-white bg-blue700' : 'text-white hover:bg-blue700 hover:text-white', item.icon ? 'hover:bg-transparent pl-0 w-12 pr-0 justify-center' : null,
                                                    'py-[13px] px-[22px] inline-flex items-center text-base'
                                                )}
                                                aria-current={router.asPath === item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </nav>
                                    {/* <Link href="/register-an-account" className="flex items-center gap-x-2">
                                        <UserIcon className='text-white w-7 h-7' />
                                        <span className='text-white text-base'>Account</span>
                                    </Link> */}
                                    {userFlag == true ? (<div className='flex items-center gap-2'><button onClick={logout} href="#" className="flex items-center gap-x-2">
                                        <UserIcon className='text-white w-7 h-7' />
                                        <span className='text-white text-base'>Logout</span></button> {' '}
                                        <Link href="/profile" className="flex items-center gap-x-2"><span className='text-white text-base'>{existing.user_email}</span></Link>
                                    </div>) :
                                        (<Link href="/register-an-account" className="flex items-center gap-x-2">
                                            <UserIcon className='text-white w-7 h-7' />
                                            <span className='text-white text-base'>Account</span>
                                        </Link>)
                                    }
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel as="nav" className="lg:hidden bg-blue" aria-label="Global">
                            <div className="space-y-1 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            router.asPath === item.href ? 'font-medium text-white bg-blue700' : 'text-white hover:bg-blue700 hover:text-white', item.icon ? 'hover:bg-blue' : null,
                                            'block py-2 px-4 md:px-12 text-base'
                                        )}
                                        aria-current={router.asPath === item.href ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <div className="border-t border-bodybg pt-4 pb-3 px-4 md:px-12">
                                {userFlag == true ?
                                    (<a href="#" className="flex items-center gap-x-2">
                                        <UserIcon className='text-white w-7 h-7' />
                                        <span className='text-white text-base'>Logout</span>
                                    </a>)
                                    :
                                    (<a href="/register-an-account" className="flex items-center gap-x-2">
                                        <UserIcon className='text-white w-7 h-7' />
                                        <span className='text-white text-base'>Account</span>
                                    </a>)
                                }

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* Breadcrumb */}
            {router.asPath !== "/register-an-account" &&
                router.asPath !== "/profile" &&
                router.asPath !== "/orders" &&
                router.asPath !== "/membership" &&
                router.asPath !== "/cialis" &&
                router.asPath !== "/case" &&
                router.asPath !== "/viagra" &&
                router.asPath !== "/sildenafil" &&
                router.asPath !== "/tadalafil" &&
                router.asPath !== "/" &&
                router.asPath !== "/checkout" &&
                router.asPath !== "/contact-us" &&
                router.asPath !== "/recommendations" &&
                router.asPath !== "/cart" &&
                router.asPath !== "/order-form" &&
                router.asPath !== "/signin" &&
                <Breadcrumb />
            }

        </>
    )
}

export default Header