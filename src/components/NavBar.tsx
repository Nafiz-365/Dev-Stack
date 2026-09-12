import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import Logo from '../assets/logo-text.png';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // console.log(isMenuOpen);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-2xl"
                    onClick={() => handleToggleMenu()}
                >
                    {isMenuOpen ? <IoClose></IoClose> : <HiMenuAlt1></HiMenuAlt1>}
                </button>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Dev Stack Logo" className="h-8" />
                </div>

                {/* Nav Links - Desktop */}
                <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <li><a href="#" className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold">Home</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                </ul>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Sign In</button>
                    <button className="text-sm font-medium text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-2 rounded-full hover:opacity-90 transition-opacity">Sign Up</button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
                    <ul className="flex flex-col gap-4 text-sm font-medium text-gray-600">
                        <li><a href="#" className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold">Home</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default NavBar;
