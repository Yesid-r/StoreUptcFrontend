import React, { useState } from 'react';
import logo from '../assets/logo.png';
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { name: "Inicio", path: "/" },
        { name: "Products", path: "/productos" },
        { name: "Login", path: "/login" },
        { name: "Register", path: "/register" },

        
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-navbar py-4 bg-slate-900" >
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-gray-100 font-bold text-xl">
                    <img src={logo} className="w-18 h-8 mr-2"
                        alt="Logo"></img>
                </div>
                <div className="hidden md:flex space-x-4">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.path}
                            className="text-gray-100 hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-gray-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="h-full w-72 md:hidden absolute top-16  bg-opacity-60 bg-slate-950">
                    <div className="container mx-auto py-4">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.path}
                                className="block text-white hover:text-gray-700 py-2"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
