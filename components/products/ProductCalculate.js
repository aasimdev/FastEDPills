import { ChevronRightIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React, { useState, Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useRouter } from 'next/router'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ProductCalculate = (props) => {
    const { title, medicationLabel1, medicationValue1, medicationLabel2, medicationValue2 } = props;
    const [edMedification, setEdMedification] = useState("viagra-by-pfizer");
    const [dosage, setDosage] = useState("100");
    const [selected, setSelected] = useState("16 Tablets");

    const router = useRouter();

    const tablets = []
    for (let i = 1; i <= 150; i++) {
        tablets.push(i + " Tablets")
    }

    const data = { edMedification, dosage, selected };
    console.log(data);
    return (
        <div className='bg-gray600 pt-11 pb-11 sm:pt-16 sm:pb-12'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='hidden lg:block pt-3'>
                        <h2 className='theme-heading leading-none'>{title}</h2>
                        <p className='text-xl mt-8 mb-4 leading-snug'>Genuine FDA-approved E.D. treatments shipped
                            directly to you</p>
                        <Image src="/images/norton-approved.png" alt="" width="286" height="67" />
                    </div>
                    <div className='lg:pl-11'>
                        <form action='' method='post' className='space-y-5 mx-auto lg:mx-0 max-w-[356px]'>
                            <RadioGroup value={edMedification} onChange={setEdMedification}>
                                <RadioGroup.Label className="text-sm text-heading font-semibold flex items-center gap-1 mb-3"> Choose your E.D. Medication <QuestionMarkCircleIcon className='w-5 h-5 text-blue' /> </RadioGroup.Label>
                                <div className="grid gap-4 grid-cols-2">
                                    <RadioGroup.Option
                                        value={medicationValue1}
                                        className={({ active, checked }) =>
                                            classNames(
                                                active ? 'ring-0 ring-offset-0 ring-indigo-500' : '',
                                                checked
                                                    ? 'bg-white border-blue text-[#21293c]'
                                                    : 'bg-transparent  border-transparent text-[#21293c]',
                                                'border-2 w-[170px] h-14 text-center text-[#21293c] border-[#cacaca] rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 cursor-pointer ring-0'
                                            )
                                        }
                                    >
                                        <RadioGroup.Label as="p">{medicationLabel1}</RadioGroup.Label>
                                    </RadioGroup.Option>
                                    <RadioGroup.Option
                                        value={medicationValue2}
                                        className={({ active, checked }) =>
                                            classNames(
                                                active ? 'ring-0 ring-offset-0 ring-indigo-500' : '',
                                                checked
                                                    ? 'bg-white border-blue text-[#21293c] ring-0'
                                                    : 'bg-transparent  border-transparent text-[#21293c]',
                                                'border-2 w-[170px] h-14 text-center text-[#21293c] border-[#cacaca] rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 cursor-pointer ring-0 leading-none'
                                            )
                                        }
                                    >
                                        <RadioGroup.Label as="p" className="leading-tight">{medicationLabel2} <span className='text-xs'>({router.asPath === "/viagra" || router.asPath === "/sildenaf" ? "Sildenafil Citrate" : "Tadalafil" })</span>
                                        </RadioGroup.Label>
                                    </RadioGroup.Option>
                                </div>
                            </RadioGroup>
                            <RadioGroup value={dosage} onChange={setDosage}>
                                <RadioGroup.Label className="text-sm text-heading font-semibold flex items-center gap-1 mb-3"> Dosage <QuestionMarkCircleIcon className='w-5 h-5 text-blue' /> </RadioGroup.Label>
                                <div className="grid gap-4 grid-cols-3">
                                    <RadioGroup.Option
                                        value="25"
                                        className={({ active, checked }) =>
                                            classNames(
                                                active ? 'ring-0 ring-offset-0 ring-indigo-500' : '',
                                                checked
                                                    ? 'bg-white border-blue text-[#21293c]'
                                                    : 'bg-transparent  border-transparent text-[#21293c]',
                                                'border-2 w-[107px] h-10 text-center text-[#21293c] border-[#cacaca] rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 cursor-pointer ring-0'
                                            )
                                        }
                                    >
                                        <RadioGroup.Label as="p">25mg</RadioGroup.Label>
                                    </RadioGroup.Option>
                                    <RadioGroup.Option
                                        value="50"
                                        className={({ active, checked }) =>
                                            classNames(
                                                active ? 'ring-0 ring-offset-0 ring-indigo-500' : '',
                                                checked
                                                    ? 'bg-white border-blue text-[#21293c] ring-0'
                                                    : 'bg-transparent  border-transparent text-[#21293c]',
                                                'border-2 w-[107px] h-10 text-center text-[#21293c] border-[#cacaca] rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 cursor-pointer ring-0 leading-none'
                                            )
                                        }
                                    >
                                        <RadioGroup.Label as="p" className="leading-tight">50mg
                                        </RadioGroup.Label>
                                    </RadioGroup.Option>
                                    <RadioGroup.Option
                                        value="100"
                                        className={({ active, checked }) =>
                                            classNames(
                                                active ? 'ring-0 ring-offset-0 ring-indigo-500' : '',
                                                checked
                                                    ? 'bg-white border-blue text-[#21293c] ring-0'
                                                    : 'bg-transparent  border-transparent text-[#21293c]',
                                                'border-2 w-[107px] h-10 text-center text-[#21293c] border-[#cacaca] rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium sm:flex-1 cursor-pointer ring-0 leading-none'
                                            )
                                        }
                                    >
                                        <RadioGroup.Label as="p" className="leading-tight">100mg
                                        </RadioGroup.Label>
                                    </RadioGroup.Option>
                                </div>
                            </RadioGroup>
                            <div className='flex gap-3 items-center'>
                                <div className='w-48'>
                                    <label htmlFor="pills-refills" className="text-sm text-heading font-semibold flex items-center gap-1 mb-3">
                                        Pill refills (monthly)
                                    </label>
                                    <select
                                        id="pills-refills"
                                        name="pills-refills"
                                        className="block w-full rounded-md border-blue border-2 py-2 pl-3 pr-10 text-[15px] font-medium focus:border-blue focus:outline-none focus:ring-0"
                                        value={selected}
                                        onChange={e => setSelected(e.target.value)}
                                    >
                                        {tablets.map((items, index) => (
                                            <option key={index}>{items}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='mt-8'>
                                    <h6 className='text-[#21293c] font-semibold text-[22px] leading-tight'>$XX.XX</h6>
                                    <p className='text-[#21293c] font-medium text-[10px] leading-none'>Only $0.00 per tablet</p>
                                </div>
                            </div>
                            <div>
                                <button type='submit' className='theme-btn mt-3'>
                                    Get started now
                                    <ChevronRightIcon />
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCalculate