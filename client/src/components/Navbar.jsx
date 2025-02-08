import { useState } from "react";
import { Link } from 'react-router-dom';
import { Typography } from "@material-tailwind/react";
import User from './images/user.png';
import Bot from './images/Bot.jpeg';
import { useRef } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const topRef = useRef(null);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (

        <nav className="navbar fixed top-0 left-0 w-full bg-black text-white p-4 shadow-md">
            <div ref={topRef}></div> {/* Reference to the top of the page */}
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">

                {/* Left Section (Logo & Name) */}
                <div className="flex items-center space-x-2 mt-1">
                    <Link to={'/'}>
                    <img src={Bot} onClick={scrollToTop} className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" alt="Logo"/>
                    </Link>
                    <Typography
                        as="span"
                        className="text-lg sm:text-xl font-semibold cursor-pointer"
                        onClick={scrollToTop} // Click to scroll to the top
                    >
                        TheraBot
                    </Typography>
                </div>

                {/* Center Section (Navbar Links for Large Screens) */}
                <ul className="hidden md:flex gap-6">
                    {["Home", "About", "Services", "Contact"].map((item, index) => (
                        <li key={index} className="py-2">
                            <Link to="" className="hover:text-blue-500 transition">{item}</Link>
                        </li>
                    ))}
                </ul>

                {/* Right Section (User Profile & Mobile Menu) */}
                <div className="flex items-center space-x-4">

                    {/* User Profile (Dropdown Toggle) */}
                    <div className="relative">
                        <img
                            src={User}
                            alt="User"
                            className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full cursor-pointer"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        />
                        {dropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Email: user@example.com</li>
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Sign In</li>
                                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button with Navbar Color */}
                    <div className="relative md:hidden">
                        <button
                            className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            ☰
                        </button>

                        {/* Mobile Navbar Links (Appears Below Button) */}
                        {isOpen && (
                            <ul className="absolute right-0 top-full mt-2 w-40 bg-black text-white text-center p-4 rounded-lg shadow-lg z-50">
                                {["Home", "About", "Services", "Contact"].map((item, index) => (
                                    <li key={index} className="py-2">
                                        <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-blue-500 transition">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

