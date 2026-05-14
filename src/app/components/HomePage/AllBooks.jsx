
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";

const AllBooks = ({ book }) => {
  // console.log(book, "books");

  if (!book) return null;

  return (
    <div className="card  shadow-xl border rounded-2xl overflow-hidden text-gray-800 transition-transform hover:scale-[1.02] bg-base-200">
      <figure className='p-6'>
        <img
          className='rounded-xl h-[220px] w-full object-cover object-top'
          src={book.image}
          alt={book.title}
        />
      </figure>

      <div className="card-body p-5">
        <div className='flex items-center gap-2'>
          <div className="badge text-green-600 bg-green-100 font-bold px-3 py-1 rounded-full text-xs">
            {book.category}
          </div>
        </div>

        <div className="flex gap-5 justify-between items-center">
          <div>
            <h2 className="card-title font-bold text-lg md:text-2xl mt-2 line-clamp-1 text-gray-100">{book.title}</h2>
            <p className='font-medium text-sm text-gray-500'>By: {book.author}</p>
          </div>
          <div>
            <Link href={`/book/${book.id}`}>
              <button className="btn bg-purple-950">Read</button>
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-dashed border-gray-200 pt-4 mt-4">
          <div className="font-semibold text-gray-500 text-sm">{book.category}</div>
          <div className="flex gap-1 items-center text-lg text-gray-500 font-bold">
            {book.rating} <CiStar className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllBooks;
