
import React, { useState, useEffect } from 'react';
import { LEADERBOARD_DATA } from '../constants';
import type { LeaderboardEntry } from '../types';

const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M11 3a1 1 0 100 2h2.586l-4.293 4.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V9a1 1 0 10-2 0v6H5V5h6a1 1 0 100-2H5z" />
    </svg>
);

const CrownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M18.5 7.5a.75.75 0 00.75-.75V4.5a.75.75 0 00-1.5 0v1.688L13.7 3.53a.75.75 0 00-.9 0L8.75 6.188V4.5a.75.75 0 00-1.5 0v2.25a.75.75 0 00.75.75h.39l-2.08 4.158a.75.75 0 00.67 1.092h11.52a.75.75 0 00.67-1.092L18.11 7.5H18.5z" clipRule="evenodd" />
    </svg>
);


const EarningsChart: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLeaderboardData(LEADERBOARD_DATA);
            setLoading(false);
        }, 1500); // Simulate network delay
        return () => clearTimeout(timer);
    }, []);

    const topThree = leaderboardData.slice(0, 3);
    const others = leaderboardData.slice(3);
    
    const getPodiumOrder = (data: LeaderboardEntry[]) => {
        const rank1 = data.find(p => p.rank === 1);
        const rank2 = data.find(p => p.rank === 2);
        const rank3 = data.find(p => p.rank === 3);
        return [rank2, rank1, rank3].filter(Boolean) as LeaderboardEntry[];
    };
    
    const podiumOrder = getPodiumOrder(topThree);

    const rankStyles: { [key: number]: { ring: string; gradient: string; text: string; crown: string; barHeight: string } } = {
        1: { ring: 'border-yellow-400', gradient: 'from-yellow-400 to-yellow-600', text: 'text-yellow-300', crown: 'text-yellow-400', barHeight: 'h-40 md:h-48' },
        2: { ring: 'border-slate-400', gradient: 'from-slate-400 to-slate-600', text: 'text-slate-300', crown: 'text-slate-400', barHeight: 'h-32 md:h-40' },
        3: { ring: 'border-orange-400', gradient: 'from-orange-400 to-orange-600', text: 'text-orange-300', crown: 'text-orange-400', barHeight: 'h-24 md:h-32' },
    };

    const LoadingSkeleton: React.FC = () => (
        <div className="animate-pulse">
            <div className="flex justify-center items-end gap-2 md:gap-4 text-center">
                {/* 2nd place */}
                <div className="w-1/4 flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-700 mb-2"></div>
                    <div className="h-4 w-20 bg-slate-700 rounded mx-auto mb-1"></div>
                    <div className="h-3 w-24 bg-slate-700 rounded mx-auto mb-2"></div>
                    <div className="h-32 md:h-40 w-full bg-slate-700 rounded-t-lg"></div>
                </div>
                {/* 1st place */}
                <div className="w-1/3 flex flex-col items-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-700 mb-2"></div>
                    <div className="h-4 w-24 bg-slate-700 rounded mx-auto mb-1"></div>
                    <div className="h-3 w-28 bg-slate-700 rounded mx-auto mb-2"></div>
                    <div className="h-40 md:h-48 w-full bg-slate-700 rounded-t-lg"></div>
                </div>
                {/* 3rd place */}
                <div className="w-1/4 flex flex-col items-center">
                     <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-700 mb-2"></div>
                    <div className="h-4 w-20 bg-slate-700 rounded mx-auto mb-1"></div>
                    <div className="h-3 w-24 bg-slate-700 rounded mx-auto mb-2"></div>
                    <div className="h-24 md:h-32 w-full bg-slate-700 rounded-t-lg"></div>
                </div>
            </div>
            <div className="mt-8 space-y-3">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center bg-gray-800/60 p-3 rounded-lg">
                        <div className="w-6 h-6 bg-slate-700 rounded mr-4"></div>
                        <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                        <div className="w-28 h-4 bg-slate-700 rounded ml-4"></div>
                        <div className="w-32 h-6 bg-slate-700 rounded-full ml-auto"></div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="container mx-auto px-6">
            <div className="bg-gray-900/50 rounded-xl border border-slate-800 p-6">
                <div className="flex items-center mb-8">
                    <TrophyIcon className="w-8 h-8 text-yellow-400" />
                    <h2 className="text-2xl md:text-3xl font-bold ml-3 text-white">Today's Top Earners</h2>
                </div>
                
                {loading ? <LoadingSkeleton /> : (
                  <>
                    <div className="flex justify-center items-end gap-2 md:gap-4 text-center text-white">
                        {podiumOrder.map((player) => {
                            const style = rankStyles[player.rank];
                            const avatarSize = player.rank === 1 ? 'w-20 h-20 md:w-24 md:h-24' : 'w-16 h-16 md:w-20 md:h-20';
                            return (
                                <div key={player.rank} className={`${player.rank === 1 ? 'w-1/3' : 'w-1/4'} flex flex-col items-center`}>
                                    <div className="relative">
                                        <img src={player.avatarUrl} alt={player.name} className={`${avatarSize} rounded-full border-4 ${style.ring} shadow-lg`} />
                                        {player.rank === 1 && <CrownIcon className={`absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-8 ${style.crown}`} />}
                                    </div>
                                    <p className="font-bold text-sm md:text-base mt-2 truncate w-full">{player.name}</p>
                                    <p className={`font-semibold text-xs md:text-sm ${style.text}`}>{player.earnings}</p>
                                    <div className={`w-full mt-2 bg-gradient-to-b ${style.gradient} ${style.barHeight} rounded-t-lg flex items-center justify-center`}>
                                        <span className="text-3xl md:text-5xl font-black text-white/50">{player.rank}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-8 space-y-3">
                        {others.map(player => (
                            <div key={player.rank} className="flex items-center bg-gray-800/60 hover:bg-gray-800/90 transition-colors p-3 rounded-lg">
                                <span className="font-bold text-slate-400 w-6 text-center text-lg">{player.rank}</span>
                                <img src={player.avatarUrl} alt={player.name} className="w-10 h-10 rounded-full mx-4" />
                                <span className="font-semibold text-white">{player.name}</span>
                                <span className="ml-auto bg-green-500/20 text-green-300 text-sm font-bold px-4 py-1.5 rounded-full">{player.earnings}</span>
                            </div>
                        ))}
                    </div>
                  </>
                )}
            </div>
        </section>
    );
};

export default EarningsChart;
