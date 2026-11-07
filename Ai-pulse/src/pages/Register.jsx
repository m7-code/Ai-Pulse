import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Backend API call ke zariye register karein
    const result = await register(name, email, password);
    
    if (result.success) {
      navigate('/'); // Registration successful, home page par bhejein
    } else {
      setError(result.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-[75vh] px-4">
      <div className="w-full max-w-md p-8 bg-[#161b22] border border-gray-800 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Create an account</h2>
        <p className="text-sm text-gray-400 text-center mb-8">Join AI Pulse to build your career</p>

        {error && <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#0d1117] border border-gray-700 text-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#58a6ff] transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#0d1117] border border-gray-700 text-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#58a6ff] transition-colors"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#0d1117] border border-gray-700 text-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#58a6ff] transition-colors"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-[#5c4bdd] hover:bg-[#4b3dbb] text-white font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Creating account...' : 'Sign up'}
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account? <Link to="/login" className="text-[#58a6ff] hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;