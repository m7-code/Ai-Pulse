import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Community from './pages/Community';
import Talent from './pages/Talent';
import Jobs from './pages/Jobs';
import Pricing from './pages/Pricing'; // Import kiya

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0d1117] text-white font-sans selection:bg-blue-500/30 flex flex-col">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/pricing" element={<Pricing />} /> {/* New Route */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;