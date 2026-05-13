import { cache } from "react";

export async function getBooks() {
  const res = await fetch(
    "http://localhost:3000/booksData.json",
    { next: { revalidate: 6000 } }
  );
  const data = await res.json();

  return data.Books;
}

export async function getCategories() {
  const res = await fetch(
    "http://localhost:3000/booksData.json",
    { next: { revalidate: 6000 } }
  );
  const data = await res.json();
  const categories = [...new Set(data.Books.map(book => book.category))];
  return categories;
}

export async function getBooksByCategoryId(category_name) {
  const res = await fetch(
    "http://localhost:3000/booksData.json",
    { next: { revalidate: 6000 } }
  );
  const data = await res.json();
  return data.Books.filter(
    (book) => book.category.toLowerCase() === category_name?.toLowerCase()
  );
}

export async function getBookDetailsById(id) {
  const res = await fetch(
    "http://localhost:3000/booksData.json",
    { next: { revalidate: 6000 } }
  );
  const data = await res.json();
  return data.Books.find(book => book.id === parseInt(id));
}