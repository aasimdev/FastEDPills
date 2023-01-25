import React from 'react'
import Banner from '../Banner'

// Images
import cialisBottle from "@/public/images/cialis.png"
import GoodList from '../GoodList'
import ProductCalculate from '../ProductCalculate'
import BestValue from '../BestValue'
import Testimonials from '../Testimonials'
import ClinicalProven from '../ClinicalProven'
import PracticalTreatment from '../PracticalTreatment'
import Faq from '@/components/common/Faq'
import GotQuestions from '../GotQuestions'

const Cialis = () => {
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
            label: "Is Cialis right for me?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "How fast does Cialis work?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "Is Online Cialis safe?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "Do I need a prescription to purchase Cialis?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "What is the ideal alternative to Cialis?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        }
    ]
    return (
        <>
            {/* Banner */}
            <Banner
                title="All-Day Confidence
                Consistent, Reliable, 
                and Ready
                "
                product="Cialis"
                reviewsCount="1120"
                bottle={cialisBottle} />

            <GoodList data={goodList} />

            <ProductCalculate title="Order Cialis 100% Online"  medicationLabel1="Cialis"
                medicationValue1="cialis"
                medicationLabel2="Generic Cialis"
                medicationValue2="generic-cialis" />

            <BestValue />

            <Testimonials />

            <ClinicalProven title="Cialis is Clinically Proven" paragraph="As the world’s first FDA-approved E.D. medication, Viagra has established itself as the most reliable brand to treat E.D." />

            <PracticalTreatment />

            <Faq title="Cialis FAQ" data={FAQs} />

            <GotQuestions />
        </>
    )
}

export default Cialis