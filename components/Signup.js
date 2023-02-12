import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";
import Router from 'next/router';

const Signup = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onBlur', reValidateMode: "onChange" });
    const [passwordStrength, setPasswordStrength] = useState(null);
    const [showError, setShowError] = useState(false);

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    const handlePasswordChange = (e) => {
        setPasswordStrength(strongPasswordRegex.test(e.target.value) ? 'strong' : 'weak');
        setShowError(true)
    };

    const onSubmit = data => {
        console.log(data);
        axios
            .post("http://localhost:9000/api/user/signup", data)
            .then((responce) => {
                console.log(responce.data);
                if(responce.data.code == 200){
                    localStorage.setItem("user_token", responce.data.data.token);
                    var user_obj = {user_email : responce.data.data.email};
                    localStorage.setItem("user_obj", JSON.stringify(user_obj));
                    const {pathname} = Router;
                    Router.push('/order-form')
                }
            })
            .catch((error) => {
                console.log(error);
                
            });

    };
    return (
        <div className="bg-[url('/images/signup-bg.jpg')] bg-center bg-no-repeat bg-cover">
            <div className='px-4 sm:px-0 pt-14 pb-48 mx-auto max-w-[530px]'>
                <h1 className='theme-heading text-center'>Sign up for a new account</h1>
                <p className='text-center text-base sm:text-xl mt-5'>Please fill this form to create an account</p>
                <div className='bg-white pt-8 px-5 sm:px-12 pb-24 sm:pb-12 rounded mt-8 sm:mt-10'>
                    <div className='w-[90px] h-[90px] rounded-full flex items-center justify-center mb-11 sm:mb-12 mx-auto bg-gray300'>
                        <Image src="/images/add-user.png" alt="add user" width="47" height="52" />
                    </div>
                    <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block text-sm sm:text-lg font-medium text-heading">
                                Email
                            </label>
                            <div className="mt-2 sm:mt-3">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder='charlene@gmail.com'
                                    {...register("email", {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                />
                                {errors.email && <p className='text-orange text-xs mt-2'>{errors.email.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm sm:text-lg font-medium text-heading">
                                Password
                            </label>
                            <div className="mt-2 sm:mt-3">
                                <input
                                    name="password"
                                    type="password"
                                    {...register("password", {
                                        required: 'Password is required',
                                    })}
                                    placeholder='•••••••••••••'
                                    className="block w-full appearance-none rounded-md border border-gray400 px-3 py-3 sm:py-[15px] placeholder-placehoder focus:border-blue focus:outline-none focus:ring-blue text-xs sm:text-base"
                                />
                                {errors.password && <p className='text-orange text-xs mt-2'>{errors.password.message}</p>}
                            </div>
                        </div>



                        <div className='text-center'>
                            <button
                                type="submit"
                                className="mt-4 sm:mt-2 theme-btn"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                </div>

                <div className="flex flex-col justify-center text-center mt-6 gap-2.5">
                    <Link href="#" className='text-blue text-base underline'>
                        Forgot your password?
                    </Link>

                    <div className="text-sm">
                        <p className='text-base text-[#494949]'>Not a customer? <Link href="#" className='text-blue text-base underline'>Get Started</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup