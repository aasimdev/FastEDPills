import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { isMobile } from 'react-device-detect';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Image from 'next/image';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform lg:hidden`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}


const Footer = () => {
    const [open, setOpen] = useState();

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <>
            <div className='bg-blue pt-7 pb-5'>
                <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                        <div>
                            <Accordion open={open === 1} icon={<Icon id={1} open={open} className="lg:hidden" />} key={1} className="p-0 sm:hidden">
                                <AccordionHeader onClick={() => handleOpen(1)} className="font-medium sm:font-semibold text-[13px] sm:text-lg text-white pt-0 pb-3.5 px-0 text-left border-b border-white">
                                    Popular Treatments
                                </AccordionHeader>
                                <AccordionBody className="pt-3.5 px-0">
                                    <div>
                                        <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                        <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                        <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                    </div>
                                </AccordionBody>
                            </Accordion>
                            <div className='hidden sm:block'>
                                <h6 className='font-medium sm:font-semibold text-[13px] sm:text-lg text-white pt-0 pb-3.5 px-0 text-left border-b border-white'>Popular Treatments</h6>
                                <div className='pt-3.5'>
                                    <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                    <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                    <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                </div>
                            </div>

                        </div>
                        <div>
                            <Accordion open={open === 2} icon={<Icon id={2} open={open} className="lg:hidden" />} key={2} className="p-0 sm:hidden">
                                <AccordionHeader onClick={() => handleOpen(2)} className="font-medium sm:font-semibold text-[13px] sm:text-lg text-white pt-0 pb-3.5 px-0 text-left border-b border-white">
                                    Useful Links
                                </AccordionHeader>
                                <AccordionBody className="pt-3.5 px-0">
                                    <div>
                                        <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                        <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                        <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                        <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                        <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                    </div>
                                </AccordionBody>
                            </Accordion>
                            <div className='hidden sm:block'>
                                <h6 className='font-medium sm:font-semibold text-[13px] sm:text-lg text-white pt-0 pb-3.5 px-0 text-left border-b border-white'> Useful Links</h6>
                                <div className='pt-3.5'>
                                    <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                    <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                    <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                </div>
                            </div>


                        </div>
                        <div>
                            <Accordion open={open === 3} icon={<Icon id={3} open={open} className="lg:hidden" />} key={3} className="p-0 sm:hidden">
                                <AccordionHeader onClick={() => handleOpen(3)} className="font-medium sm:font-semibold text-[13px] sm:text-lg text-white pt-0 pb-3.5 px-0 text-left border-b border-white">
                                    Contact Us
                                </AccordionHeader>
                                <AccordionBody className="pt-3.5 px-0">
                                    <div>
                                        <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                        <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                        <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                    </div>
                                </AccordionBody>
                            </Accordion>
                            <div className='hidden sm:block'>
                                <h6 className='font-medium sm:font-semibold text-[13px] sm:text-lg text-white pt-0 pb-3.5 px-0 text-left border-b border-white'>     Contact Us</h6>
                                <div className='pt-3.5'>
                                    <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                    <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                    <Link href="javascript:void(0)" className='text-white text-sm block leading-6'>Lorem Ipsum dolor</Link>
                                </div>
                            </div>

                        </div>
                        {/* <div>
                            <Image src="/images/certified.png" className='sm:mx-auto md:ml-auto' alt="Certified" width="140" height="120" />
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='bg-darkblue pt-8 lg:pt-7 pb-6 lg:pb-2.5'>
                <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div className='row-start-2 lg:row-start-1'>
                            <div className='flex gap-[1px] flex-wrap md:flex-nowrap md:gap-3 justify-center lg:justify-start'>
                                <Link href="javascript:void(0)" className='text-white text-[13px] sm:text-sm relative bg-[#4d8694] md:bg-transparent text-center w-[calc(50%_-_1px)] md:w-[unset] py-3 px-1 md:p-0 md:text-left md:after:w-[1px] md:after:h-4 md:after:bg-white md:after:absolute md:after:top-2/4 md:after:-translate-y-1/2 md:after:-right-1.5'>Terms and Conditions</Link>
                                <Link href="javascript:void(0)" className='text-white text-[13px] sm:text-sm relative bg-[#4d8694] md:bg-transparent text-center w-[calc(50%_-_1px)] md:w-[unset] py-3 px-1 md:p-0 md:text-left md:after:w-[1px] md:after:h-4 md:after:bg-white md:after:absolute md:after:top-2/4 md:after:-translate-y-1/2 md:after:-right-1.5'>Privacy Policy</Link>
                                <Link href="javascript:void(0)" className='text-white text-[13px] sm:text-sm relative bg-[#4d8694] md:bg-transparent text-center w-[calc(50%_-_1px)] md:w-[unset] py-3 px-1 md:p-0 md:text-left md:after:w-[1px] md:after:h-4 md:after:bg-white md:after:absolute md:after:top-2/4 md:after:-translate-y-1/2 md:after:-right-1.5'>Regulation</Link>
                                <Link href="javascript:void(0)" className='text-white text-[13px] sm:text-sm relative bg-[#4d8694] md:bg-transparent text-center w-[calc(50%_-_1px)] md:w-[unset] py-3 px-1 md:p-0 md:text-left'>Contact Us</Link>
                            </div>
                            <div className='flex items-center sm:justify-center lg:justify-start gap-2 mt-7 md:my-2'>
                                <Image src="/images/dmca.png" className='hidden lg:block' alt="dmca" width="121" height="24" />
                                <p className='text-xs text-white text-left sm:text-center lg:text-left'>© GetEDPills Services Inc. 2022</p>
                            </div>
                            <p className='text-xs text-white opacity-60 hidden lg:block'>1234 Lorem Ipsum Dolor ABC 23, Address Here, DE, 12345 | DUNS Number: 12-345-6789</p>
                        </div>
                        <div className='mb-3.5 lg:mb-0'>
                            <div className='flex items-center justify-end flex-col lg:flex-row gap-4 lg:gap-6'>
                                <p className='text-xs text-[#f8f8f8] lg:hidden'>Secure Paymenet options</p>
                                <Image src="/images/payments.png" alt="payment" width="159" height="27" />
                                <Image src="/images/norton-secured.png" className='hidden lg:block' alt="payment" width="142" height="77" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer