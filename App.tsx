import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import StorySection from './components/StorySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <StorySection />
      </main>
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-red-800 text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 md:hidden"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
