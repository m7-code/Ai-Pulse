import React from 'react';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-800 bg-[#0d1117] text-gray-300 w-full">
      {/* Inner container to keep content aligned with the main page width */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left Side: Logo and Links Grouped Together */}
        <div className="flex items-center space-x-8">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="bg-blue-500 p-1.5 rounded-full flex items-center justify-center">
               {/* Simple AI Icon equivalent */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
               </svg>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">AIPulse</span>
          </div>

          {/* Navigation Links (Left aligned) */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Active Link (News) */}
            <a href="#" className="bg-[#1c2128] text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
              News
            </a>
            <a href="#" className="text-gray-400 hover:text-white hover:bg-[#1c2128] px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
              Community
            </a>
            <a href="#" className="text-gray-400 hover:text-white hover:bg-[#1c2128] px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
              Talent
            </a>
            <a href="#" className="text-gray-400 hover:text-white hover:bg-[#1c2128] px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
              Jobs
            </a>
            <a href="#" className="text-gray-400 hover:text-white hover:bg-[#1c2128] px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
              Pricing
            </a>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors flex items-center justify-center bg-[#1c2128] p-2 rounded-full">
            {/* Sun icon for theme toggle */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          
          <button className="bg-[#5c4bdd] hover:bg-[#4b3dbb] text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(92,75,221,0.3)]">
            Go Pro
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;