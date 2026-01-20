
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Câu chuyện', href: '#story' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center text-white font-serif text-xl shadow-lg">CĐ</div>
          <span className={`text-xl font-serif font-bold transition-colors ${isScrolled || isMenuOpen ? 'text-red-900' : 'text-white'}`}>Rượu Cô Đào</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center font-semibold uppercase text-xs tracking-widest">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className={`${isScrolled ? 'text-stone-700 hover:text-red-800' : 'text-white/80 hover:text-white'} transition-colors`}>
              {link.name}
            </a>
          ))}
          <a href="#ai-advice" className="px-6 py-2.5 bg-red-800 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-red-700 shadow-lg hover:shadow-red-900/30 active:scale-95">
            Tư vấn AI
          </a>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled || isMenuOpen ? 'text-red-900 bg-stone-100' : 'text-white bg-white/10'}`}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-stone-800 text-lg font-serif border-b border-stone-50 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#ai-advice" 
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-4 bg-red-800 text-white text-center rounded-xl font-bold shadow-lg transition-transform active:scale-95"
          >
            Tư vấn Chuyên gia AI
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
