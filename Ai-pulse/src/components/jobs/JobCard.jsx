import React from 'react';

const JobCard = ({ job }) => {
  // Workplace tag ka color decide karne ke liye
  const getWorkplaceStyle = (type) => {
    switch (type) {
      case 'Remote': return 'text-teal-300 border-teal-500/30 bg-teal-500/10';
      case 'Hybrid': return 'text-blue-300 border-blue-500/30 bg-blue-500/10';
      default: return 'text-gray-300 border-gray-600 bg-gray-800'; // Onsite
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 mb-4 rounded-2xl border transition-colors group cursor-pointer ${
      job.isFeatured 
        ? 'border-[#3b3b5c] bg-[#12121c] hover:border-[#5c4bdd]' // Featured card style (faint purple border)
        : 'border-gray-800 bg-[#0d1117] hover:border-gray-600'
    }`}>
      
      {/* Left Side: Logo & Details */}
      <div className="flex items-start sm:items-center space-x-4 mb-4 sm:mb-0">
        {/* Logo Placeholder */}
        <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${job.logoBg} shadow-sm`}>
          {/* Simple icon inside logo */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        {/* Job Info */}
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-xs text-gray-400 font-medium">{job.company}</span>
            {job.isFeatured && (
              <span className="flex items-center text-[9px] font-bold text-[#58a6ff] tracking-wider uppercase space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Featured</span>
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-bold text-gray-100 group-hover:text-white transition-colors mb-2">
            {job.title}
          </h3>
          
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#1c2128] text-gray-400 text-xs font-medium px-2.5 py-1 rounded-md border border-gray-800">
              {job.level}
            </span>
            <span className="bg-[#1c2128] text-gray-400 text-xs font-medium px-2.5 py-1 rounded-md border border-gray-800">
              {job.type}
            </span>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-md border ${getWorkplaceStyle(job.workplace)}`}>
              {job.workplace}
            </span>
          </div>
        </div>
      </div>

      {/* Right Side: Salary & Location */}
      <div className="sm:text-right w-full sm:w-auto pl-16 sm:pl-0">
        <p className="text-base font-bold text-gray-200 mb-1">{job.salary}</p>
        <p className="text-xs text-gray-500">{job.location} · {job.time}</p>
      </div>

    </div>
  );
};

export default JobCard;