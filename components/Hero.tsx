
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2000&auto=format&fit=crop" 
          alt="Traditional Vietnamese Wine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h2 className="text-red-400 font-serif italic text-xl md:text-2xl mb-4 tracking-wide">Tinh hoa di sản Việt</h2>
        <h1 className="text-white text-4xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Rượu Cô Đào <br className="hidden sm:block"/>
          <span className="text-amber-400">Say lòng người lữ khách</span>
        </h1>
        <p className="text-white/90 text-base md:text-xl mb-10 font-light max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
          Được chưng cất từ tâm huyết và những hạt gạo tinh túy nhất, 
          mang đến hương vị truyền thống nồng nàn trong từng giọt rượu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#products" className="w-full sm:w-auto bg-red-800 text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-red-700 shadow-xl active:scale-95">
            Khám phá 3 vị rượu
          </a>
          <a href="#ai-advice" className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20 hover:border-white/50 active:scale-95">
            Tư vấn Chuyên gia AI
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 text-2xl hidden md:block">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;
