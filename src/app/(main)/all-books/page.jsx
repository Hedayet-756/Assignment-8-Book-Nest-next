
import AllBooks from "@/app/components/HomePage/AllBooks";
import BookDetailsLeft from "@/app/components/HomePage/BookDetailsLeft";
import { getBooks, getBooksByCategoryId, getCategories } from "@/lib/data";


const AllBooksPage = async ({ searchParams }) => {
    console.log(searchParams, 'searchParams')

    const query = await searchParams;
    const selectedCategory = query.category;

    const categories = await getCategories();
    let books = [];

    if (selectedCategory) {
        books = await getBooksByCategoryId(selectedCategory);
    } else {
        books = await getBooks();
    }


    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
            <div className=" col-span-2">
                <BookDetailsLeft categories={categories} activeId={selectedCategory} />
            </div>

            <div className="col-span-10">
                <h2 className="font-bold flex justify-center items-center text-4xl bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent mb-8">
                    Books by Category
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.length > 0 ? (
                        books.map((book) => (
                            <AllBooks key={book.id} book={book} />
                        ))
                    ) : (
                        <div className="col-span-full">
                            <h2 className="font-bold text-4xl text-center my-20 text-gray-400">
                                NO books found!
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;
