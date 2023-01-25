import Image from 'next/image'
import React from 'react'

const SubmittedFiles = () => {
    return (
        <div className="border border-gray py-6 px-4">
            <div className="sm:flex sm:items-center">
                <h2 className='text-lg font-semibold text-text'>Submitted Files</h2>
            </div>
            <div className="mt-6 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 px-4 sm:px-0">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                        <th scope="col" className="pb-3 pl-4 pr-3 text-left text-sm font-medium text-blue">
                                            Image
                                        </th>
                                        <th scope="col" className="pb-3 pl-4 pr-3 text-left text-sm font-medium text-blue">
                                            Name
                                        </th>
                                        <th scope="col" className="pb-3 pl-4 pr-3 text-sm font-medium text-blue text-right">
                                            Created at
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray border-gray bg-white">
                                    <tr>
                                        <td className="py-2 pl-0 pr-4 text-xs font-light text-text align-top">
                                            <Image src="/images/submitted-img.png" width="98" height="76" alt="dummy" />
                                        </td>
                                        <td className="px-4 py-2 text-xs font-light text-text align-top">JohnDoe_Drivers
                                            License</td>
                                        <td className="px-4 py-2 text-right text-xs font-light text-text align-top">2022-00-00
                                            00:00:00</td>
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

export default SubmittedFiles