import React from 'react'
import AboutTreatment from './AboutTreatment'
import TreatmentTable from './TreatmentTable'
import Treatments from './Treatments'
import TreatmentQNA from './TreatmentQNA'
import { useRouter } from 'next/router'

const Homepage = () => {
    const router = useRouter();
    return (
        <div className='mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl'>
            <div className={`sm:bg-white pt-7 sm:py-8 sm:px-4 sm:border border-gray mb-14 ${router.asPath !== "/about-us" ? "md:mt-12" : ""}`}>
                {/* About Treatments */}
                <AboutTreatment />

                {/* Treatments */}
                <Treatments />

                {/* Treatments options */}
                <TreatmentTable />

                {/* Treatment QNA */}
                <TreatmentQNA />
            </div>
        </div>
    )
}

export default Homepage