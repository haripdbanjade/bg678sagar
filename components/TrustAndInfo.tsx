import React from 'react';

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const DiamondIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path d="M10 2.5l-6.5 7.5 6.5 7.5 6.5-7.5-6.5-7.5z" />
    </svg>
);

const paymentMethods = [
    { name: 'G Pay', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png' },
    { name: 'Paytm', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/512px-Paytm_Logo_%28standalone%29.svg.png' },
    { name: 'PhonePe', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/512px-PhonePe_Logo.svg.png' },
    { name: 'UPI', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/UPI-Logo-vector.svg/512px-UPI-Logo-vector.svg.png' },
];

const gamingLicenses = [
    { name: 'Gaming Curacao', logoUrl: 'https://i.imgur.com/KqW1G5d.png' },
    { name: 'Kerala Lotteries', logoUrl: 'https://i.imgur.com/gK6Zz0w.png' },
];


const TrustAndInfo: React.FC = () => {
    return (
        <section className="container mx-auto px-6">
            <div className="bg-gray-900/50 rounded-xl border border-slate-800 p-6 md:p-8 grid md:grid-cols-2 gap-8 md:gap-12">
                
                {/* Left Column */}
                <div>
                    {/* Payment Method */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-slate-200 mb-4">Payment Method</h3>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                            {paymentMethods.map(method => (
                                <img key={method.name} src={method.logoUrl} alt={method.name} className="h-6 md:h-8 object-contain" />
                            ))}
                        </div>
                    </div>

                    {/* Gaming License */}
                    <div>
                        <h3 className="text-xl font-semibold text-slate-200 mb-4 flex items-center">
                            Gaming license
                            <CheckCircleIcon className="w-5 h-5 text-blue-400 ml-2" />
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                            {gamingLicenses.map(license => (
                                <img key={license.name} src={license.logoUrl} alt={license.name} className="h-10 md:h-12 object-contain" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="text-slate-400 space-y-4 pt-2">
                    <div className="flex items-start gap-3">
                        <DiamondIcon className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <p>We platform advocates fairness, justice, and openness. We mainly operate fair lottery, blockchain games, live casinos, and slot machine games.</p>
                    </div>
                     <div className="flex items-start gap-3">
                        <DiamondIcon className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <p>We work with more than 10,000 online live game dealers and slot games, all of which are fair and verified games.</p>
                    </div>
                    <p className="text-slate-500 text-sm pt-4">
                        Gambling can be addictive, please play rationally. We only accepts customers above the age of 18.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default TrustAndInfo;