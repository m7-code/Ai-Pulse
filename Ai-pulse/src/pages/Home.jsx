import React from 'react';
import Hero from '../components/Hero';
import Trending from '../components/Trending';
import ArticleList from '../components/ArticleList';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <main className="max-w-[1400px] mx-auto px-6 py-8 w-full">
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
  );
};

export default Home;