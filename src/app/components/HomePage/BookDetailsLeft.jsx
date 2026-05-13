import Link from "next/link";

const BookDetailsLeft = async ({ categories, activeId }) => {


    return (
        <div>
            <h2 className="font-bold text-lg flex justify-center items-center bg-linear-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent">All categories</h2>
            <ul className="flex flex-col gap-3 mt-6">
                {categories?.map((category_name, index) => { // categories.news_category এর বদলে
                    return (
                        <li
                            key={index}
                            className={`${activeId === category_name
                                ? "bg-purple-500 text-white"
                                : "bg-[#1d2d50] text-gray-300 hover:bg-[#233554]"} 
    rounded-md font-bold text-center text-md transition-all`}
                        >
                            <Link href={`/all-books?category=${category_name}`} className="block p-2">
                                {" "}
                                {category_name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default BookDetailsLeft;
{/* <div>
    <h2 className="font-bold text-lg">All categories</h2>
    <ul className="flex flex-col gap-3 mt-6">
        {categories.news_category.map((category) => {
            return (
                <li
                    key={category.category_id}
                    className={`
                ${activeId === category.category_id && "bg-purple-500 text-white"}
                  rounded-md font-bold text-center text-md`}
                >
                    <Link
                        href={`/category/${category.category_id}`}
                        className="block  p-2"
                    >
                        {" "}
                        {category.category_name}
                    </Link>
                </li>
            );
        })}
    </ul>
</div> */}