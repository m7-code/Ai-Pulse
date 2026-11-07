import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // AuthContext import kiya

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext); // User ki state check karne ke liye

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
      isActive 
        ? "bg-[#1c2128] text-white" 
        : "text-gray-400 hover:text-white hover:bg-[#1c2128]"
    }`;
  };

  return (
    <nav className="border-b border-gray-800 bg-[#0d1117] text-gray-300 w-full">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left Side: Logo & Links */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="bg-blue-500 p-1.5 rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
               </svg>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">AIPulse</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={getLinkClass("/")}>News</Link>
            <Link to="/community" className={getLinkClass("/community")}>Community</Link>
            <Link to="/talent" className={getLinkClass("/talent")}>Talent</Link>
            <Link to="/jobs" className={getLinkClass("/jobs")}>Jobs</Link>
            <Link to="/pricing" className={getLinkClass("/pricing")}>Pricing</Link>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors flex items-center justify-center bg-[#1c2128] p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          
          {/* === NAYA LOGIC YAHAN HAI === */}
          {user ? (
            // Agar user login hai (AuthContext mein data hai)
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#5c4bdd] flex items-center justify-center text-white font-bold text-sm">
                  {user.name.charAt(0).toUpperCase()} {/* User ke naam ka pehla letter */}
                </div>
                <span className="text-sm font-medium text-gray-200 hidden sm:block">{user.name}</span>
              </div>
              <button 
                onClick={logout}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            // Agar user login NAHI hai
            <div className="flex items-center space-x-3">
              <Link 
                to="/login" 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Log in
              </Link>
              <Link 
                to="/register" 
                className="bg-[#5c4bdd] hover:bg-[#4b3dbb] text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(92,75,221,0.3)]"
              >
                Sign up
              </Link>
            </div>
          )}
          {/* === LOGIC END === */}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;