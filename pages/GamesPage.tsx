
import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import { GAMES } from '../constants';
import type { GameCategory } from '../types';

const gameCategories: { key: GameCategory; name: string }[] = [
    { key: 'popular', name: 'Popular' },
    { key: 'lottery', name: 'Lottery' },
    { key: 'slots', name: 'Slots' },
    { key: 'kerala', name: 'Kerala' },
    { key: 'casino', name: 'Casino' },
    { key: 'rummy', name: 'Rummy' },
    { key: 'original', name: 'Original' },
    { key: 'fishing', name: 'Fishing' },
    { key: 'sports', name: 'Sports' },
];

const GamesPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<GameCategory>('popular');

    const filteredGames = GAMES.filter(game => game.category === selectedCategory);

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4 pl-4 border-l-4 border-yellow-400">Game Library</h1>
                <p className="text-slate-400 max-w-2xl mb-12">
                    Explore our diverse collection of high-payout games. Your next big win is just a click away.
                </p>

                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    {gameCategories.map(category => (
                        <button
                            key={category.key}
                            onClick={() => setSelectedCategory(category.key)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 border-2 ${
                                selectedCategory === category.key
                                    ? 'bg-yellow-500 border-yellow-500 text-gray-900 shadow-md shadow-yellow-500/30'
                                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                            }`}
                            aria-pressed={selectedCategory === category.key}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                     {filteredGames.length > 0 ? (
                        filteredGames.map(game => (
                            <GameCard key={game.id} game={game} />
                        ))
                    ) : (
                        <p className="text-slate-400 col-span-full text-center">No games found in this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GamesPage;