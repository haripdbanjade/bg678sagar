
import React from 'react';
import type { Feature } from '../types';

interface FeatureCardProps {
    feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
    return (
        <div className="bg-gray-900/50 p-6 rounded-xl border border-slate-800 text-center flex flex-col items-center transition-all duration-300 hover:border-yellow-400/50 hover:bg-gray-900">
            <div className="mb-4 bg-gray-800 p-4 rounded-full border border-slate-700">
                {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm">{feature.description}</p>
        </div>
    );
};

export default FeatureCard;