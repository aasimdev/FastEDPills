import { LinkIcon, LockClosedIcon, PencilIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import InputMask from "react-input-mask";
import axios from "axios";


const CheckoutInfo = () => {
    const [formData, setFormData] = useState();
    const [shipInfo, setShipInfo] = useState(false);
    const [shipInfoB, setShipInfoB] = useState(false);
    const [paymentInfo, setPaymentInfo] = useState(false);
    const [adShipInfo, setAdShipInfo] = useState(false);
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [aditionalstate, setStateAd] = useState('');
    const [aditionalcity, setCityAd] = useState('');
    const [aditionalzipcode, setZipcodeAd] = useState('');
    const [sameAddressFlag, setSameAddressFlag] = useState('0');
    const [adShipEdit, setAdShipEdit] = useState(false);
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur', reValidateMode: "onChange" });

    const router = useRouter();

    const shippingInfoSubmit = (data) => {
        console.log(data);
        data['zipcode'] = zipcode;
        data['state'] = state;
        data['city'] = city;
        data['addressFlag'] = sameAddressFlag;
        setFormData(data);
        if (isValid) {
            setShipInfo(!shipInfo);
            if(sameAddressFlag == '1'){
                setShipInfoB(false);
                setAdShipEdit(true);
                setPaymentInfo(true);
            }else{
                setShipInfoB(true);
                setAdShipEdit(false);
            }
            
        }
    }

    const adShippingInfoSubmit = (data) => {
        if (data) {
            data['zipcode'] = zipcode;
            data['state'] = state;
            data['city'] = city;
            data['addressFlag'] = sameAddressFlag;
            data['aditionalzipcode'] = aditionalzipcode;
            data['aditionalstate'] = aditionalstate;
            data['aditionalcity'] = aditionalcity;
            setAdShipInfo(true);
            setShipInfoB(false);
            setPaymentInfo(true);
            setAdShipEdit(true);
            console.log(data);
        }
    }

    const getCityAndState = (e) => {
        var zipCode = e.target.value;
        console.log(zipCode);
        setZipcode(zipCode);
        axios
            .get("https://ziptasticapi.com/"+ zipCode)
            .then((responce) => {
                console.log(responce);
                if(responce.data.state){
                    setState(responce.data.state);
                }
                if(responce.data.city){
                    setCity(responce.data.city);
                }
            })
    }

    const getCityAndStateAditional = (e) => {
        var zipCodeAd = e.target.value;
        console.log(zipCodeAd);
        setZipcodeAd(zipCodeAd);
        axios
            .get("https://ziptasticapi.com/"+ zipCodeAd)
            .then((responce) => {
                console.log(responce);
                if(responce.data.state){
                    setStateAd(responce.data.state);
                }
                if(responce.data.city){
                    setCityAd(responce.data.city);
                }
            })
    }

    const setBilllingAddress = (e) => {
        if(e.target.checked==true){
            setSameAddressFlag(1);
        }else{
            setSameAddressFlag('0');
        }
    }

    const paymentInfoSubmit = (data) => {

        console.log(data);
        data['zipcode'] = zipcode;
        data['state'] = state;
        data['city'] = city;
        data['addressFlag'] = sameAddressFlag;
        data['aditionalzipcode'] = aditionalzipcode;
        data['aditionalstate'] = aditionalstate;
        data['aditionalcity'] = aditionalcity;

        data['token'] = localStorage.getItem("user_token");
        axios
            .post("http://localhost:9000/api/user/user_information", data)
            .then((responce) => {
                console.log(responce.data);
                if(responce.data.code == 200){
                    // localStorage.setItem("user_token", responce.data.data.token);
                    alert("Form has been submitted successfully")
                    router.push("/")
                }
                
            })
            .catch((error) => {
                console.log(error);
                
            });
        // alert("Form has been submitted successfully")
        // if (data) {
        //     router.push("/")
        // }
    }


    // Ship Information Edit
    const shipInfoEditHandler = () => {
        setShipInfoB(false);
        setShipInfo(false);
        setAdShipEdit(true);
    }

    // Additional Ship Information Edit
    const adShipInfoEditHandler = () => {
        setShipInfo(true);
        setShipInfoB(true);
        setAdShipEdit(false);
    }


    return (
        <div className="space-y-6">
            {/* Shipping information */}
            <div>
                <div className='bg-[#161616] md:py-7 px-6 md:px-12 flex items-center justify-between h-20 md:h-[88px]'>
                    <p className='text-white text-lg md:text-2xl font-semibold'>1. Shipping Information</p>
                    {shipInfo &&
                        <button type='button' className='bg-white rounded-md text-base font-medium w-24 md:w-32 h-11 gap-1 flex items-center justify-center' onClick={shipInfoEditHandler}>
                            <PencilIcon className='w-5 h-5' />
                            <span>Edit</span>
                        </button>
                    }
                </div>
                <div className='bg-[#f0f0f0] pt-6 px-4 md:px-7 pb-8'>
                    {!shipInfo &&
                        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit(shippingInfoSubmit)}>
                            <p className='text-sm text-[#525252]'>Ship To Name: must be your legal name (edit name)            </p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="firstname" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        First Name
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="firstname"
                                            name="firstname"
                                            type="text"

                                            {...register('firstname', { required: true })}
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.firstname && <p className='text-orange text-xs mt-2'>First Name is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        Last Name
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="lastname"
                                            name="lastname"
                                            type="text"

                                            {...register('lastname', { required: true })}
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.lastname && <p className='text-orange text-xs mt-2'>Last Name is required</p>}
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label htmlFor="phone" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                    Phone
                                </label>
                                <div className="mt-2 sm:mt-3">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"

                                        {...register('phone', { required: true })}
                                        className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                    />
                                    {errors?.phone && <p className='text-orange text-xs mt-2'>Phone is required</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                    Address
                                </label>
                                <div className="mt-2 sm:mt-3">
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"

                                        {...register('address', { required: true })}
                                        className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                    />
                                    {errors?.address && <p className='text-orange text-xs mt-2'>Address is required</p>}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="state" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        State
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="state"
                                            name="state"
                                            value={state}
                                            type="text"
                                            // {...register('zipcode', { required: true })}
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {/* <select
                                            id="state"
                                            name="state"
                                            defaultValue=""
                                            {...register("state", { required: true })}
                                            className="block w-full rounded-md border-gray400 border p-3 sm:py-[15px] bg-[#fbfbfb] font-medium focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        >
                                            <option disabled value="">State</option>
                                            <option>Option A</option>
                                            <option>Option B</option>
                                            <option>Option C</option>
                                        </select> */}
                                        {errors?.state && <p className='text-orange text-xs mt-2'>State is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        City
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        {/* <select
                                            id="city"
                                            name="city"
                                            defaultValue=""
                                            {...register('city', { required: true })}
                                            className="block w-full rounded-md border-gray400 border p-3 sm:py-[15px] bg-[#fbfbfb] font-medium focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        >
                                            <option disabled value="">City</option>
                                            <option>Option A</option>
                                            <option>Option B</option>
                                            <option>Option C</option>
                                        </select> */}
                                        <input
                                            id="city"
                                            name="city"
                                            value={city}
                                            type="text"
                                            // {...register('zipcode', { required: true })}
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.city && <p className='text-orange text-xs mt-2'>City is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="zipcode" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        Zip Code
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="zipcode"
                                            name="zipcode"
                                            onChange={(e) => getCityAndState(e)}
                                            type="text"
                                            defaultValue={zipcode}
                                            // {...register('zipcode', { required: true })}
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.zipcode && <p className='text-orange text-xs mt-2'>Zip Code is required</p>}
                                        <div className="form-check mt-3">

                                            <input type="checkbox" name="billingsame" id="billingsame" onChange={(e) => setBilllingAddress(e)} className='h-4 w-4 border border-[#a4a4a4] bg-[#f4f3f3] checked:bg-blue checked:border-blue  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' />
                                            <label className="form-check-label inline-block text-[#525252] text-sm" htmlFor="billingsame">
                                                Billing Same As Shipping
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='text-center'>
                                <button
                                    type="submit"
                                    className="mt-4 sm:mt-2 theme-btn blue-btn capitalize"
                                >
                                    Save & Continue
                                </button>
                            </div>
                        </form>
                    }
                    {shipInfo &&
                        <div>
                            <h6 className='text-heading font-medium text-base leading-none mb-7'>{formData.firstname} {formData.lastname}</h6>
                            <p className='text-[#525252] text-sm'>{formData.phone}</p>
                            <p className='text-[#525252] text-sm'>{formData.address}</p>
                            <p className='text-[#525252] text-sm'>{formData.city}, {formData.state}, {formData.zipCode}</p>
                        </div>
                    }
                </div>
            </div>

            {/* 1b Billing Information */}
            <div>
                <div className='bg-[#161616] md:py-7 px-6 md:px-12 flex items-center justify-between h-20 md:h-[88px]'>
                    <p className='text-white text-lg md:text-2xl font-semibold'>1b. Billing Information</p>
                    {adShipEdit &&
                        <button type='button' className='bg-white rounded-md text-base font-medium w-24 md:w-32 h-11 gap-1 flex items-center justify-center' onClick={adShipInfoEditHandler}>
                            <PencilIcon className='w-5 h-5' />
                            <span>Edit</span>
                        </button>
                    }
                    {!adShipEdit && !shipInfoB && <div><LockClosedIcon className='w-6 h-6 text-white' /></div>}
                </div>


                {shipInfoB &&
                    <div className='bg-[#f0f0f0] pt-6 px-4 md:px-7 pb-8'>
                        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit(adShippingInfoSubmit)}>
                            <p className='text-sm text-[#525252]'>Ship To Name: must be your legal name (edit name)            </p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="aditionalfirstname" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        First Name
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="aditionalfirstname"
                                            name="aditionalfirstname"
                                            type="text"

                                            {...register('aditionalfirstname', { required: true })}
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.aditionalfirstname && <p className='text-orange text-xs mt-2'>First Name is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="aditionallastname" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        Last Name
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="aditionallastname"
                                            name="aditionallastname"
                                            type="text"

                                            {...register('aditionallastname', { required: true })}
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.aditionallastname && <p className='text-orange text-xs mt-2'>Last Name is required</p>}
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label htmlFor="aditionalphone" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                    Phone
                                </label>
                                <div className="mt-2 sm:mt-3">
                                    <input
                                        id="aditionalphone"
                                        name="aditionalphone"
                                        type="tel"

                                        {...register('aditionalphone', { required: true })}
                                        className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                    />
                                    {errors?.aditionalphone && <p className='text-orange text-xs mt-2'>Phone is required</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="aditionaladdress" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                    Address
                                </label>
                                <div className="mt-2 sm:mt-3">
                                    <input
                                        id="aditionaladdress"
                                        name="aditionaladdress"
                                        type="text"

                                        {...register('aditionaladdress', { required: true })}
                                        className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                    />
                                    {errors?.aditionaladdress && <p className='text-orange text-xs mt-2'>Address is required</p>}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="aditionalstate" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        State
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        {/* <select
                                            id="aditionalstate"
                                            name="aditionalstate"
                                            defaultValue=""
                                            {...register("aditionalstate", { required: true })}
                                            className="block w-full rounded-md border-gray400 border p-3 sm:py-[15px] bg-[#fbfbfb] font-medium focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        >
                                            <option disabled value="">State</option>
                                            <option>Option A</option>
                                            <option>Option B</option>
                                            <option>Option C</option>
                                        </select> */}
                                          <input
                                            id="aditionalstate"
                                            name="aditionalstate"
                                            value={aditionalstate}
                                            type="text"
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.aditionalstate && <p className='text-orange text-xs mt-2'>State is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="aditionalcity" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        City
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        {/* <select
                                            id="aditionalcity"
                                            name="aditionalcity"
                                            defaultValue=""
                                            {...register('aditionalcity', { required: true })}
                                            className="block w-full rounded-md border-gray400 border p-3 sm:py-[15px] bg-[#fbfbfb] font-medium focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        >
                                            <option disabled value="">City</option>
                                            <option>Option A</option>
                                            <option>Option B</option>
                                            <option>Option C</option>
                                        </select> */}
                                          <input
                                            id="aditionalcity"
                                            name="aditionalcity"
                                            value={aditionalcity}
                                            type="text"
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.aditionalcity && <p className='text-orange text-xs mt-2'>City is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="aditionalzipcode" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        Zip Code
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="aditionalzipcode"
                                            name="aditionalzipcode"
                                            type="text"
                                            onChange={(e) => getCityAndStateAditional(e)}
                                            defaultValue={aditionalzipcode}
                                            // {...register('aditionalzipcode', { required: true })}
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.aditionalzipcode && <p className='text-orange text-xs mt-2'>Zip Code is required</p>}
                                        <div className="form-check mt-3">

                                            {/* <input type="checkbox" name="billingsame" id="billingsame" className='h-4 w-4 border border-[#a4a4a4] bg-[#f4f3f3] checked:bg-blue checked:border-blue  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer' />
                                            <label className="form-check-label inline-block text-[#525252] text-sm" htmlFor="billingsame">
                                                Billing Same As Shipping
                                            </label> */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='text-center'>
                                <button
                                    type="submit"
                                    className="mt-4 sm:mt-2 theme-btn blue-btn capitalize"
                                >
                                    Save & Continue
                                </button>
                            </div>
                        </form>
                    </div>
                }
                {adShipEdit &&
                    <div className='bg-[#f0f0f0] pt-6 px-4 md:px-7 pb-8'>
                        <h6 className='text-heading font-medium text-base leading-none mb-7'>John Doe</h6>
                        <p className='text-[#525252] text-sm'>2636 My Drive</p>
                        <p className='text-[#525252] text-sm'>New York, NY, 10013</p>
                    </div>
                }


            </div>


            {/* 2. Payment Information */}
            <div>
                <div className='bg-[#161616] md:py-7 px-6 md:px-12 flex items-center justify-between h-20 md:h-[88px]'>
                    <p className='text-white text-lg md:text-2xl font-semibold'>2. Payment Information</p>
                    {!paymentInfo && <div><LockClosedIcon className='w-6 h-6 text-white' /></div>}
                </div>
                {paymentInfo &&
                    <div className='bg-[#f0f0f0] pt-6 px-4 md:px-7 pb-8'>
                        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit(paymentInfoSubmit)}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                                <div>
                                    <label htmlFor="cardnumber" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        Card Number
                                    </label>
                                    <div className="mt-2 sm:mt-3">

                                        <input
                                            id="cardnumber"
                                            name="cardnumber"
                                            type="number"
                                            {...register('cardnumber', { required: true })}
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.cardnumber && <p className='text-orange text-xs mt-2'>Card Number is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="expiry" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        MM/YY
                                    </label>
                                    <div className="mt-2 sm:mt-3">

                                        <input
                                            id="expiry"
                                            name="expiry"
                                            type="number"
                                            {...register('expiry', { required: true })}
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.expiry && <p className='text-orange text-xs mt-2'>Date is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="cvc" className="block text-sm sm:text-lg font-medium text-[#525252]">
                                        CVC
                                    </label>
                                    <div className="mt-2 sm:mt-3">
                                        <input
                                            id="cvc"
                                            name="cvc"
                                            type="number"

                                            {...register('cvc', { required: true })}
                                            className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] bg-[#fbfbfb] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                        />
                                        {errors?.cvc && <p className='text-orange text-xs mt-2'>CVC number is required</p>}
                                    </div>
                                </div>
                            </div>





                            <div className='text-center'>
                                <button
                                    type="submit"
                                    className="mt-4 sm:mt-2 theme-btn blue-btn capitalize"
                                >
                                    Pay Now
                                </button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}

export default CheckoutInfo