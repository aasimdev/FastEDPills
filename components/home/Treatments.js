import React from 'react'
import TreatmentBox from './TreatmentBox'

// Bottles
import bottle1 from '@/public/images/treatment1.png';
import bottle2 from '@/public/images/treatment2.png';
import bottle3 from '@/public/images/treatment3.png';
import bottle4 from '@/public/images/treatment4.png';

const Treatments = () => {

    // Data Array
    const treatmentCards = [
        {
            title: "Viagra",
            description: 'The first FDA-approved treatment for E.D.,and the top-selling E.D. medication for the last 20 years.',
            bottle: bottle1,
            linkTitle: "View Viagra Treatment",
            startPrice: "0.00",
            link: "/viagra"
        },
        {
            title: "Generic Sildenafil (Generic Viagra)",
            description: 'Sildenafil Citrate is the active ingredient in Viagra, now available as an affordable generic mediation with chemically equivalent formulation. ',
            bottle: bottle2,
            linkTitle: "View Sildenafil Treatment",
            startPrice: "0.00",
            link: "/sildenafil"
        },
        {
            title: "Cialis",
            description: 'The practical, long-lasting E.D. treatment that lasts up to 36 hours to effectively prevent E.D. ',
            bottle: bottle3,
            linkTitle: "View Cialis Treatment",
            startPrice: "0.00",
            link: "/cialis"
        },
        {
            title: "Tadalafil (Generic Cialis)",
            description: 'Tadalafil is the generic name of Cialis, featuring chemically equivalent formulation that provides identical long-term E.D. protection.',
            bottle: bottle4,
            linkTitle: "View Tadalafil Treatment",
            startPrice: "0.00",
            link: "/tadalafil"
        }
    ]

    return (
        <div className='pt-9 md:pt-12'>
            <h2 className='mb-5 text-xl'>Treatment Options</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 px-4 md:px-0'>
                {treatmentCards.map((item, index) => {
                    return <TreatmentBox
                        title={item.title}
                        description={item.description}
                        bottle={item.bottle}
                        linkTitle={item.linkTitle}
                        startPrice={item.startPrice}
                        link={item.link}
                        id={index} />

                })}
            </div>
        </div>
    )
}

export default Treatments