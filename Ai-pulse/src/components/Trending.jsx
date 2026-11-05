import React from 'react';

const Trending = () => {
  // Data Array (Taake code clean rahe)
  const trendingData = [
    {
      id: '01',
      title: 'Open-weight model matches frontier systems on reasoning benchmarks',
      category: 'LLMS'
    },
    {
      id: '02',
      title: 'Researchers propose memory-efficient attention for million-token contexts',
      category: 'RESEARCH'
    },
    {
      id: '03',
      title: 'AI coding assistants add autonomous multi-file refactoring',
      category: 'TOOLS & PRODUCTS'
    },
    {
      id: '04',
      title: 'Popular open-source inference engine doubles throughput',
      category: 'OPEN SOURCE'
    },
    {
      id: '05',
      title: 'EU publishes guidance for general-purpose AI model providers',
      category: 'POLICY & ETHICS'
    }
  ];

  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center space-x-2 text-sm font-semibold text-gray-300 mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#58a6ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span>Trending now</span>
      </div>

      {/* Grid Container - 5 Columns on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {trendingData.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-800 rounded-xl p-5 flex flex-col hover:border-gray-600 hover:bg-[#161b22]/50 transition-all cursor-pointer group"
          >
            {/* Number */}
            <span className="text-3xl font-light text-gray-700 mb-4 block group-hover:text-gray-400 transition-colors">
              {item.id}
            </span>
            
            {/* Title */}
            <h3 className="text-sm font-semibold text-gray-200 leading-snug mb-6 line-clamp-3 group-hover:text-white transition-colors">
              {item.title}
            </h3>
            
            {/* Category */}
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#58a6ff]/70 mt-auto">
              {item.category}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Trending;