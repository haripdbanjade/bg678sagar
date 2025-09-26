import React from 'react';
import type { Game } from '../types';

const CoinIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clipRule="evenodd" fillRule="evenodd" />
    </svg>
);

const PlayIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
    </svg>
);

interface GameCardProps {
    game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    return (
        <a 
            href="https://www.funxxyfe51.com/#/pages/login/register?invitationCode=5097269017" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group relative overflow-hidden rounded-xl shadow-lg"
        >
            <img 
                src={game.imageUrl} 
                alt={game.title} 
                className="w-full h-auto object-cover aspect-square transition-transform duration-500 ease-in-out group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:bg-black/70 transition-colors duration-300"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl group-hover:ring-2 group-hover:ring-yellow-400 transition-all duration-300"></div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayIcon className="w-16 h-16 text-white/70 transform transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg truncate group-hover:text-yellow-400 transition-colors duration-300">{game.title}</h3>
                {game.jackpot && (
                    <div className="flex items-center space-x-1 mt-1">
                        <CoinIcon className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs font-semibold text-yellow-400 tracking-wider">{game.jackpot}</span>
                    </div>
                )}
            </div>
        </a>
    );
};

export default GameCard;
