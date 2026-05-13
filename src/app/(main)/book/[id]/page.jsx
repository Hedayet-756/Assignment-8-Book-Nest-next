import ReadButton from "@/app/components/shared/ReadButton";
import { getBookDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookOpen, FaStar, FaArrowLeft } from "react-icons/fa6";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const book = await getBookDetailsById(id);

    return {
        title: book?.title || "Book Details",
        description: book?.description || "Read more about this book.",
    };
};

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const book = await getBookDetailsById(id);

    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl text-gray-400">Book not found!</h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 lg:py-20">
            {/* Back Button */}
            <Link
                href={`/all-books?category=${book.category}`}
                className="flex items-center gap-2 text-gray-400 text-xl md:text-2xl p-4 font-semibold hover: rounded-2xl hover:bg-purple-700 hover:text-purple-200 mb-8 transition-colors w-fit"
            >
                <FaArrowLeft /> Back to Library
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#0A192F] border border-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl shadow-purple-500/10">
                <div className="lg:col-span-5 xl:col-span-4">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <img
                            src={book.image}
                            alt={book.title}
                            className="relative rounded-2xl w-full h-auto object-cover shadow-2xl"
                        />
                    </div>
                </div>

                <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold border border-blue-500/20">
                            {book.category}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-500 font-bold bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
                            <FaStar /> {book.rating}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                        {book.title}
                    </h1>

                    <p className="text-xl text-gray-400 mb-6 flex items-center gap-2">
                        by <span className="text-purple-400 font-semibold">{book.author}</span>
                    </p>

                    <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mb-8 rounded-full"></div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-gray-300 font-bold text-lg mb-2">Description</h3>
                            <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                                {book.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 py-6 border-y border-gray-800">
                            <div>
                                <p className="text-gray-500 text-sm uppercase tracking-wider">Availability</p>
                                <p className="text-white font-bold text-lg">
                                    {book.availableCopies > 0 ? `${book.availableCopies} Copies left` : "Out of Stock"}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm uppercase tracking-wider">Format</p>
                                <p className="text-white font-bold text-lg">Hardcover / PDF</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <ReadButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;