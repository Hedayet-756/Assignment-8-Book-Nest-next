
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/logo.png";

const FooterPage = () => {
    return (
        <footer className="bg-[#0A192F] border-t border-gray-800 pt-16 pb-8 mt-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-6">
                        <Image src={logo} alt="Logo" width={120} height={40} className="rounded-lg" />
                        <p className="text-gray-400 leading-relaxed">
                            You Stand to a world of knowledge. Borrow, read, and explore thousands of books from our digital library.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaFacebookF />, href: "" },
                                { icon: <FaTwitter />, href: "" },
                                { icon: <FaInstagram />, href: "" },
                                { icon: <FaLinkedinIn />, href: "" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-[#112240] flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300 border border-gray-700"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xl mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/" className="hover:text-purple-500 transition-colors">Home</Link></li>
                            <li><Link href="/all-books" className="hover:text-purple-500 transition-colors">All Books</Link></li>
                            <li><Link href="" className="hover:text-purple-500 transition-colors">Featured Books</Link></li>
                            <li><Link href="" className="hover:text-purple-500 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xl mb-6">Popular Categories</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/all-books?category=Story" className="hover:text-purple-500 transition-colors">Story</Link></li>
                            <li><Link href="/all-books?category=Tech" className="hover:text-purple-500 transition-colors">Technology</Link></li>
                            <li><Link href="/all-books?category=Science" className="hover:text-purple-500 transition-colors">Science</Link></li>
                            <li><Link href="" className="hover:text-purple-500 transition-colors">Self-Help</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-xl mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-purple-500 mt-1" />
                                <span>123 Library Lane, Knowledge City, <br /> Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-purple-500" />
                                <span>+880 1234-567890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-purple-500" />
                                <span>support@bookhaven.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} BookHaven Library. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;