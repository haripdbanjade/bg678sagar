import React from 'react';
import GameCard from '../components/GameCard';
import FeatureCard from '../components/FeatureCard';
import { GAMES, FEATURES } from '../constants';
import HeroSlider from '../components/HeroSlider';
import EarningsChart from '../components/EarningsChart';
import WinningFeed from '../components/WinningFeed';
import Promotions from '../components/Promotions';
import TrustAndInfo from '../components/TrustAndInfo';

const HomePage: React.FC = () => {
    const featuredGames = GAMES.filter(game => game.category === 'popular').slice(0, 12);

    return (
        <div className="space-y-24 md:space-y-32 mb-24">
            {/* Hero Slider */}
            <HeroSlider />

            {/* Featured Games Section */}
            <section className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-yellow-400 mb-8 pl-4 border-l-4 border-yellow-400">
                    Top Earning Games
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {featuredGames.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </section>

            {/* Earnings Chart Section */}
            <EarningsChart />

            {/* Winning Feed Section */}
            <WinningFeed />

            {/* Features Section */}
            <section className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Your Path to <span className="text-yellow-400">Winning</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
            </section>

            {/* Promotions Section */}
            <Promotions />

            {/* Trust and Info Section */}
            <TrustAndInfo />
        </div>
    );
};

export default HomePage;
