import React from 'react';

const CommunityPost = ({ post }) => {
  // Tag ka color decide karne ke liye function
  const getTagStyle = (type) => {
    switch (type) {
      case 'Question': return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'Collaboration': return 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10';
      case 'Showcase': return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
      case 'Article': return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
      default: return 'text-gray-400 border-gray-700 bg-gray-800'; // Post
    }
  };

  return (
    <article className="border border-gray-800 rounded-xl p-5 mb-4 hover:border-gray-700 transition-colors bg-[#0d1117]">
      
      {/* Header: User Info & Tag */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} className="w-10 h-10 rounded-full object-cover border border-gray-700" />
          <div>
            <p className="text-sm font-semibold text-gray-200">{post.author}</p>
            <p className="text-[11px] text-gray-500">{post.role} · {post.time}</p>
          </div>
        </div>
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider ${getTagStyle(post.type)}`}>
          {post.type}
        </span>
      </div>

      {/* Body: Title, Content, Image */}
      <div className="pl-[52px]">
        {post.title && (
          <h3 className="text-base font-bold text-gray-100 mb-2">{post.title}</h3>
        )}
        {post.content && (
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">{post.content}</p>
        )}
        
        {/* Post Image (if any) */}
        {post.image && (
          <div className="w-full max-h-80 rounded-xl overflow-hidden mb-4 border border-gray-800">
            <img src={post.image} alt="Post content" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span key={index} className="text-xs text-[#58a6ff]/80 font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer: Likes & Comments */}
        <div className="flex items-center space-x-4 text-xs font-medium text-gray-500 pt-3 border-t border-gray-800/50">
          <button className="flex items-center space-x-1.5 hover:text-red-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center space-x-1.5 hover:text-[#58a6ff] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{post.comments}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CommunityPost;