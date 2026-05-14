
import AllBooks from "@/app/components/HomePage/AllBooks";
import { getBookDetailsById, getBooks, getCategories } from "@/lib/data";
import PricingPage from "../components/HomePage/PricingSection";
import ReviewPage from "../components/HomePage/ReviewPage";


const AllBooksPage = async ({ searchParams }) => {
    const query = await searchParams;
    const selectedCategory = query?.category;

    let books = [];

    if (selectedCategory) {
        books = await getBooksByCategoryId(selectedCategory);
    } else {
        const allBooks = await getBooks();
        books = allBooks.slice(5, 9);
    }


    return (
        <div>
            <div className="container mx-auto gap-4 my-[60px]">
                <div className="">
                    <div className='my-4 flex justify-start items-center'>
                        <h1 className='text-4xl bg-linear-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent'>Featured Books:</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div className="flex flex-col">
                <PricingPage />
                <ReviewPage />
            </div>
        </div>
    );
};

export default AllBooksPage;
