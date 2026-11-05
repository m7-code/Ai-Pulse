import React from 'react';

const Sidebar = () => {
  // Mock Data for Sidebar
  const trendingTags = ["#open-weights", "#reasoning", "#benchmarks", "#attention", "#long-context", "#efficiency", "#coding", "#agents", "#devtools", "#robotics"];
  
  const topContributors = [
    { name: "Maya Chen", role: "Staff ML Engineer · LLM evaluat...", points: "1340", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Arjun Mehta", role: "Research Scientist · Reasoning...", points: "1520", avatar: "https://i.pravatar.cc/150?img=11" },
    { name: "David Okafor", role: "ML Infrastructure Lead · GPUs...", points: "1310", avatar: "https://i.pravatar.cc/150?img=12" },
    { name: "Kenji Watanabe", role: "AI Product Engineer · Agents &...", points: "1120", avatar: "https://i.pravatar.cc/150?img=14" },
    { name: "Sofia Rossi", role: "Computer Vision Engineer · Robo...", points: "980", avatar: "https://i.pravatar.cc/150?img=5" }
  ];

  const featuredJobs = [
    { title: "ML Infrastructure Engineer", company: "Northwind Robotics · Boston, MA", icon: "N" },
    { title: "Senior ML Engineer, Evaluation", company: "Lattice Labs · Remote (US/EU)", icon: "L" },
    { title: "Research Scientist, Reasoning", company: "Lattice Labs · San Francisco, CA", icon: "L" }
  ];

  return (
    <aside className="space-y-6 sticky top-8">
      
      {/* 1. Trending Tags */}
      <div className="border border-gray-800 rounded-xl p-5">
        <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">
          Trending Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-[#161b22] hover:bg-gray-800 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-md cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Top Contributors */}
      <div className="border border-gray-800 rounded-xl p-5">
        <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">
          Top Contributors This Week
        </h3>
        <div className="flex flex-col space-y-4">
          {topContributors.map((user, index) => (
            <div key={index} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center space-x-3">
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover border border-gray-700" />
                <div>
                  <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{user.name}</p>
                  <p className="text-[10px] text-gray-500 truncate w-36">{user.role}</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#58a6ff]">{user.points}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Featured Jobs */}
      <div className="border border-gray-800 rounded-xl p-5">
        <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">
          Featured Jobs
        </h3>
        <div className="flex flex-col space-y-4">
          {featuredJobs.map((job, index) => (
            <div key={index} className="flex items-start space-x-3 group cursor-pointer">
              <div className="w-8 h-8 rounded-md bg-[#1c2128] flex items-center justify-center text-gray-400 font-bold text-sm border border-gray-700">
                {job.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors leading-tight mb-0.5">{job.title}</p>
                <p className="text-[11px] text-gray-500">{job.company}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-800/50">
          <a href="#" className="text-xs font-medium text-gray-400 hover:text-[#58a6ff] transition-colors">All jobs →</a>
        </div>
      </div>

      {/* 4. Newsletter */}
      <div className="border border-gray-800 rounded-xl p-5 bg-gradient-to-b from-[#161b22] to-[#0d1117]">
        <h3 className="text-sm font-bold text-gray-200 mb-1">
          The Weekly Pulse
        </h3>
        <p className="text-[11px] text-gray-500 mb-4">
          Top 5 AI stories, every Monday. No hype.
        </p>
        <form className="flex flex-col space-y-2">
          <input 
            type="email" 
            placeholder="you@company.com" 
            className="w-full bg-[#0d1117] border border-gray-700 text-sm text-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-[#58a6ff] transition-colors"
          />
          <button 
            type="button"
            className="w-full bg-[#5c4bdd] hover:bg-[#4b3dbb] text-white text-sm font-medium py-2 rounded-lg transition-colors"
          >
            Join
          </button>
        </form>
      </div>

    </aside>
  );
};

export default Sidebar;