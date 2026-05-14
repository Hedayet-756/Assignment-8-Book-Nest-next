import fs from 'fs';
import path from 'path';

// হেল্পার ফাংশন: public ফোল্ডার থেকে ফাইলটি রিড করার জন্য
function readBooksDataFile() {
  // এটি আপনার প্রজেক্টের রুট থেকে public/booksData.json ফাইলের সঠিক পাথ তৈরি করবে
  const filePath = path.join(process.cwd(), 'public', 'booksData.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// ১. সব বই নেওয়ার ফাংশন
export async function getBooks() {
  try {
    const data = readBooksDataFile();
    return data.Books || [];
  } catch (error) {
    console.error("Error reading books data:", error);
    return [];
  }
}

// ২. সব ক্যাটাগরি ইউনিকভাবে নেওয়ার ফাংশন
export async function getCategories() {
  try {
    const data = readBooksDataFile();
    const categories = [...new Set(data.Books.map(book => book.category))];
    return categories;
  } catch (error) {
    console.error("Error getting categories:", error);
    return [];
  }
}

// ৩. আইডি অনুযায়ী নির্দিষ্ট বইয়ের ডিটেইলস নেওয়ার ফাংশন
export async function getBookDetailsById(id) {
  try {
    const data = readBooksDataFile();
    // আপনার json ফাইলের id যদি string বা number হয়, তার সাথে ম্যাচ করার জন্য == ব্যবহার করা হয়েছে
    const book = data.Books.find(b => b.id == id);
    return book || null;
  } catch (error) {
    console.error("Error getting book details:", error);
    return null;
  }
}

export async function getBooksByCategoryID(category_name) {
  try {
    const data = readBooksDataFile();
    // ক্যাটাগরি ম্যাচ করে বইগুলো ফিল্টার করা হচ্ছে
    const filteredBooks = data.Books.filter(
      book => book.category.toLowerCase() === category_name.toLowerCase()
    );
    return filteredBooks;
  } catch (error) {
    console.error("Error getting books by category:", error);
    return [];
  }
}

// // import { cache } from "react";
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
// // await fetch(`${BASE_URL}/booksData.json`


// export async function getBooks() {
//   try {
//   const res = await fetch(`${BASE_URL}/booksData.json`,
//     { next: { revalidate: 6000 } }
//   );
//   if (!res.ok) throw new Error("Fetch failed");
//   const data = await res.json();
//   return data.Books;
// } catch (error) {
//   console.error("Error fetching books:", error);
//   return [];
// }


// export async function getCategories() {
//   const res = await fetch(`${BASE_URL}/booksData.json`,
//     { next: { revalidate: 6000 } }
//   );
//   const data = await res.json();
//   const categories = [...new Set(data.Books.map(book => book.category))];
//   return categories;
// }

// export async function getBooksByCategoryId(category_name) {
//   const res = await fetch(`${BASE_URL}/booksData.json`,
//     { next: { revalidate: 6000 } }
//   );
//   const data = await res.json();
//   return data.Books.filter(
//     (book) => book.category.toLowerCase() === category_name?.toLowerCase()
//   );
// }

// export async function getBookDetailsById(id) {
//   const res = await fetch(`${BASE_URL}/booksData.json`,
//     { next: { revalidate: 6000 } }
//   );
//   const data = await res.json();
//   return data.Books.find(book => book.id === parseInt(id));
// }