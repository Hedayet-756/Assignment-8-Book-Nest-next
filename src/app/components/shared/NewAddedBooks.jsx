import React from "react";
import Marquee from "react-fast-marquee";
import { getBooks } from "@/lib/data";

const NewAddedBooks = async () => {
    const books = await getBooks();
    return (
        <div className="w-full overflow-hidden px-4">
            <div className="flex items-center bg-[#1a202c] py-3 px-2 container mx-auto mt-6 rounded-xl border border-gray-700 shadow-lg">

                <div className="bg-red-600 text-white px-2 md:px-5 py-1 md:py-2 rounded-lg font-bold text-[10px] md:text-sm uppercase tracking-wider animate-pulse whitespace-nowrap">
                    Latest Books
                </div>
                <Marquee pauseOnHover={true} speed={80} gradient={false}>
                    {books.map((book) => (
                        <div key={book.id} className="flex items-center">
                            <span className="text-gray-200 font-medium text-sm md:text-lg mx-4 md:mx-8 whitespace-nowrap">
                                {book.title}
                            </span>
                            <span className="text-purple-500 text-2xl font-bold">•</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default NewAddedBooks;
