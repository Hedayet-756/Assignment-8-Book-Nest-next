'use client';

import logo from "@/assets/logo.png";
import Image from "next/image";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user || null;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSLogOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    window.location.href = "/";
                },
            },
        });
    };

    return (
        <nav className="container flex justify-between items-center gap-2 my-4 md:my-6 px-4 py-3 sticky top-0 z-50 bg-[#0A192F]/80 backdrop-blur-md shadow-md mx-auto rounded-xl border border-gray-800">
            <div className="flex-shrink-0">
                <Link href={"/"}>
                    <Image
                        src={logo}
                        width={120}
                        height={50}
                        alt="Logo"
                        className="rounded-lg w-[80px] md:w-[110px]"
                    />
                </Link>
            </div>
            <ul className="flex items-center text-gray-400 gap-4 md:gap-8 text-sm md:text-base font-medium">
                <li className="hidden md:block">
                    <NavLink href={"/"} activeClassName="text-purple-500" className='hover:text-purple-400 transition-colors'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink href={"/all-books"} activeClassName="text-purple-500" className='hover:text-purple-400 transition-colors'>
                        All Books
                    </NavLink>
                </li>
            </ul>

            <div className="flex items-center">
                {isPending ? (
                    <div className="w-8 md:w-10 h-8 rounded-full bg-slate-800/50 animate-pulse"></div>
                ) : user ? (
                    <div className="flex items-center gap-2 md:gap-3 p-1 pr-2 md:pr-3 rounded-full relative">

                        <div className="hidden sm:block">
                            <h2 className="text-sm md:text-base font-bold text-white leading-none">
                                {user?.name?.split(' ')[0]}
                            </h2>
                        </div>
                        <div
                            className="relative w-8 h-8 md:w-12 md:h-12 cursor-pointer z-50"
                            onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <Image
                                src={user?.image || `https://ui-avatars.com/api/?name=${user.name}&background=6366f1&color=fff`}
                                alt="User"
                                fill
                                className={`rounded-full object-cover border-2 transition-all ${dropdownOpen ? 'border-pink-500' : 'border-purple-500 hover:border-pink-500'}`}
                            />
                        </div>
                        {dropdownOpen && (
                            <>
                                <div
                                    className="fixed inset-0 z-40 cursor-default"
                                    onClick={() => setDropdownOpen(false)}
                                ></div>
                                <div className="absolute right-0 top-10 md:top-14 w-44 bg-[#0A192F] border border-gray-800 rounded-lg shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                                    <div className="px-4 py-1.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-gray-800/60">
                                        Account
                                    </div>

                                    <Link
                                        href="/update"
                                        onClick={() => setDropdownOpen(false)}
                                        className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-purple-400 transition-colors"
                                    >
                                        Update Profile
                                    </Link>

                                    <button
                                        onClick={() => {
                                            setDropdownOpen(false);
                                            handleSLogOut();
                                        }}
                                        className="w-full text-left block px-4 py-2 text-sm text-red-400 hover:bg-slate-800 transition-colors border-t border-gray-800/60"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <Link href="/login">
                        <button className="px-4 py-2 md:px-6 md:py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg text-sm font-bold hover:shadow-lg transition-all active:scale-95">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;