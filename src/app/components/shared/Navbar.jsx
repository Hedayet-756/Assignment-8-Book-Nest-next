'use client';

import logo from "@/assets/logo.png";
import Image from "next/image";
import NavLink from "./NavLink";


const Navbar = () => {

    return (
        <div className="container flex flex-wrap md:flex-nowrap justify-between items-center gap-2 my-4 md:my-6 px-4 py-2 sticky top-0 z-50 bg-[#0A192F]/80 backdrop-blur-md shadow-md mx-auto rounded-xl">
            <div>
                <NavLink href={"/"}>
                    <Image
                        src={logo}
                        width={80}
                        height={50}
                        alt="Logo"
                        className="rounded-lg md:w-[120px]"
                    />
                </NavLink>
            </div>
            <ul className="flex items-center text-gray-400 gap-3 md:gap-6 text-sm md:text-base">
                <li>
                    <NavLink href={"/"} className=' hover:text-purple-500'>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/all-books"} className=' hover:text-purple-500'>All Books</NavLink>
                </li>
            </ul>
            <div>
                <button className="btn btn-sm md:btn-md bg-purple-600 text-white border-none">
                    Login
                </button>
            </div>

        </div >
    );
};

export default Navbar;


// {isPending ? (<span className="loading loading-spinner loading-lg"></span>) :
//                 user ? (
//                     <div className="flex items-center gap-2">
//                         <h2>Hello {user?.name || "Guest"}</h2>
//                         <Image src={user?.image || userAvatar} alt="User avatar" width={60} height={60} className="rounded-full" />
//                         <button onClick={async () => await authClient.signOut()} className="btn bg-red-500 text-white">
//                             <Link href={"/"}>Logout</Link>
//                         </button>
//                     </div>) : (
//                     <button className="btn bg-purple-500 text-white">
//                         <Link href={"/login"}>Login</Link>
//                     </button>
//                 )
//             }
