import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icons
import freeOnline from '@/public/images/free-consult.png'
import freeprescriptionOnline from '@/public/images/free-prescription.png'
import shippedDirect from '@/public/images/order-and-delivery.png'
import Card from '../common/Card';

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


const PracticalTreatment = () => {
    return (
        <div className='bg-gray600 pt-10 sm:pt-16 pb-20'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                <h4 className='theme-heading text-center mb-7 sm:mb-8'>Practical E.D. Treatments for the 21st Century</h4>
                <div className='practicalTeatM'>
                    <Slider {...settings} className="">
                        <div className='px-4 ptitem'>
                            <Card
                                title="Free Online Assessment"
                                paragraph="Fill out a quick questionnaire 
                        about your health and 
                        medical history
                        
                        "
                                icon={freeOnline}
                            />
                        </div>
                        <div className='px-4 ptitem'>
                            <Card
                                title="Free e-Prescriptions"
                                paragraph="US-licensed physicians issue 
                        valid e-prescriptions to customers 
                        that meet health requirements 
                        for E.D. medications
                        "
                                icon={freeprescriptionOnline}
                            />
                        </div>
                        <div className='px-4 ptitem'>
                            <Card
                                title="Shipped Direct from Pharmacy"
                                paragraph="If approved, your medication will 
                        be shipped directly and discreetly 
                        to your address, at no extra cost to you.
                        "
                                icon={shippedDirect}
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default PracticalTreatment