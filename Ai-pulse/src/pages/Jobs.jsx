import React from 'react';
import { jobsData } from '../data/jobsData';
import JobCard from '../components/jobs/JobCard';

const Jobs = () => {
  return (
    <div className="w-full">
      {/* Top Header Section */}
      <div className="border-b border-gray-800 bg-[#0d1117] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-[1000px] mx-auto px-6 py-16 relative z-10">
          <h4 className="text-xs font-bold text-[#58a6ff] tracking-widest uppercase mb-3">Jobs</h4>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Roles at the frontier
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Hand-picked openings from AI labs, startups and teams shipping ML in production.
          </p>

          {/* Search & Filters Row */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Role, skill or company" 
                className="w-full bg-[#161b22] border border-gray-700 text-gray-200 text-sm rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#58a6ff] transition-all"
              />
            </div>

            {/* Dropdown Filters (Styled as Buttons) */}
            <div className="flex gap-3">
              <select className="bg-[#161b22] border border-gray-700 text-gray-300 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#58a6ff] appearance-none cursor-pointer pr-8 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23888%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]">
                <option>Seniority</option>
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
                <option>Lead</option>
              </select>

              <select className="bg-[#161b22] border border-gray-700 text-gray-300 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#58a6ff] appearance-none cursor-pointer pr-8 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23888%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]">
                <option>Job type</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
              </select>

              <select className="bg-[#161b22] border border-gray-700 text-gray-300 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#58a6ff] appearance-none cursor-pointer pr-8 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23888%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]">
                <option>Workplace</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Onsite</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1000px] mx-auto px-6 py-10">
        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-6">{jobsData.length} open roles</p>

        {/* Jobs List */}
        <div className="flex flex-col">
          {jobsData.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;