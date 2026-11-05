import React from 'react';
import CommunityFeed from '../components/community/CommunityFeed';

const Community = () => {
  // Sirf Top Contributors ka data (Screenshot ke mutabiq)
  const topContributors = [
    { name: "Maya Chen", role: "Staff ML Engineer - LLM evaluat...", points: "1340", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Arjun Mehta", role: "Research Scientist - Reasoning...", points: "1520", avatar: "https://i.pravatar.cc/150?img=11" },
    { name: "David Okafor", role: "ML Infrastructure Lead - GPUs...", points: "1310", avatar: "https://i.pravatar.cc/150?img=12" },
    { name: "Kenji Watanabe", role: "AI Product Engineer - Agents &...", points: "1120", avatar: "https://i.pravatar.cc/150?img=14" },
    { name: "Sofia Rossi", role: "Computer Vision Engineer - Robo...", points: "980", avatar: "https://i.pravatar.cc/150?img=5" }
  ];

  return (
    <main className="max-w-[1400px] mx-auto px-6 py-8">
      
      {/* Page Header */}
      <div className="mb-10">
        <h4 className="text-xs font-bold text-[#58a6ff] tracking-widest uppercase mb-2">Community</h4>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Where AI builders think out loud
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Questions, collaborations, showcases and long-form ideas from practitioners.
        </p>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Feed */}
        <div className="lg:col-span-2">
          <CommunityFeed />
        </div>

        {/* Right Column: Sidebar (Only Top Contributors) */}
        <div className="lg:col-span-1">
          <div className="border border-gray-800 rounded-xl p-5 sticky top-8">
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
        </div>

      </div>
    </main>
  );
};

export default Community;