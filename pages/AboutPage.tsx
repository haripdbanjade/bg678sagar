
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="pt-32 pb-16 bg-gray-950">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About BG768</h1>
                <p className="text-lg text-yellow-400 mb-12">Connecting the World Through Competitive Gaming</p>
                
                <div className="max-w-4xl mx-auto text-left space-y-8 text-slate-300">
                    <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                        <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
                        <p>
                            To create a fair, competitive, and engaging online gaming platform that brings people together. We believe in the power of gaming to build communities, foster friendships, and create unforgettable winning experiences.
                        </p>
                    </div>

                    <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                        <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
                        <p>
                            To be the most trusted and player-centric gaming destination in the world. We are constantly innovating, pushing the boundaries of technology to deliver a seamless, secure, and exhilarating gaming experience for all our players.
                        </p>
                    </div>

                    <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
                        <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
                        <p>
                            Founded by a group of passionate gamers, BG768 was born from a desire to build a better online gaming world. Frustrated by unfair practices and lackluster platforms, we set out to create a space where skill is rewarded, security is paramount, and the community comes first.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;