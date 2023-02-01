import Image from 'next/image'
import React from 'react'

const Product = () => {
    return (
        <div className='md:pt-9'>
            <div className='mb-12 relative after:bg-[url("/images/shadow.png")] z-0 after:bg-contain after:bg-no-repeat after:bg-center after:absolute after:w-[336px] after:h-[87px] after:-bottom-9 after:left-1/2 after:-translate-x-1/2 after:z-[-1]'>
                <Image src="/images/ordered-product.png" className='mx-auto' alt="Product" width="173" height="308" />
            </div>
            <div>
                <h1 className='text-heading font-black text-2xl leading-none md:pl-4'>60mg Sildenafil 1-Month Supply</h1>
                <ul className='py-5 md:pl-4 space-y-2'>
                    <li className='flex items-center gap-2'>
                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                        <span className='text-[#818181] text-base md:text-lg'> XX doses - Xx per week</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                        <span className='text-[#818181] text-base md:text-lg'> Discreet shipping to your house</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                        <span className='text-[#818181] text-base md:text-lg'>   FREE online physician consultation.</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                        <span className='text-[#818181] text-base md:text-lg'> Monthly refills</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                        <span className='text-[#818181] text-base md:text-lg'> 24/7 support</span>
                    </li>
                </ul>
                <div className='flex items-center justify-between px-4 py-3 border-b border-t border-gray'>
                    <p className='text-heading font-medium text-base leading-none'>Price</p>
                    <p className='text-heading font-medium text-base leading-none'>$00.00</p>
                </div>
                <div className='flex items-center justify-between px-4 py-3 border-b border-gray'>
                    <p className='text-heading font-medium text-base leading-none'>Shipping</p>
                    <p className='text-heading font-medium text-base leading-none'>$00.00</p>
                </div>
                <div className='flex items-center justify-between px-4 py-3 border-b border-gray'>
                    <p className='text-heading font-medium text-base leading-none'>Service Charge including Tax</p>
                    <p className='text-heading font-medium text-base leading-none'>$00.00</p>
                </div>
                <div className='flex items-center justify-between px-4 py-3'>
                    <p className='text-heading font-semibold text-lg leading-none'>Grand Total</p>
                    <p className='text-heading font-semibold text-lg leading-none'>$00.00</p>
                </div>
            </div>
            <div className='md:pl-4'>
                <ul className='pb-5 pt-3 space-y-2'>
                    <li className='flex items-center gap-2'>
                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                        <span className='text-[#818181] text-base md:text-lg'> Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                        <span className='text-[#818181] text-base md:text-lg'> Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                        <span className='text-[#818181] text-base md:text-lg'> Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                        <span className='text-[#818181] text-base md:text-lg'> Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className='flex items-center gap-2'>
                        <Image src="/images/check-checkout.png" alt="check" width="20" height="18" />
                        <span className='text-[#818181] text-base md:text-lg'> Lorem ipsum dolor sit amet</span>
                    </li>
                </ul>
                <p className='text-[#818181] text-base'>Valid US Government issued ID verification required after checkout.</p>
            </div>
        </div>
    )
}

export default Product