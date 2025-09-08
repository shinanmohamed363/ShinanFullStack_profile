import React, { useState, useEffect } from 'react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const roles = [
    'Full-Stack Software Engineer',
    'MERN Stack Developer',
    'Python Developer', 
    'AI/ML Enthusiast'
  ];

  const currentRole = roles[Math.floor(currentIndex / 50) % roles.length];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(currentIndex + 1);
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [displayText, currentRole, currentIndex]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = '/Mohamed_sanan_cv (1).pdf'; // Path to your resume in the public folder
    link.download = 'Najimudeen_Mohammed_Sanan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const techIcons = [
    { name: 'React', icon: '⚛️', delay: '0s' },
    { name: 'Node.js', icon: '🟢', delay: '0.5s' },
    { name: 'Python', icon: '🐍', delay: '1s' },
    { name: 'JavaScript', icon: '📜', delay: '1.5s' },
    { name: 'MongoDB', icon: '🍃', delay: '2s' },
    { name: 'Laravel', icon: '🔥', delay: '2.5s' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-0">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-electric-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-electric-purple/10 rounded-full blur-2xl animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-neon-green/5 rounded-full blur-3xl animate-float" style={{animationDelay: '-4s'}}></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-electric-cyan/20 rounded-full blur-xl animate-float" style={{animationDelay: '-1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-4 sm:space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-cyan to-electric-purple rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
              <div className="relative profile-image rounded-full overflow-hidden border-2 border-white/20">
                <img
                  src="/profile.jpg"
                  alt="Najimudeen Mohammed Sanan - Full-Stack Software Engineer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="eager"
                />
                {/* Overlay gradient for better integration with the design */}
                <div className="absolute inset-0 bg-gradient-to-t from-glass-bg/20 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Greeting */}
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl text-light-gray font-inter animate-fadeInUp">
              Hello, I'm
            </h1>
            
            {/* Name */}
            <h2 className="font-bold text-gradient font-poppins animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              Najimudeen Sanan
            </h2>
            
            {/* Typing Animation Role */}
            <div className="flex items-center justify-center px-4">
              <h3 className="font-semibold text-white font-inter text-center">
                {displayText}
                <span className={`inline-block w-0.5 bg-electric-cyan ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} style={{height: 'clamp(1rem, 3vw, 2rem)'}}></span>
              </h3>
            </div>

            {/* Subtitle */}
            <p className="text-light-gray max-w-3xl mx-auto animate-fadeInUp px-4 text-center leading-relaxed" style={{animationDelay: '0.6s'}}>
              2.8+ Years Experience Building Scalable Solutions • Expert in MERN Stack, Python & AI/ML
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center animate-fadeInUp px-4" style={{animationDelay: '0.8s', gap: 'clamp(1rem, 3vw, 2rem)', marginTop: 'clamp(1rem, 4vw, 3rem)'}}>
            <div className="text-center">
              <div className="stat-number font-bold text-gradient-green">2.8+</div>
              <div className="stat-label text-light-gray">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="stat-number font-bold text-gradient-green">15+</div>
              <div className="stat-label text-light-gray">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="stat-number font-bold text-gradient-green">99.9%</div>
              <div className="stat-label text-light-gray">Uptime</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center animate-fadeInUp px-4" style={{animationDelay: '1s', gap: 'clamp(0.75rem, 2vw, 1.5rem)', marginTop: 'clamp(1rem, 4vw, 3rem)'}}>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary hover-glow"
            >
              View My Projects
            </button>
            <button
              onClick={downloadResume}
              className="btn-secondary hover-glow"
            >
              Download Resume
            </button>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center animate-fadeInUp px-4" style={{animationDelay: '1.2s', gap: 'clamp(0.75rem, 2vw, 1.5rem)', marginTop: 'clamp(1rem, 4vw, 4rem)'}}>
            {techIcons.map((tech, index) => (
              <div
                key={tech.name}
                className="glass rounded-full tech-icon flex items-center justify-center hover-glow cursor-pointer group"
                style={{animationDelay: tech.delay}}
                title={tech.name}
              >
                <span className="group-hover:scale-125 transition-transform duration-300">
                  {tech.icon}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-light-gray hover:text-electric-cyan transition-colors duration-300"
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-current rounded-full mt-2 animate-ping"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;