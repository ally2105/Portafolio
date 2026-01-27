import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 py-6 ${isScrolled ? 'bg-brand-1/80 backdrop-blur-lg border-b border-white/10 py-4' : ''
      }`}>
      <div className="container flex justify-between items-center">
        <a href="#home" className="font-display text-2xl font-extrabold tracking-tighter">
          <span className="text-brand-5">DEV</span>PORTFOLIO
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-brand-5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-5 transition-transform hover:-translate-y-0.5" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/allison-pauleth?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-5 transition-transform hover:-translate-y-0.5" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 p-4 mt-2 glass flex flex-col gap-4 transform transition-all duration-300 origin-top">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-100 font-medium py-2 border-b border-white/5 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
