import React from 'react';
import { CiStar } from 'react-icons/ci';

// const booksProminse = fetch('/booksData.json').then(res => res.json())

async function getBooks() {
    const res = await fetch("http://localhost:3000/booksData.json");
    if (!res.ok) throw new Error('Failed to fetch data');
    const data = await res.json();
    return data.Books;
}

const AllBooksPage = async () => {

    const allBooks = await getBooks();

    // console.log(books);

    return (
        <div className='overflow-hidden rounded-xl bg-[#112240]'>
            <div className='mt-8 flex justify-start items-center'>
                <h1 className='text-4xl bg-linear-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent'>Featured Books:</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
                {allBooks.map((book) => (
                    <div key={book.id} className="card bg-base-100 shadow-xl border rounded-2xl">
                        <div>
                            <figure className='p-6'>
                                <img
                                    className='rounded-xl h-[220px] w-full object-cover object-top'
                                    src={book.image}
                                    alt={book.title}
                                />
                            </figure>
                        </div>

                        <div className="card-body">
                            <div className='flex items-center gap-2'>
                                <div className="badge text-green-500 bg-green-200 font-bold px-3 py-3">
                                    {book.category}
                                </div>
                            </div>

                            <h2 className="card-title font-bold text-2xl mt-2">{book.title}</h2>
                            <p className='font-semibold text-lg text-gray-600'>By: {book.author}</p>

                            <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 mt-4 text-xl">
                                <div className="font-semibold text-gray-700">{book.category}</div>
                                <div className="flex gap-2 items-center text-2xl font-bold">
                                    {book.rating} <CiStar className="text-yellow-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBooksPage;

// {
//     books.category.map((category, index) => (
//         <div key={index} className="badge text-green-500 bg-green-200 font-bold">{category}</div>
//     ))
// }