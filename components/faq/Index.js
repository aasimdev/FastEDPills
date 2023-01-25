import React from 'react'
import Faq from '../common/Faq'

const FAQ = () => {
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
            label: "Are online E.D. medications safe?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "How do E.D. Treatments function?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "Are E.D. medications online different from what I can buy from my local pharmacy?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "Is my information secure?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "Can I get a prescription from GetEDPills?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "What should I do if I experience side effects?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        },
        {
            label: "Do you offer other types of medications aside from E.D. treatments?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus purus nec commodo tincidunt. In ipsum nisi, eleifend vitae dolor suscipit, hendrerit dapibus purus. Vestibulum egestas magna nec turpis euismod, pellentesque posuere nunc ultricies. Etiam euismod odio quis turpis dignissim aliquam"
        }
    ]
    return (
        <div className="mx-auto md:px-12 xl:px-0 xl:max-w-screen-xl">
            <div className='bg-white px-4 md:px-8 pb-8 border border-gray md:mb-16'>
                {/* <h1 className='theme-heading text-center'>FAQs</h1> */}
                <Faq title="FAQs" data={FAQs} />
            </div>
        </div>
    )
}

export default FAQ