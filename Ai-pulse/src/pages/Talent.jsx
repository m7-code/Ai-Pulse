import React from 'react';
import { talentData } from '../data/talentData';
import TalentCard from '../components/talent/TalentCard';

const Talent = () => {
  const levels = ["All levels", "Junior", "Mid", "Senior", "Lead", "Principal"];

  return (
    <div className="w-full">
      {/* Top Header Section (With grid pattern background) */}
      <div className="border-b border-gray-800 bg-[#0d1117] relative overflow-hidden">
        {/* Subtle background pattern (optional CSS logic) */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-[1400px] mx-auto px-6 py-16 relative z-10">
          <h4 className="text-xs font-bold text-[#58a6ff] tracking-widest uppercase mb-3">Talent</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Find people building AI
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            Portfolios and resumes from ML engineers, researchers and AI product builders.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search by skill, role or location — e.g. PyTorch, RAG, Berlin" 
              className="w-full bg-[#161b22] border border-gray-700 text-gray-200 text-sm rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-all"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8 border-b border-gray-800 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {levels.map((level, index) => (
              <button 
                key={index}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
                  index === 0 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="w-px h-6 bg-gray-800 hidden sm:block"></div>

          <button className="px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white">
            Open to work
          </button>
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-6">{talentData.length} professionals</p>

        {/* Talent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {talentData.map(person => (
            <TalentCard key={person.id} person={person} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Talent;