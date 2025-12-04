import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2 border-gray-100' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Vadapalani Computers" 
                className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback: if image fails, show text (useful for dev)
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('logo-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              {/* Fallback Text hidden by default, shown only if image fails to load */}
              <div id="logo-fallback" className="hidden flex-col">
                <span className={`font-bold text-xl tracking-tighter leading-none ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-md'}`}>Vadapalani</span>
                <span className={`text-[0.6rem] uppercase tracking-widest leading-none ${isScrolled ? 'text-gray-500' : 'text-cyan-50 drop-shadow-sm'}`}>Computers</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-cyan-600' 
                    : 'text-white/90 hover:text-white hover:drop-shadow-md'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                isScrolled
                  ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                  : 'bg-white text-cyan-600 hover:bg-gray-100'
              }`}
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none transition-colors ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;