import React from 'react';

const Hero = () => {
  return (
    <section className="mb-12">
      {/* Top Date */}
      <div className="text-xs font-bold tracking-widest text-gray-400 mb-3 uppercase">
        Thursday, November 5
      </div>

      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
        The AI industry, <span className="text-[#58a6ff]">distilled.</span>
      </h1>

      {/* Hero Image Container */}
      <div className="relative w-full rounded-2xl overflow-hidden h-[400px] md:h-[500px] group cursor-pointer border border-gray-800">
        
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop" 
          alt="AI Technology" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/80 to-transparent"></div>

        {/* Content Inside Image */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col justify-end">
          
          {/* Tags */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-gray-800/80 backdrop-blur-sm text-gray-200 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Top Story
            </span>
            <span className="bg-transparent border border-gray-600 text-gray-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              LLMs
            </span>
            <span className="flex items-center text-[#58a6ff] text-[10px] font-bold uppercase tracking-wider space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span>AI-Summarized</span>
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight max-w-4xl">
            Open-weight model matches frontier systems on reasoning benchmarks
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base max-w-3xl mb-6 line-clamp-3 md:line-clamp-none">
            A new open-weight language model has posted results comparable to leading proprietary systems on math and multi-step reasoning benchmarks. The release includes weights under a permissive license, a detailed technical report, and training recipes.
          </p>

          {/* Footer Info */}
          <div className="flex items-center justify-between border-t border-gray-700/50 pt-4 mt-2">
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <span className="font-semibold text-gray-300">Hugging Face Blog</span>
              <span>•</span>
              <span>about 1 month ago</span>
            </div>
            
            <div className="flex items-center space-x-1 text-sm font-medium text-white group-hover:text-[#58a6ff] transition-colors">
              <span>Read</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;