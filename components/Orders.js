import Image from 'next/image'
import React from 'react'

const Orders = () => {
    const people = [
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
        // More people...
    ]
    return (
        <div className='bg-white py-11 md:pt-12 md:pb-52'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                <div className='border border-gray text-center pt-6 pb-10 px-5'>
                    <h3 className='text-heading text-2xl font-bold'>Order</h3>

                    <div className="flex flex-col px-4 mt-11 sm:px-0">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="py-3 pr-5 pl-0 text-left text-[13px] font-normal text-blue">
                                                    Transaction Number
                                                </th>
                                                <th scope="col" className="pr-5 pl-0 py-3 text-left text-[13px] font-normal text-blue">
                                                    Product Name & qty
                                                </th>
                                                <th scope="col" className="pr-5 pl-0 py-3 text-left text-[13px] font-normal text-blue">
                                                    CC Type
                                                </th>
                                                <th scope="col" className="pr-5 pl-0 py-3 text-left text-[13px] font-normal text-blue">
                                                    Amount
                                                </th>
                                                <th scope="col" className="pr-5 pl-0 py-3 text-left text-[13px] font-normal text-blue">
                                                    Status
                                                </th>
                                                <th scope="col" className="pr-5 pl-0 py-3 text-left text-[13px] font-normal text-blue">
                                                    Shipping
                                                </th>
                                                <th scope="col" className="pr-5 pl-0 py-3 text-left text-[13px] font-normal text-blue">
                                                    Tracking Number
                                                </th>
                                                <th scope="col" className="pr-5 pl-0 py-3 text-left text-[13px] font-normal text-blue">
                                                    Created At
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray border-gray bg-white">
                                            <tr>
                                                <td className='whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left'>
                                                    01234567891
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    <strong>Sildenafil 60 mg,</strong> <br />
                                                    12 days supply <br />
                                                    x1
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    master

                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    $00.00
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    Confirmed
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    out_for_delivery
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    12345678901234567890123456
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    2022-00-00 00:00:00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left'>
                                                    01234567891
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    <strong>Sildenafil 60 mg,</strong> <br />
                                                    12 days supply <br />
                                                    x1
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    master

                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    $00.00
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    Confirmed
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    out_for_delivery
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    12345678901234567890123456
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    2022-00-00 00:00:00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left'>
                                                    01234567891
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    <strong>Sildenafil 60 mg,</strong> <br />
                                                    12 days supply <br />
                                                    x1
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    master

                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    $00.00
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    Confirmed
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    out_for_delivery
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    12345678901234567890123456
                                                </td>
                                                <td className="whitespace-nowrap py-6 pl-0 pr-5 text-[13px] text-text text-left">
                                                    2022-00-00 00:00:00
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders