import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Block */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src={Logo}
                                alt="Dev Stack Logo"
                                className="h-8 brightness-200"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>
                        <div className="flex gap-4 text-gray-600">
                            <a
                                href="https://github.com/Nafiz-365/Dev-Stack"
                                className="hover:text-gray-900 transition-colors"
                                target="_blank"
                            >
                                <FaGithub></FaGithub>
                            </a>
                            <a
                                href="#"
                                className="hover:text-gray-900 transition-colors"
                            >
                                <FaLinkedin></FaLinkedin>
                            </a>
                            <a
                                href="#"
                                className="hover:text-gray-900 transition-colors"
                            >
                                <FaTwitter></FaTwitter>
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 uppercase text-sm">
                            Product
                        </h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-600">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-900 transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-900 transition-colors"
                                >
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-900 transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 uppercase text-sm">
                            Company
                        </h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-600">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-900 transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-900 transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-900 transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-gray-900 font-semibold mb-4 uppercase text-sm">
                            Legal
                        </h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-600">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-900 transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-gray-900 transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-gray-600">
                    <p>&copy; 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a
                            href="#"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-900 transition-colors"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
