
import React from 'react';
import type { Game, Feature, GameCategory, LeaderboardEntry, WinningEntry } from '../types';

// Icons
export const ShieldCheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const GlobeIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.053.053a.5.5 0 010 .707l-3.5 3.5a.5.5 0 01-.707 0l-.053-.053a.5.5 0 010-.707l3.5-3.5a.5.5 0 01.707 0zM16.293 4.5l-.053.053a.5.5 0 000 .707l3.5 3.5a.5.5 0 00.707 0l.053-.053a.5.5 0 000-.707l-3.5-3.5a.5.5 0 00-.707 0z" />
    </svg>
);

export const GiftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 13l-4-4h8l-4 4z" />
    </svg>
);

export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 00-6-6" />
    </svg>
);

export const MegaphoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M7.25 3.106a.75.75 0 01.944-.447l8.25 4.125a.75.75 0 010 .894l-8.25 4.125a.75.75 0 01-.944-.447V3.106zM2.25 4.5a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H2.25zM2.25 8a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H2.25zm0 3.5a.75.75 0 000 1.5H3a.75.75 0 000-1.5H2.25z" />
    </svg>
);

// Data
export const FEATURES: Feature[] = [
    {
        title: "Instant & Secure Payouts",
        description: "Your earnings are protected with top-tier security, ensuring safe and lightning-fast withdrawals.",
        icon: <ShieldCheckIcon className="w-12 h-12 text-yellow-400" />,
    },
    {
        title: "Daily Jackpots & Bonuses",
        description: "Boost your gameplay with generous daily bonuses, free spins, and massive jackpot prizes.",
        icon: <GiftIcon className="w-12 h-12 text-yellow-400" />,
    },
    {
        title: "Compete & Win Globally",
        description: "Join a massive community of players to compete in exclusive tournaments for real rewards.",
        icon: <GlobeIcon className="w-12 h-12 text-yellow-400" />,
    },
    {
        title: "VIP Player Support",
        description: "Our dedicated VIP support team is available 24/7 to provide you with elite service.",
        icon: <UsersIcon className="w-12 h-12 text-yellow-400" />,
    },
];

const createGame = (id: number, title: string, genre: string, category: GameCategory, seed: string, jackpot: string): Game => ({
    id, title, genre, category, jackpot, imageUrl: `https://picsum.photos/seed/${seed}/400/400`
});

export const GAMES: Game[] = [
    // Popular
    createGame(1, 'Treasures of Aztec', 'Slot Game', 'popular', 'aztec', '₹1,50,000'),
    createGame(2, 'SevenSevenSeven', 'Slot Game', 'popular', 'sevensevenseven', '₹2,00,000'),
    createGame(3, 'Teen Patti', 'Card Game', 'popular', 'teenpatti', '₹95,000'),
    createGame(4, 'Super Ace', 'Slot Game', 'popular', 'superace', '₹1,20,000'),
    createGame(5, 'Mega Ace', 'Slot Game', 'popular', 'megaace', '₹3,50,000'),
    createGame(6, 'Boxing King', 'Slot Game', 'popular', 'boxingking', '₹80,000'),
    createGame(7, 'Golden Empire', 'Slot Game', 'popular', 'goldenempire', '₹2,10,000'),
    createGame(8, 'Super Ace Deluxe', 'Slot Game', 'popular', 'superacedeluxe', '₹1,80,000'),
    createGame(9, 'Money Pot', 'Slot Game', 'popular', 'moneypot', '₹4,00,000'),
    createGame(10, 'Golden Genie', 'Slot Game', 'popular', 'goldengenie', '₹2,25,000'),
    createGame(11, 'Treasure Raiders', 'Slot Game', 'popular', 'treasureraiders', '₹1,10,000'),
    createGame(12, 'Monkey King Fish', 'Fishing Game', 'popular', 'monkeykingfishing', '₹75,000'),

    // Lottery
    createGame(13, 'Mega Millions', 'Lottery', 'lottery', 'megamillions', '₹10,00,000'),
    createGame(14, 'Power Ball', 'Lottery', 'lottery', 'powerball', '₹15,00,000'),
    
    // Slots
    createGame(15, 'Pharaoh\'s Gold', 'Slot Machine', 'slots', 'pharaoh', '₹90,000'),
    createGame(16, 'Fruit Frenzy', 'Slot Machine', 'slots', 'fruit', '₹60,000'),
    createGame(17, 'Vegas Nights', 'Slot Machine', 'slots', 'vegas', '₹2,50,000'),

    // Kerala
    createGame(18, 'Kerala Lottery King', 'Lottery', 'kerala', 'keralaking', '₹5,00,000'),
    createGame(19, 'Malabar Riches', 'Card Game', 'kerala', 'malabar', '₹50,000'),

    // Casino
    createGame(20, 'Blackjack Classic', 'Card Game', 'casino', 'blackjack', 'Live Dealer'),
    createGame(21, 'Roulette Royale', 'Table Game', 'casino', 'roulette', 'Live Dealer'),
    createGame(22, 'Baccarat Supreme', 'Card Game', 'casino', 'baccarat', 'Live Dealer'),
    
    // Rummy
    createGame(23, 'Rummy Master', 'Card Game', 'rummy', 'rummymaster', '₹45,000'),
    createGame(24, 'Indian Rummy', 'Card Game', 'rummy', 'indianrummy', '₹55,000'),

    // Original
    createGame(25, 'BG768 Crash', 'Original Game', 'original', 'bgcrash', 'Multiplier'),
    createGame(26, 'Minesweeper+', 'Original Game', 'original', 'mines', '₹30,000'),

    // Fishing
    createGame(27, 'Ocean King', 'Fishing Game', 'fishing', 'oceanking', '₹85,000'),
    createGame(28, 'Fishing God', 'Fishing Game', 'fishing', 'fishinggod', '₹95,000'),

    // Sports
    createGame(29, 'Cricket Champions', 'Sports Betting', 'sports', 'cricket', 'Live Odds'),
    createGame(30, 'Football Stars', 'Sports Betting', 'sports', 'football', 'Live Odds'),
];

export const PROMO_IMAGES: string[] = [
    'https://i.imgur.com/3i4A3jX.png',
    'https://i.imgur.com/xQ7sB1g.png',
    'https://i.imgur.com/k2gY108.png',
    'https://i.imgur.com/vHq4gJ8.png',
    'https://i.imgur.com/4S9fO2d.png',
    'https://i.imgur.com/7R8tW6h.png'
];

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  { rank: 1, avatarUrl: 'https://picsum.photos/seed/leader1/100', name: 'Mem****21M', earnings: '₹7,142,199.30' },
  { rank: 2, avatarUrl: 'https://picsum.photos/seed/leader2/100', name: 'Mem****MYM', earnings: '₹7,104,483.85' },
  { rank: 3, avatarUrl: 'https://picsum.photos/seed/leader3/100', name: 'Mem****74A', earnings: '₹7,032,469.04' },
  { rank: 4, avatarUrl: 'https://picsum.photos/seed/leader4/100', name: 'Mem****882', earnings: '₹6,997,937.01' },
  { rank: 5, avatarUrl: 'https://picsum.photos/seed/leader5/100', name: 'Mem****RE2', earnings: '₹6,966,227.47' },
];

export const WINNING_FEED_DATA: WinningEntry[] = [
  { avatarUrl: 'https://picsum.photos/seed/winner1/100', name: 'Mem***U14', gameName: 'Cricket Champions', gameImageUrl: 'https://picsum.photos/seed/cricket/100/60', amount: '₹8,800.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner2/100', name: 'Mem***KBZ', gameName: 'Monkey King Fish', gameImageUrl: 'https://picsum.photos/seed/monkeykingfishing/100/60', amount: '₹3,500.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner3/100', name: 'Mem***OHZ', gameName: 'Super Ace', gameImageUrl: 'https://picsum.photos/seed/superace/100/60', amount: '₹1,800.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner4/100', name: 'Mem***9FO', gameName: 'Vegas Nights', gameImageUrl: 'https://picsum.photos/seed/vegas/100/60', amount: '₹2,400.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner5/100', name: 'Mem***FU6', gameName: 'Baccarat Supreme', gameImageUrl: 'https://picsum.photos/seed/baccarat/100/60', amount: '₹1,500.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner6/100', name: 'Mem***LPA', gameName: 'Treasures of Aztec', gameImageUrl: 'https://picsum.photos/seed/aztec/100/60', amount: '₹5,250.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner7/100', name: 'Mem***QWE', gameName: 'Rummy Master', gameImageUrl: 'https://picsum.photos/seed/rummymaster/100/60', amount: '₹950.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner8/100', name: 'Mem***RTY', gameName: 'BG768 Crash', gameImageUrl: 'https://picsum.photos/seed/bgcrash/100/60', amount: '₹12,300.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner9/100', name: 'Mem***UIO', gameName: 'Golden Empire', gameImageUrl: 'https://picsum.photos/seed/goldenempire/100/60', amount: '₹4,100.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner10/100', name: 'Mem***HJK', gameName: 'Teen Patti', gameImageUrl: 'https://picsum.photos/seed/teenpatti/100/60', amount: '₹2,200.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner11/100', name: 'Mem***BNM', gameName: 'Fruit Frenzy', gameImageUrl: 'https://picsum.photos/seed/fruit/100/60', amount: '₹750.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner12/100', name: 'Mem***CXZ', gameName: 'Fishing God', gameImageUrl: 'https://picsum.photos/seed/fishinggod/100/60', amount: '₹6,000.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner13/100', name: 'Mem***VFR', gameName: 'Mega Ace', gameImageUrl: 'https://picsum.photos/seed/megaace/100/60', amount: '₹1,900.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner14/100', name: 'Mem***EDC', gameName: 'Boxing King', gameImageUrl: 'https://picsum.photos/seed/boxingking/100/60', amount: '₹3,300.00' },
  { avatarUrl: 'https://picsum.photos/seed/winner15/100', name: 'Mem***TGB', gameName: 'Football Stars', gameImageUrl: 'https://picsum.photos/seed/football/100/60', amount: '₹11,500.00' },
];