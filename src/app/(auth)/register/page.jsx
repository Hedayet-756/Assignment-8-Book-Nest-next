'use client';

import { FaEye, FaEyeSlash, FaUser, FaImage, FaEnvelope, FaLock } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Link from "next/link";

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegisterFunc = async (data) => {
        const { name, photo, email, password } = data;
        console.log('Register Data:', { name, photo, email, password });


        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo, // optional
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message || "Registration failed!");
        } else {
            toast.success('Successfully registered! Redirecting...');
        }
    };

    const [loading, setLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);


    // console.log('watch', watch());

    // const handleRegisterFunc = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    // }

    return (
        <div className='min-h-screen flex items-center justify-center bg-[#0A192F] px-4 py-12'>
            <div className='w-full max-w-lg bg-[#112240] p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-800 relative overflow-hidden'>

                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-600/10 rounded-full blur-3xl"></div>

                <div className="relative">
                    <h1 className='text-3xl md:text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent'>
                        Create Account
                    </h1>
                    <p className="text-gray-400 text-center mb-8">Join our community of book lovers today!</p>

                    <form className='space-y-5' onSubmit={handleSubmit(handleRegisterFunc)}>

                        <div className="space-y-2">
                            <label className="text-gray-300 text-sm font-medium ml-1">Full Name</label>
                            <div className="relative group">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors" />
                                <input
                                    type="text"
                                    {...register('name', { required: "Name is required" })}
                                    className="w-full bg-[#0A192F] border border-gray-700 focus:border-purple-500 rounded-xl py-3.5 pl-12 pr-4 text-white outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Enter your name"
                                />
                            </div>
                            {errors.name && <p className="text-red-400 text-xs ml-1">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-300 text-sm font-medium ml-1">Photo URL</label>
                            <div className="relative group">
                                <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors" />
                                <input
                                    type="text"
                                    {...register('photo', { required: "Photo URL is required" })}
                                    className="w-full bg-[#0A192F] border border-gray-700 focus:border-purple-500 rounded-xl py-3.5 pl-12 pr-4 text-white outline-none transition-all placeholder:text-gray-600"
                                    placeholder="Paste photo link"
                                />
                            </div>
                            {errors.photo && <p className="text-red-400 text-xs ml-1">{errors.photo.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-300 text-sm font-medium ml-1">Email Address</label>
                            <div className="relative group">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors" />
                                <input
                                    type="email"
                                    {...register('email', { required: "Email is required" })}
                                    className="w-full bg-[#0A192F] border border-gray-700 focus:border-purple-500 rounded-xl py-3.5 pl-12 pr-4 text-white outline-none transition-all placeholder:text-gray-600"
                                    placeholder="example@mail.com"
                                />
                            </div>
                            {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-gray-300 text-sm font-medium ml-1">Password</label>
                            <div className="relative group">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors" />
                                <input
                                    type={isShowPassword ? "text" : "password"}
                                    {...register('password', {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Minimum 6 characters" }
                                    })}
                                    className="w-full bg-[#0A192F] border border-gray-700 focus:border-purple-500 rounded-xl py-3.5 pl-12 pr-12 text-white outline-none transition-all placeholder:text-gray-600"
                                    placeholder="••••••••"
                                />
                                <span
                                    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500 hover:text-purple-500 transition-colors"
                                    onClick={() => setIsShowPassword(!isShowPassword)}
                                >
                                    {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password && <p className="text-red-400 text-xs ml-1">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className='w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-600/30 transition-all active:scale-[0.98] disabled:opacity-70 mt-4'
                        >
                            {loading ? "Creating Account..." : "Register Now"}
                        </button>
                    </form>

                    <p className='text-gray-400 text-center mt-8'>
                        Already have an account?
                        <Link href="/login" className='text-purple-400 hover:text-purple-300 font-semibold ml-2 transition-colors'>
                            Login Here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
