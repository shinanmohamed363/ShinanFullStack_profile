import React, { useState, useEffect } from 'react';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as HTMLElement;
        const nav = document.querySelector('nav');
        if (nav && !nav.contains(target)) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjust nav height based on screen size
      const navHeight = window.innerWidth <= 400 ? 60 : window.innerWidth <= 768 ? 70 : 80;
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-strong py-3' : 'py-4'
    }`} style={{zIndex: 9999}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-gradient font-poppins hover:scale-105 transition-transform duration-300"
          >
            Najimudeen Sanan
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 hover:text-electric-cyan ${
                  activeSection === item.id 
                    ? 'text-electric-cyan' 
                    : 'text-white hover:text-electric-cyan'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-cyan to-electric-purple rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block btn-primary text-sm"
          >
            Get In Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center glass rounded-lg p-2 hover:bg-white/10 active:bg-white/20 transition-all duration-300 touch-manipulation"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-container md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className="glass-strong rounded-xl p-6 space-y-3 shadow-2xl border border-white/20">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-4 rounded-lg transition-all duration-300 hover:bg-white/20 active:bg-white/30 text-lg font-medium touch-manipulation ${
                  activeSection === item.id 
                    ? 'text-electric-cyan bg-white/10 shadow-lg' 
                    : 'text-white hover:text-electric-cyan'
                }`}
                style={{
                  animationDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'all 0.3s ease-out'
                }}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  {activeSection === item.id && (
                    <span className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse"></span>
                  )}
                </span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full btn-primary mt-6 py-4 text-lg font-semibold touch-manipulation active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;