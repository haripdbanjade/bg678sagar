import React, { useState } from 'react';
import Button from './Button';

const Promotions: React.FC = () => {
    // Static assets
    const wheelImageUrl = "https://i.imgur.com/bO6sYv8.png";
    const pointerImageUrl = "https://i.imgur.com/Y17o5O9.png"; // Red pointer

    // Configuration
    const prizes = [
        'Jackpot!', '500 Coins', 'Try Again', 'Free Spin',
        'Mystery Box', '100 Coins', '2x Multiplier', 'Bonus Game'
    ];
    const segmentDegrees = 360 / prizes.length;
    const animationDuration = 5000; // in milliseconds
    const animationTimingFunction = 'cubic-bezier(0.1, 0.7, 0.3, 1)'; // Custom ease-out

    // State
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);

    const handleSpin = () => {
        if (isSpinning) return;

        setIsSpinning(true);
        
        const randomSpins = Math.floor(Math.random() * 5) + 5; // 5 to 9 full spins
        const randomStopDegree = Math.floor(Math.random() * 360);
        
        // Add to the current rotation to ensure it always spins forward
        const newRotation = rotation + (randomSpins * 360) + randomStopDegree;
        setRotation(newRotation);
    };

    const handleTransitionEnd = () => {
        // This event fires when the spinning animation concludes.
        if (!isSpinning) return; // Ignore any other transitions

        // The actual final rotation value from state
        const finalRotation = rotation;
        
        // Figure out the prize based on the final angle
        const finalAngle = finalRotation % 360;
        const winningSegmentAngle = (360 - finalAngle) % 360;
        const winningIndex = Math.floor(winningSegmentAngle / segmentDegrees);
        
        // Open the sign-up link in a new tab FIRST to avoid pop-up blockers
        window.open('https://www.funxxyfe51.com/#/pages/login/register?invitationCode=5097269017', '_blank');

        // THEN show the alert
        alert(`Congratulations! You won: ${prizes[winningIndex]}`);

        // Reset for the next spin
        setIsSpinning(false);
        
        // Normalize the rotation angle so it doesn't grow infinitely large.
        // This is done after the alert and after isSpinning is false, so the transition is 'none'.
        const normalizedRotation = finalRotation % 360;
        setRotation(normalizedRotation);
    };

    return (
        <section className="container mx-auto px-6">
            <div className="bg-gray-900/50 rounded-xl border border-slate-800 overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-12 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Spin the <span className="text-yellow-400">Fortune Wheel!</span>
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-md mx-auto md:mx-0">
                            Feeling lucky? Take a spin on our daily Fortune Wheel for a chance to win exclusive bonuses, free spins, and even massive cash prizes. Your next big win is just a spin away!
                        </p>
                        <Button onClick={handleSpin} disabled={isSpinning}>
                            {isSpinning ? 'Spinning...' : 'Spin Now & Win'}
                        </Button>
                    </div>
                    <div className="relative h-80 md:h-full flex items-center justify-center bg-gray-900 p-4">
                         <div className="relative w-64 h-64 md:w-80 md:h-80">
                             <img
                                src={pointerImageUrl}
                                alt="Pointer"
                                className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-16 z-10"
                            />
                            <img 
                                src={wheelImageUrl} 
                                alt="Fortune wheel" 
                                className="w-full h-full object-contain"
                                style={{
                                    transform: `rotate(${rotation}deg)`,
                                    transition: isSpinning 
                                        ? `transform ${animationDuration / 1000}s ${animationTimingFunction}` 
                                        : 'none',
                                }}
                                onTransitionEnd={handleTransitionEnd}
                            />
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Promotions;