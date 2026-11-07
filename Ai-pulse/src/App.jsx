import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import kiya
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Community from './pages/Community';
import Talent from './pages/Talent';
import Jobs from './pages/Jobs';
import Pricing from './pages/Pricing';
import Login from './pages/Login';       // Agla step banayenge
import Register from './pages/Register'; // Agla step banayenge

function App() {
  return (
    <AuthProvider> {/* Context Provider */}
      <Router>
        <div className="min-h-screen bg-[#0d1117] text-white font-sans selection:bg-blue-500/30 flex flex-col">
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/community" element={<Community />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;