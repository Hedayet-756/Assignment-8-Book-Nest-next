
import AllBooks from "@/app/components/HomePage/AllBooks";
import BookDetailsLeft from "@/app/components/HomePage/BookDetailsLeft";
import { getBooks, getBooksByCategoryId, getCategories } from "@/lib/data";
import { FaSearch } from "react-icons/fa";


const AllBooksPage = async ({ searchParams }) => {
    console.log(searchParams, 'searchParams')

    const query = await searchParams;
    const selectedCategory = query?.category;

    const searchTerm = query?.search?.toLowerCase() || "";

    const categories = await getCategories();
    let books = [];

    if (selectedCategory) {
        books = await getBooksByCategoryId(selectedCategory);
    } else {
        books = await getBooks();
    }

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
    );


    return (
        <div>
            <div className="max-w-3xl mx-auto my-4 md:my-7">
                <form action="/all-books" className="relative group">
                    <input
                        type="text"
                        name="search"
                        defaultValue={searchTerm}
                        placeholder="Search by books title..."
                        className="w-full pl-14 pr-6 py-4 md:py-6 bg-[#112240] border-2 border-gray-700 focus:border-purple-500 rounded-2xl text-white outline-none transition-all shadow-2xl placeholder:text-gray-500 text-lg"
                    />
                    <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 text-2xl transition-colors" />
                    {selectedCategory && (
                        <input type="hidden" name="category" value={selectedCategory} />
                    )}

                    <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 md:py-3 rounded-xl font-bold transition-all active:scale-95">
                        Search
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="col-span-12 lg:col-span-2">
                    <BookDetailsLeft categories={categories} activeId={selectedCategory} />
                </div>
                <div className="col-span-12 lg:col-span-10">
                    <h2 className={`font-bold flex items-center text-2xl md:text-4xl bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent mb-8 
                        ${searchTerm ? "justify-center lg:justify-start" : "justify-center"}`}>
                        {searchTerm ? `Results for "${searchTerm}"` : "Books by Category"}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <AllBooks key={book.id} book={book} />
                            ))
                        ) : (
                            <div className="col-span-full">
                                <h2 className="font-bold text-3xl text-center my-20 text-gray-500">
                                    No books found matching your search!
                                </h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllBooksPage;


