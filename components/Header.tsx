import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import { WINNING_FEED_DATA } from '../constants';
import { MegaphoneIcon } from '../constants';

const HamburgerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [tickerIndex, setTickerIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTickerIndex(prevIndex => (prevIndex + 1) % WINNING_FEED_DATA.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const navLinkClasses = "px-4 py-2 text-slate-300 hover:text-yellow-400 transition-colors duration-300";
    const activeLinkClasses = "text-yellow-400";
    const currentWinner = WINNING_FEED_DATA[tickerIndex];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-wider text-white">
                    BG<span className="text-yellow-400">768</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-2">
                    <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} end>Home</NavLink>
                    <NavLink to="/games" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Games</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Contact</NavLink>
                </nav>
                <div className="hidden md:block">
                     <a href="https://www.funxxyfe51.com/#/pages/login/register?invitationCode=5097269017" target="_blank" rel="noopener noreferrer">
                        <Button>Sign Up</Button>
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(true)} className="text-white p-2" aria-label="Open menu">
                        <HamburgerIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
            
            <div className="bg-gray-900/80 backdrop-blur-sm border-y border-yellow-400/20">
                <div className="container mx-auto px-6 h-10 relative overflow-hidden">
                    {currentWinner && (
                        <div key={tickerIndex} className="absolute inset-0 flex items-center animate-ticker-item">
                            <MegaphoneIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            <p className="text-sm text-slate-300 truncate text-shadow-pop">
                                <span className="font-bold text-white">{currentWinner.name}</span>
                                <span className="text-slate-400"> just won </span>
                                <span className="font-bold text-green-400">{currentWinner.amount}</span>
                                <span className="text-slate-400 hidden sm:inline"> in {currentWinner.gameName}</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[100] bg-gray-950/95 backdrop-blur-lg flex flex-col animate-fade-in-up">
                    <div className="flex justify-between items-center p-6 border-b border-slate-800">
                         <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold tracking-wider text-white">
                            BG<span className="text-yellow-400">768</span>
                        </Link>
                        <button onClick={() => setIsMenuOpen(false)} className="text-white p-2" aria-label="Close menu">
                            <CloseIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <nav className="flex flex-col items-center justify-center flex-grow gap-8">
                        <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate-300 hover:text-yellow-400 transition-colors">Home</NavLink>
                        <NavLink to="/games" onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate-300 hover:text-yellow-400 transition-colors">Games</NavLink>
                        <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate-300 hover:text-yellow-400 transition-colors">About</NavLink>
                        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl text-slate-300 hover:text-yellow-400 transition-colors">Contact</NavLink>
                        <a href="https://www.funxxyfe51.com/#/pages/login/register?invitationCode=5097269017" target="_blank" rel="noopener noreferrer" className="mt-4" onClick={() => setIsMenuOpen(false)}>
                            <Button>Sign Up Now</Button>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
