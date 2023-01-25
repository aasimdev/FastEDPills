import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutTreatment = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='order-last lg:order-first'>
                <h1 className='text-2xl md:text-4xl text-text'>E.D. Treatments Made Easy</h1>
                <h6 className='mt-6 mb-5 text-lg md:text-xl'>Safe and Effective, FDA-Approved Medication</h6>
                <p>Erectile Dysfunction (E.D.) is the most common sexual health condition in
                    men, with an estimated prevalence of 40% of men over 40 years of age, with
                    much higher estimates in older men.  With the emergence of FDA-approved
                    medication for E.D. in the late 1990s, the number of self-reported cases of
                    E.D. has risen significantly, and now the United States has the highest
                    self-reported cases of E.D. in the world.
                </p>
                <p className='mt-5'>Treating E.D. has not evolved in the last 20 years, but the ease and
                    convenience of acquiring E.D. medication has improved exponentially, with
                    more affordable generic-branded medication now available. See how you
                    can begin to overcome E.D. through UltraPharmRx today. </p>
                <Link href="#" className='theme-btn mt-6'>Get Started <ChevronRightIcon /></Link>
            </div>
            <div className='text-center'>
                <Image src="/images/man.png" className='mx-auto' alt="man" width="539" height="359" />
            </div>
        </div>
    )
}

export default AboutTreatment