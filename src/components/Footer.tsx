import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Block */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src={Logo} alt="Dev Stack Logo" className="h-8 brightness-200" />
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            <a href="#" className="hover:text-white transition-colors"><FaGithub></FaGithub></a>
                            <a href="#" className="hover:text-white transition-colors"><FaTwitter></FaTwitter></a>
                            <a href="#" className="hover:text-white transition-colors"><FaLinkedin></FaLinkedin></a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase text-sm">Product</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Technologies</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase text-sm">Company</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase text-sm">Legal</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
