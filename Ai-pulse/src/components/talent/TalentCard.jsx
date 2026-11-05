import React from 'react';

const TalentCard = ({ person }) => {
  return (
    <div className="border border-gray-800 rounded-2xl p-5 bg-[#0d1117] hover:border-gray-600 transition-colors group">
      
      {/* Header: Avatar, Name, Badges */}
      <div className="flex items-start space-x-4 mb-4">
        <img 
          src={person.avatar} 
          alt={person.name} 
          className="w-14 h-14 rounded-full object-cover border border-gray-700"
        />
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-bold text-gray-100 group-hover:text-white transition-colors">
              {person.name}
            </h3>
            
            {/* Verified Icon */}
            {person.isVerified && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}

            {/* PRO Badge */}
            {person.isPro && (
              <span className="bg-[#5c4bdd] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                Pro
              </span>
            )}
          </div>
          
          <p className="text-sm text-gray-400 mt-1">{person.role}</p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {person.skills.map((skill, index) => (
          <span key={index} className="bg-[#161b22] text-gray-300 text-xs font-medium px-2.5 py-1 rounded-md border border-gray-800/50">
            {skill}
          </span>
        ))}
      </div>

      {/* Footer: Location, Level, Open to Work */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-800/60 mt-auto">
        <div className="flex items-center space-x-1.5 text-xs text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{person.location}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-gray-400">{person.level}</span>
          
          {person.openToWork && (
            <span className="text-[10px] font-bold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">
              Open to work
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalentCard;