import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import { WINNING_FEED_DATA } from '../constants';
import { MegaphoneIcon } from '../constants';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [tickerIndex, setTickerIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTickerIndex(prevIndex => (prevIndex + 1) % WINNING_FEED_DATA.length);
        }, 6000); // Change every 6 seconds, matches the CSS animation
        return () => clearInterval(interval);
    }, []);

    const navLinkClasses = "px-4 py-2 text-slate-300 hover:text-yellow-400 transition-colors duration-300";
    const activeLinkClasses = "text-yellow-400";
    const currentWinner = WINNING_FEED_DATA[tickerIndex];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-wider text-white">
                    BG<span className="text-yellow-400">678</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-2">
                    <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} end>Home</NavLink>
                    <NavLink to="/games" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Games</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Contact</NavLink>
                </nav>
                <div>
                     <a href="https://www.funxxyfe51.com/#/pages/login/register?invitationCode=5097269017" target="_blank" rel="noopener noreferrer">
                        <Button>Sign Up</Button>
                    </a>
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

        </header>
    );
};

export default Header;
