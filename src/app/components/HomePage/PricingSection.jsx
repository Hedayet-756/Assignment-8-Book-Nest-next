import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PricingPage = () => {
    const plans = [
        {
            name: "Basic",
            price: "00",
            features: ["Free 5 Books!", "standerd Support", "Read Online", "1 Device Login"],
            isPremium: false
        },
        {
            name: "Pro",
            price: "19",
            features: ["You Can Read Any Book", "Priority Support", "Can Read Offline Mode", "3 Device Login", "Can Read Add Free Mode"],
            isPremium: true
        },
        {
            name: "Elite",
            price: "49",
            features: ["Have Opportunity Read Latest Books", "Support 27/7", "Get Discout on HardCopy!", "Unlimited Device Login", "Audio Books Free!!!!!"],
            isPremium: false
        }
    ];

    return (
        <section className="py-20 bg-transparent">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent mb-4">
                        Choose Your Perfect Plan
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Select 5 Books to Your Habit and acquire Your Knowlodge.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 transform hover:-translate-y-2 ${plan.isPremium
                                ? "bg-[#112240] border-purple-500 shadow-2xl shadow-purple-500/20 scale-105"
                                : "bg-[#0A192F] border-gray-800 hover:border-gray-700"
                                }`}
                        >
                            {plan.isPremium && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                                    Most Popular
                                </span>
                            )}

                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                                <span className="text-gray-500">/M</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <FaCheckCircle className={plan.isPremium ? "text-purple-500" : "text-gray-500"} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${plan.isPremium
                                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-600/30"
                                : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
                                }`}>
                                Subscribe Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPage;