import React from 'react';
import { articlesData } from '../data/mockData';

const ArticleList = () => {
  // 1. Yahan "AI" ki jagah "All" kar diya hai
  const categories = ["All", "LLMs", "Research", "Tools & Products", "Funding & Business", "Policy & Ethics", "Robotics", "Open Source"];

  return (
    <div className="w-full">
      {/* Filter Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-4 scrollbar-hide border-b border-gray-800">
        {categories.map((cat, index) => (
          <button 
            key={index}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
              index === 0 
                ? "bg-white text-black border-white" 
                : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Loop */}
      <div className="flex flex-col">
        {articlesData.map((article) => (
          <article key={article.id} className="flex flex-col sm:flex-row gap-6 py-6 border-b border-gray-800 group cursor-pointer">
            
            {/* Image (Left Side) */}
            <div className="w-full sm:w-64 h-40 sm:h-36 flex-shrink-0 rounded-xl overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content (Right Side) */}
            <div className="flex flex-col flex-grow">
              
              {/* Category & Tags */}
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#58a6ff]">
                  {article.category}
                </span>
                {article.isAiSummarized && (
                  <span className="flex items-center text-[10px] font-bold text-gray-500 space-x-1 uppercase tracking-wider">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span>AI-Summarized</span>
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-100 mb-2 leading-snug group-hover:text-[#58a6ff] transition-colors">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {article.description}
              </p>

              {/* Footer Meta (Source, Time, Icons) */}
              <div className="flex items-center justify-between mt-auto pt-2">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span className="font-medium text-gray-400">{article.source}</span>
                  <span>•</span>
                  <span>{article.time}</span>
                </div>
                
                <div className="flex items-center space-x-4 text-xs font-medium text-gray-500">
                  {/* 2. Heart Icon for Likes (Upvote ki jagah) */}
                  <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{article.upvotes}</span>
                  </button>
                  
                  {/* Comment Icon */}
                  <button className="flex items-center space-x-1 hover:text-[#58a6ff] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>{article.comments}</span>
                  </button>
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>
      
      {/* Load More Button */}
      <div className="mt-8 mb-4">
        <button className="w-full py-3 border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:bg-[#161b22] transition-colors">
          Load more stories
        </button>
      </div>
    </div>
  );
};

export default ArticleList;