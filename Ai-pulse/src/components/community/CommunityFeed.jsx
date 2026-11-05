import React from 'react';
import { communityPosts } from '../../data/communityData';
import CommunityPost from './CommunityPost';

const CommunityFeed = () => {
  const filters = ["Latest", "Questions", "Collaborations", "Showcases", "Articles"];

  return (
    <div className="w-full">
      {/* Input Box */}
      <div className="border border-gray-800 rounded-xl p-4 mb-6 bg-[#0d1117] hover:border-gray-700 transition-colors cursor-text">
        <p className="text-sm text-gray-500">Share an insight, ask a question, or show what you built...</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 mb-6 border-b border-gray-800 pb-4">
        {filters.map((filter, index) => (
          <button 
            key={index}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
              index === 0 
                ? "bg-white text-black border-white" 
                : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Posts List */}
      <div className="flex flex-col">
        {communityPosts.map(post => (
          <CommunityPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;