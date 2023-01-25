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

const Tadalafil = () => {

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
            label: "Is Tadalafil right for me?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "How fast does Tadalafil work?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "Is Online Tadalafil safe?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "Do I need a prescription to purchase Tadalafil?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "What is the ideal alternative to Tadalafil?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        }
    ]

    return (
        <>
            {/* Banner */}
            <Banner
                title="Affordable All-Day 
                Performance Consistent, 
                Reliable, and Ready                
                "
                product="Tadalafil "
                reviewsCount="1120"
                bottle={cialisBottle} />

            <GoodList data={goodList} />

            <ProductCalculate title="Order Tadalafil 100% Online" />

            <BestValue />

            <Testimonials />

            <ClinicalProven title="Tadalafil is Clinically Proven" paragraph="As the world’s first FDA-approved E.D. medication, Viagra has established itself as the most reliable brand to treat E.D." />

            <PracticalTreatment />

            <Faq title="TADALAFIL FAQ" data={FAQs}/>
        </>
    )
}

export default Tadalafil