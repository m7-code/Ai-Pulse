import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trending from '../components/Trending';
import ArticleList from '../components/ArticleList';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer'; // Import kiya

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-sans selection:bg-blue-500/30 flex flex-col">
      <Navbar />
      
      <main className="max-w-[1400px] mx-auto px-6 py-8 flex-grow w-full">
        <Hero />
        <Trending />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
             <ArticleList />
          </div>
          <div className="lg:col-span-1">
             <Sidebar />
          </div>
        </div>
      </main>

      {/* Footer Added Here */}
      <Footer />
    </div>
  );
};

export default Home;