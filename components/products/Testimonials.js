import { CheckBadgeIcon, StarIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    useTransform: false,
    // centerMode: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                swipeToSlide: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                swipeToSlide: true,


            }
        }
    ]
};

const Testimonials = () => {
    return (
        <div className='bg-gray600 pt-16 pb-24'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                <h3 className='theme-heading text-center mb-7 sm:mb-12'>See what our customers have to say!
                </h3>
                <div className='sm:px-8 lg:px-14'>
                    <Slider {...settings}>
                        <div className='px-4'>
                            <div className='bg-white rounded-md pt-5 pr-3 pb-6 pl-4 shadow-box-sm relative min-h-[300px]'>
                                <div className='flex gap-0.5'>
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                </div>
                                <h5 className='text-base text-[#21293c] font-medium my-7'>Simple and fast</h5>
                                <p className='text-[#21293c]'>GetEDPills is what’s missing in healthcare.
                                    Real, sensible service that doesn’t make
                                    you jump through hoops. Very affordable
                                    too. This is the way it should be.</p>
                                <div className='flex gap-1 items-center text-blue700 text-sm absolute right-3 bottom-3'>
                                    <CheckBadgeIcon className='w-4 h-4' />
                                    <span>Verified Customer</span>
                                </div>
                            </div>
                        </div>
                        <div className='px-4'>
                            <div className='bg-white rounded-md pt-5 pr-3 pb-6 pl-4 shadow-box-sm relative min-h-[300px]'>
                                <div className='flex gap-0.5'>
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                </div>
                                <h5 className='text-base text-[#21293c] font-medium my-7'>Simple and fast</h5>
                                <p className='text-[#21293c]'>GetEDPills is what’s missing in healthcare.
                                    Real, sensible service that doesn’t make
                                    you jump through hoops. Very affordable
                                    too. This is the way it should be.</p>
                                <div className='flex gap-1 items-center text-blue700 text-sm absolute right-3 bottom-3'>
                                    <CheckBadgeIcon className='w-4 h-4' />
                                    <span>Verified Customer</span>
                                </div>
                            </div>
                        </div>
                        <div className='px-4'>
                            <div className='bg-white rounded-md pt-5 pr-3 pb-6 pl-4 shadow-box-sm relative min-h-[300px]'>
                                <div className='flex gap-0.5'>
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                </div>
                                <h5 className='text-base text-[#21293c] font-medium my-7'>Simple and fast</h5>
                                <p className='text-[#21293c]'>GetEDPills is what’s missing in healthcare.
                                    Real, sensible service that doesn’t make
                                    you jump through hoops. Very affordable
                                    too. This is the way it should be.</p>
                                <div className='flex gap-1 items-center text-blue700 text-sm absolute right-3 bottom-3'>
                                    <CheckBadgeIcon className='w-4 h-4' />
                                    <span>Verified Customer</span>
                                </div>
                            </div>
                        </div>
                        <div className='px-4'>
                            <div className='bg-white rounded-md pt-5 pr-3 pb-6 pl-4 shadow-box-sm relative min-h-[300px]'>
                                <div className='flex gap-0.5'>
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                    <StarIcon className="w-6 h-6 text-[#fed144]" />
                                </div>
                                <h5 className='text-base text-[#21293c] font-medium my-7'>Simple and fast</h5>
                                <p className='text-[#21293c]'>GetEDPills is what’s missing in healthcare.
                                    Real, sensible service that doesn’t make
                                    you jump through hoops. Very affordable
                                    too. This is the way it should be.</p>
                                <div className='flex gap-1 items-center text-blue700 text-sm absolute right-3 bottom-3'>
                                    <CheckBadgeIcon className='w-4 h-4' />
                                    <span>Verified Customer</span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Testimonials