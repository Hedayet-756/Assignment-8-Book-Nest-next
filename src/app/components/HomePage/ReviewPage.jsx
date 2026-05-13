import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const ReviewPage = () => {
    const Commentors = [
        {
            id: 1,
            name: "Mahmudul Haque Faruk",
            role: "Software Engineer",
            image: "https://i.pravatar.cc/150?u=alex",
            review: "This platform has completely changed how I access technical books. The user interface is incredibly smooth and the collection is top-notch!",
            rating: 5
        },
        {
            id: 2,
            name: "Sarah Jakir",
            role: "Literature Student",
            image: "https://i.pravatar.cc/150?u=sarah",
            review: "I love the personalized recommendations. I've discovered so many hidden gems in the Story category that I wouldn't have found elsewhere.",
            rating: 5
        },
        {
            id: 3,
            name: "Dewan Chowdhury",
            role: "Avid Reader",
            image: "https://i.pravatar.cc/150?u=david",
            review: "The borrowing process is seamless. The dark theme is very easy on the eyes during my late-night reading sessions. Highly recommended!",
            rating: 4
        }
    ];

    return (
        <section className="py-8 md:py-12 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent mb-4">
                        What Our Readers Say
                    </h2>
                    <div className="h-1 w-24 bg-purple-600 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {Commentors.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#112240] p-8 rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 relative group">

                            <FaQuoteLeft className="absolute top-6 right-8 text-purple-500/20 text-4xl group-hover:text-purple-500/40 transition-colors" />
                            <div className="flex gap-1 mb-6 text-yellow-500">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="text-gray-300 italic mb-8 leading-relaxed">
                                {item.review}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-14 h-14 rounded-full border-2 border-purple-500 p-0.5"
                                />
                                <div>
                                    <h4 className="text-white font-bold text-lg">{item.name}</h4>
                                    <p className="text-purple-400 text-sm">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewPage;