import React from 'react'

const SubmittedAnswers = () => {

    const data = [
        {
            questions: "Please write down additional notes.",
            answer: "Nothing Selected / Empty Answer"
        },
        {
            questions: "Select any of the following medical issues that apply",
            answer: "None Apply"
        },
        {
            questions: "List medication allergies",
            answer: "Nothing Selected / Empty Answer"
        },
        {
            questions: "Please list all other medical problems",
            answer: ""
        },
        {
            questions: "Do you have any heart/cardiac conditions? Arrhythmias?",
            answer: "NO"
        },
        {
            questions: "Please identify all ED medications or drugs you take?",
            answer: "Nothing Selected / Empty Answer"
        },
        {
            questions: "Please Explain, your heart/cardiac conditions",
            answer: "Nothing Selected / Empty Answer"
        },
        {
            questions: "List all prescription medications which you take. (Disclaimer: It is very important that you list the name of each medication so your physician can make sure there will not be any drug interactions).",
            answer: ""
        },
        {
            questions: "Have you ever had a heart attack? Cardiac surgery?",
            answer: "NO"
        },
        {
            questions: "Are you seeking treatment for improved sexual activity?",
            answer: "YES"
        },
        {
            questions: "Is there anything else you would like to tell the doctor?",
            answer: "NO"
        },
        {
            questions: "Are you currently using any of the following recreational drugs?",
            answer: "None Apply"
        },

        {
            questions: "Do you use nitrates or any of the following medications listed below?",
            answer: "None Apply"
        },
        {
            questions: "What is your blood pressure on an average day (even when taking medication)?",
            answer: "None Apply"
        },
        {
            questions: "Over the past 6 months, how do you rate your confidence that  you could keep an erection?",
            answer: ""
        },
        {
            questions: "Are you currently taking any medications for erectile dysfunction or pulmonary hypertension? (Example: tadalafil, Cialis, sildenafil, Viagra, Revatio, Levitra)",
            answer: "No"
        },
        {
            questions: "Over the past 6 months, when you attempted sexual intercourse, how often was it satisfactory for you",
            answer: "None Apply"
        },
        {
            questions: "Over the past 6 months, during sexual intercourse, how difficult was it to maintain your erection to completion of intercourse?",
            answer: "None Apply"
        },
        {
            questions: "Have you had your vitals tested by a medical practitioner in the past 3 years? This includes weight, blood pressure, and heart rate.",
            answer: ""
        },
        {
            questions: "Over the past 6 months, when you had erections with sexual timulation, how often were your erections hard enough for penetration (entering your partner)?",
            answer: ""
        },
    ]

    return (

        <div className="border border-gray pt-6 px-4 pb-12 col-span-12 lg:col-span-7">
            <div className="sm:flex sm:items-center">
                <h2 className='text-lg font-semibold text-text'>Submitted Answers</h2>
            </div>
            <div className="mt-6 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-[#e5f2f5] border-y border-[#dce8eb]">
                                    <tr>
                                        <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-medium text-text">
                                            Questions
                                        </th>
                                        <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-medium text-text">
                                            Answer
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {data.map((data, dataIdx) => (
                                        <tr key={dataIdx} className={dataIdx % 2 === 0 ? undefined : 'bg-[#f7f7f7] border-y border-[#ededed]'}>
                                            <td className="w-64 py-4 pl-4 pr-3 text-[13px] font-light text-text align-top">
                                                {data.questions}
                                            </td>
                                            <td className="w-28 pl-4 pr-3 py-4 text-[13px] font-light text-text align-top">{data.answer}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmittedAnswers