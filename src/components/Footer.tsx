import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      platform: 'GitHub',
      icon: '💻',
      url: 'http://github.com/shinanmohamed363'
    },
    {
      platform: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/shinanmohamed363'
    },
    {
      platform: 'Email',
      icon: '📧',
      url: 'mailto:Shinanmohamed363@gmail.com'
    },
    {
      platform: 'Phone',
      icon: '📱',
      url: 'tel:+94740245152'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-glass-bg to-transparent">
      {/* Glass separator line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient font-poppins mb-4 hover:scale-105 transition-transform duration-300"
            >
              Najimudeen Sanan
            </button>
            <p className="text-light-gray text-sm leading-relaxed mb-6 max-w-md">
              Full-Stack Software Engineer with 2.8+ years of experience building scalable, 
              user-centric applications. Passionate about creating impactful solutions using 
              modern technologies.
            </p>
            
            {/* Tech Stack Icons */}
            <div className="flex space-x-4 mb-6">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'Python', icon: '🐍' },
                { name: 'MongoDB', icon: '🍃' },
                { name: 'Laravel', icon: '🔥' }
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover-glow cursor-pointer"
                  title={tech.name}
                >
                  <span className="text-lg">{tech.icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-light-gray hover:text-electric-cyan transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target={social.platform !== 'Email' && social.platform !== 'Phone' ? '_blank' : undefined}
                  rel={social.platform !== 'Email' && social.platform !== 'Phone' ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-3 text-light-gray hover:text-electric-cyan transition-colors duration-300 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span className="text-sm">{social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-light-gray text-sm mb-4 md:mb-0">
            © {currentYear} Najimudeen Mohammed Sanan. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <button
              onClick={scrollToTop}
              className="text-light-gray hover:text-electric-cyan transition-colors duration-300 flex items-center space-x-2 group"
            >
              <span>Back to Top</span>
              <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
            </button>
            
            <div className="text-light-gray">
              Made with ❤️ & ☕
            </div>
          </div>
        </div>

        {/* Availability Banner */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-neon-green text-sm font-medium">
              Available for new opportunities
            </span>
          </div>
        </div>

        {/* Location & Time */}
        <div className="mt-6 text-center">
          <p className="text-light-gray text-xs">
            📍 Based in Negombo, Western Province, Sri Lanka
          </p>
          <p className="text-light-gray text-xs mt-1">
            🕐 UTC+05:30 (Colombo Time)
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-cyan/30 via-electric-purple/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;