
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900/50 border-t border-slate-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">BG<span className="text-yellow-400">768</span></h3>
                        <p className="text-slate-400">The ultimate destination for online gaming. Join our community and experience the thrill of winning.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-200 mb-4">Quick Links</h4>
                        <ul>
                            <li className="mb-2"><Link to="/" className="text-slate-400 hover:text-yellow-400 transition-colors">Home</Link></li>
                            <li className="mb-2"><Link to="/games" className="text-slate-400 hover:text-yellow-400 transition-colors">Games</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-slate-400 hover:text-yellow-400 transition-colors">About Us</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-slate-400 hover:text-yellow-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-200 mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            {/* Placeholder for social icons */}
                            <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Twitter</a>
                            <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Discord</a>
                            <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">YouTube</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} BG768 Gaming. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;