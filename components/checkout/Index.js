import React from 'react'
import CheckoutInfo from './CheckoutInfo'
import Product from './Product'

const Checkout = () => {
    return (
        <div className='bg-white pt-12 pb-28 md:pb-52'>
            <div className="mx-auto px-4 md:px-12 xl:px-0 xl:max-w-screen-xl">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                        <Product />
                    </div>
                    <div>
                        <CheckoutInfo />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout