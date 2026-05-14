import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="min-h-[90vh] flex flex-col justify-center items-center bg-[#0A192F] px-6 relative overflow-hidden text-center">

            {/* Background Decorative Circles */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>

            {/* 404 Background Text */}
            <h1 className="text-[120px] md:text-[200px] font-black text-white/5 absolute select-none leading-none">
                404
            </h1>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Oops! Page Not Found
                </h2>

                <p className="text-gray-400 max-w-sm md:max-w-md mx-auto text-sm md:text-base mb-8 leading-relaxed">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Back to Home Button */}
                <Link href={"/"}>
                    <button className="px-10 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all active:scale-95">
                        Back to Home
                    </button>
                </Link>

                {/* Ghost Icon */}
                <div className="mt-12 text-6xl animate-bounce">
                    👻
                </div>
            </div>
        </div>
    );
};

export default NotFound;