import React from 'react';

const PricingCard = ({ title, description, price, period, features, buttonText, isPopular, buttonStyle }) => {
  return (
    <div className={`relative flex flex-col p-8 rounded-2xl border transition-all ${
      isPopular 
        ? 'border-[#5c4bdd] bg-[#12121c] shadow-[0_0_30px_rgba(92,75,221,0.1)]' 
        : 'border-gray-800 bg-[#0d1117] hover:border-gray-700'
    }`}>
      
      {/* Most Popular Badge */}
      {isPopular && (
        <div className="absolute top-0 left-8 -translate-y-1/2 bg-[#5c4bdd] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 h-10">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-8 flex items-baseline text-white">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className="text-sm text-gray-400 ml-2">{period}</span>}
      </div>

      {/* Features */}
      <ul className="flex-grow space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#58a6ff] mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors ${
        buttonStyle === 'primary'
          ? 'bg-[#5c4bdd] hover:bg-[#4b3dbb] text-white'
          : 'bg-transparent border border-gray-700 text-gray-300 hover:bg-[#1c2128]'
      }`}>
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;