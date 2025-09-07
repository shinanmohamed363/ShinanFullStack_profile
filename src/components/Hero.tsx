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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
              <div className="relative w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-white/20">
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
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gradient font-poppins animate-fadeInUp leading-tight" style={{animationDelay: '0.2s'}}>
              Najimudeen Sanan
            </h2>
            
            {/* Typing Animation Role */}
            <div className="h-16 sm:h-20 flex items-center justify-center px-4">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white font-inter min-h-[2rem] sm:min-h-[3rem] text-center">
                {displayText}
                <span className={`inline-block w-0.5 sm:w-1 h-6 sm:h-8 bg-electric-cyan ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
              </h3>
            </div>

            {/* Subtitle */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-light-gray max-w-3xl mx-auto animate-fadeInUp px-4 text-center leading-relaxed" style={{animationDelay: '0.6s'}}>
              2.8+ Years Experience Building Scalable Solutions<br className="sm:hidden"/>
              <span className="hidden sm:inline"> • </span>
              <span className="sm:hidden"><br/></span>Expert in MERN Stack, Python & AI/ML
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 animate-fadeInUp px-4" style={{animationDelay: '0.8s'}}>
            <div className="text-center min-w-[80px]">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-green">2.8+</div>
              <div className="text-light-gray text-xs sm:text-sm">Years Experience</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-green">15+</div>
              <div className="text-light-gray text-xs sm:text-sm">Projects Delivered</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-green">99.9%</div>
              <div className="text-light-gray text-xs sm:text-sm">Uptime</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mt-8 sm:mt-12 animate-fadeInUp px-4" style={{animationDelay: '1s'}}>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary hover-glow text-sm sm:text-base py-3 px-6"
            >
              View My Projects
            </button>
            <button
              onClick={downloadResume}
              className="btn-secondary hover-glow text-sm sm:text-base py-3 px-6"
            >
              Download Resume
            </button>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-8 sm:mt-16 animate-fadeInUp px-4" style={{animationDelay: '1.2s'}}>
            {techIcons.map((tech, index) => (
              <div
                key={tech.name}
                className="glass rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center hover-glow cursor-pointer group"
                style={{animationDelay: tech.delay}}
                title={tech.name}
              >
                <span className="text-lg sm:text-2xl group-hover:scale-125 transition-transform duration-300">
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