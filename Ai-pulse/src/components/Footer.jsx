import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0d1117] py-10 mt-12">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Side: Logo and Info */}
        <div className="flex items-start space-x-3">
          <div className="bg-blue-500 p-1.5 rounded-full flex items-center justify-center mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <span className="text-white font-bold text-xl tracking-tight block mb-1">AIPulse</span>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              The AI industry, distilled. News, community and careers for people building intelligence.
            </p>
          </div>
        </div>

        {/* Right Side: Copyright */}
        <div className="text-sm text-gray-500 md:text-right">
          <p>© 2026 AI Pulse · AI-curated, human-reviewed</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;