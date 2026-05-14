'use client';

import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaGoogle, FaLock } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import toast from "react-hot-toast";

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLoginFunc = async (data) => {
        console.log('Login Data:', data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: false,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message || "Login failed!");
            setLoading(false);
        } else {
            toast.success('Successfully logged in!');
        }
    }

    //       const handleGoogleSignin = async () => {
    //     const data = await authClient.signIn.social({
    //       provider: "google",
    //     });
    //     console.log('Google Sign-In Data:', data);
    //   }



    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    }

    // console.log('watch', watch());

    // const handleLoginFunc = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    // }

    return (
        <div className='min-h-screen flex items-center justify-center bg-[#0A192F] px-4 py-12'>
            <div className='w-full max-w-lg bg-[#112240] p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-800 relative overflow-hidden'>

                {/* Background Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-600/10 rounded-full blur-3xl"></div>

                <div className="relative">
                    <h1 className='text-3xl md:text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent'>
                        Welcome Back
                    </h1>
                    <p className="text-gray-400 text-center mb-8">Login to access your library</p>
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 bg-[#0A192F] border border-gray-700 text-white py-3.5 rounded-xl hover:bg-gray-800 transition-all mb-6 font-medium cursor-pointer"
                    >
                        <FaGoogle className="text-red-500 text-xl" />
                        Continue with Google
                    </button>

                    <div className="relative mb-8 text-center">
                        <hr className="border-gray-800" />
                        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#112240] px-4 text-gray-500 text-sm">OR</span>
                    </div>

                    <form className='space-y-5' onSubmit={handleSubmit(handleLoginFunc)}>
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
                            <div className="flex justify-between items-center px-1">
                                <label className="text-gray-300 text-sm font-medium">Password</label>
                                <Link href="#" className="text-xs text-purple-400 hover:underline">Forgot Password?</Link>
                            </div>
                            <div className="relative group">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors" />
                                <input
                                    type={isShowPassword ? "text" : "password"}
                                    {...register('password', { required: "Password is required" })}
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
                            {loading ? "Signing in..." : "Login Now"}
                        </button>
                    </form>

                    <p className='text-gray-400 text-center mt-8'>
                        New to BookNest?
                        <Link href="/register" className='text-purple-400 hover:text-purple-300 font-semibold ml-2 transition-colors'>
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
