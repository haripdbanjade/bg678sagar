
import React, { useState, useEffect } from 'react';
import { WINNING_FEED_DATA } from '../constants';
import type { WinningEntry } from '../types';

const FeedIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v10a1 1 0 100 2h10a1 1 0 100-2V5a1 1 0 000-2H3zm3 2a1 1 0 011-1h2a1 1 0 110 2H7a1 1 0 01-1-1zm-1 4a1 1 0 100 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
    </svg>
);

const WinningFeed: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [scrollingFeedData, setScrollingFeedData] = useState<WinningEntry[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            // Double the data for a seamless loop
            const doubledData = [...WINNING_FEED_DATA, ...WINNING_FEED_DATA];
            setScrollingFeedData(doubledData);
            setLoading(false);
        }, 2000); // Simulate network delay
        return () => clearTimeout(timer);
    }, []);

    const LoadingSkeleton: React.FC = () => (
        <div className="space-y-3 animate-pulse">
            {[...Array(5)].map((_, index) => (
                <div key={index} className="bg-slate-800/60 p-3 rounded-lg flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex-shrink-0"></div>
                    <div className="flex-grow space-y-2">
                         <div className="h-4 w-3/4 bg-slate-700 rounded"></div>
                    </div>
                    <div className="w-20 h-12 bg-slate-700 rounded-md flex-shrink-0"></div>
                </div>
            ))}
        </div>
    );

    return (
        <section className="container mx-auto px-6">
            <div className="bg-gray-900/50 rounded-xl border border-slate-800 p-6">
                <div className="flex items-center mb-6">
                    <FeedIcon className="w-8 h-8 text-green-400" />
                    <h2 className="text-2xl md:text-3xl font-bold ml-3 text-white">Live Winning Feed</h2>
                </div>
                {loading ? <LoadingSkeleton /> : (
                    <div className="h-96 overflow-hidden relative group">
                        <div className="animate-scroll-up group-hover:[animation-play-state:paused]">
                            {scrollingFeedData.map((entry, index) => (
                                <div 
                                    key={index} 
                                    className="bg-slate-800/50 p-3 mb-3 rounded-lg flex items-center gap-4 border border-transparent hover:border-green-400/50 transition-colors duration-300"
                                >
                                    <img src={entry.avatarUrl} alt={entry.name} className="w-12 h-12 rounded-full flex-shrink-0" />
                                    <div className="flex-grow text-slate-300 text-sm md:text-base">
                                        <span className="font-bold text-white">{entry.name}</span>
                                        <span> just won </span> 
                                        <span className="font-bold text-green-400">{entry.amount}</span>
                                        <span> in {entry.gameName}</span>
                                    </div>
                                    <img src={entry.gameImageUrl} alt={entry.gameName} className="w-20 h-12 object-cover rounded-md flex-shrink-0" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WinningFeed;