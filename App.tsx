import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import StorySection from './components/StorySection';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

function App() {
  const isLocal = import.meta.env.DEV;

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <StorySection />

        {isLocal && <AIChat />}
      </main>
      <Footer />
      
      {/* Scroll to Top floating button (optional) */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-red-800 text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 md:hidden"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default App;
