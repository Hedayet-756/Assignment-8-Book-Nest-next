"use client";

import toast from 'react-hot-toast';
import { FaBookOpen } from "react-icons/fa6";

const ReadButton = () => {
    const handleBorrow = () => {
        toast.success('Successfully Added in Read List!', {
            style: {
                border: '1px solid #7132e7',
                padding: '16px',
                color: '#fff',
                backgroundColor: '#0A192F',
            },
            iconTheme: {
                primary: '#7132e7',
                secondary: '#FFFAEE',
            },
        });
    };

    return (
        <button
            onClick={handleBorrow}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/30"
        >
            <FaBookOpen /> Read This Book
        </button>
    );
};

export default ReadButton;