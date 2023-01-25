import React from 'react'

const TreatmentOption = () => {
    return (
        <div className='mt-8 md:mt-16'>
            <h3 className='mb-5 text-xl'>Erectile Dysfunction Treatment Options </h3>
            <div className="flex flex-col px-4 sm:px-0">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr className='divide-x divide-gray border-gray'>
                                        <th></th>
                                        <th scope="col" className="py-3.5 px-5 text-left text-sm font-medium text-text">
                                            Generic <br />
                                            Ingredient
                                        </th>
                                        <th scope="col" className="px-5 py-3.5 text-left text-sm font-medium text-text">
                                            Dosage
                                        </th>
                                        <th scope="col" className="px-5 py-3.5 text-left text-sm font-medium text-text">
                                            Effectivity
                                        </th>
                                        <th scope="col" className="px-5 py-3.5 text-left text-sm font-medium text-text">
                                            Duration
                                        </th>
                                        <th scope="col" className="px-5 py-3.5 text-left text-sm font-medium text-text">
                                            Drug Interval
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray border-gray bg-white">
                                    <tr className='divide-x divide-gray border-gray'>
                                        <td className='whitespace-nowrap py-6 px-5 text-[13px] bg-blue700 text-white font-medium'>
                                            Viagra/Sildenafil <br />
                                            Citrate
                                        </td>
                                        <td className="whitespace-nowrap py-6 px-5 text-[13px] text-text">
                                            Sildenafil Citrate
                                        </td>
                                        <td className="whitespace-nowrap py-6 px-5 text-[13px] text-text">
                                            25, 50, 100 mg

                                        </td>
                                        <td className="whitespace-nowrap py-6 px-5 text-[13px] text-text">
                                            Approximately 30 - 60 minutes
                                        </td>
                                        <td className="whitespace-nowrap py-6 px-5 text-[13px] text-text">
                                            4 hours
                                        </td>
                                        <td className="whitespace-nowrap py-6 px-5 text-[13px] text-text">
                                            As needed
                                        </td>
                                    </tr>
                                    <tr className='divide-x divide-gray border-gray'>
                                        <td className='whitespace-nowrap py-6 px-5 text-[13px] bg-blue700 text-white font-medium'>
                                            Cialis / Tadalafil
                                        </td>
                                        <td className="whitespace-nowrap py-6 px-5 text-[13px] text-text">
                                            Tadalafil
                                        </td>
                                        <td className="whitespace-nowrap py-6 px-5 text-[13px] text-text">
                                            
                                        </td>
                                        <td className="whitespace-nowrap py-6 px-5 text-[13px] text-text">
                                            Approximately 30 - 120 minutes
                                        </td>
                                        <td className="whitespace-nowrap py-6 px-5 text-[13px] text-text">
                                            36 hours
                                        </td>
                                        <td className="whitespace-nowrap py-6 px-5 text-[13px] text-text">
                                            As needed
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TreatmentOption