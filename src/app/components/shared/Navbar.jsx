'use client';

import logo from "@/assets/logo.png";
import Image from "next/image";
import NavLink from "./NavLink";


const Navbar = () => {

    return (
        <div className="container mx-auto flex justify-between gap-4 my-6">
            <div>
                <NavLink href={"/"}>
                    <Image
                        src={logo}
                        width={120}
                        height={80}
                        alt="Logo"
                        className=" rounded-xl"
                    />
                </NavLink>
            </div>
            <ul className="flex justify-between items-center text-gray-700 gap-3">
                <li>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink href={"/all-books"}>All Books</NavLink>
                </li>
            </ul>
            <div>
                <h2 className="btn btn-active">Login</h2>
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
