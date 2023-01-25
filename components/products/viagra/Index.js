import React from 'react'
import Banner from '../Banner'

// Images
import cialisBottle from "@/public/images/bottle-main.png"
import GoodList from '../GoodList'
import ProductCalculate from '../ProductCalculate'
import BestValue from '../BestValue'
import Testimonials from '../Testimonials'
import ClinicalProven from '../ClinicalProven'
import PracticalTreatment from '../PracticalTreatment'
import Faq from '@/components/common/Faq'
import GotQuestions from '../GotQuestions'

const Viagra = () => {

    const goodList = [
        {
            label: "Plans start at $xx.xx/pill"
        },
        {
            label: "No doctor’s fees, no hidden charges"
        },
        {
            label: "Pay only for your medication"
        },
        {
            label: "Free 2-day rushed shipping"
        }
    ]

    const FAQs = [
        {
            label: "What causes erectile dysfunction?",
            answer: "Erectile dysfunction can be caused by various pathophysiological factors, such as age, heart disease, diabetes, cardiovascular health problems, drug interactions or side effects, diet, and hormonal changes. E.D. can also be caused by smoking, alcohol consumption, trauma, kidney disease, and psychological factors such as depression, anxiety, and stress."
        },
        {
            label: "What qualifies as erectile dysfunction?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "Is Viagra right for me?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "How fast does Viagra work?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "Is Online Viagra safe?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "Do I need a prescription to purchase Viagra?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "What is the ideal alternative to Viagra?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        }
    ]

    return (
        <>
            {/* Banner */}
            <Banner
                title="Trusted Performance Superior Confidence"
                product="Viagra (Sildenafil Citrate)"
                reviewsCount="1120"
                bottle={cialisBottle}
                goodList={goodList} />

            <GoodList data={goodList} />

            <ProductCalculate
                title="Order Viagra 100% Online"
                medicationLabel1="Viagra by Pfizer"
                medicationValue1="viagra-by-pfizer"
                medicationLabel2="Generic Viagra"
                medicationValue2="generic-viagra" />

            <BestValue />

            <Testimonials />

            <ClinicalProven title="Viagra is Clinically Proven" paragraph="As the world’s first FDA-approved E.D. medication, Viagra has established itself as the most reliable brand to treat E.D." />

            <PracticalTreatment />

            <Faq title="VIAGRA FAQ" data={FAQs} />

            <GotQuestions />
        </>
    )
}

export default Viagra