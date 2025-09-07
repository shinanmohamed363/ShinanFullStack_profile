import React, { useState, useEffect, useRef } from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    uptime: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate counters
          const animateCounter = (key: keyof typeof counters, target: number) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current * 10) / 10 }));
            }, 50);
          };

          setTimeout(() => animateCounter('experience', 2.8), 200);
          setTimeout(() => animateCounter('projects', 15), 400);
          setTimeout(() => animateCounter('uptime', 99.9), 600);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const achievements = [
    {
      icon: '🚀',
      title: 'Cross-Platform Solutions',
      description: 'Built POS systems with desktop, web, and mobile interfaces'
    },
    {
      icon: '🤖',
      title: 'AI/ML Integration',
      description: 'Developed AI-powered salon management systems for Europe & Middle East'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Achieved 30% performance improvement and 92% bug reduction'
    },
    {
      icon: '🌍',
      title: 'Global Scale',
      description: 'Deployed applications serving customers across multiple continents'
    }
  ];

  const techStack = [
    { name: 'JavaScript', level: 95, icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 90, icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 88, icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 85, icon: '🐍', color: 'from-green-400 to-blue-500' },
    { name: 'PHP/Laravel', level: 82, icon: '🔥', color: 'from-red-400 to-red-600' },
    { name: 'MongoDB', level: 80, icon: '🍃', color: 'from-green-500 to-green-700' },
    { name: 'MySQL', level: 85, icon: '🐬', color: 'from-blue-500 to-blue-700' },
    { name: 'Docker', level: 75, icon: '🐳', color: 'from-blue-400 to-blue-800' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-electric-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-electric-cyan/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold text-gradient font-poppins mb-6 section-reveal ${isVisible ? 'revealed' : ''}`}>
            About Me
          </h2>
          <p className={`text-xl text-light-gray max-w-3xl mx-auto section-reveal ${isVisible ? 'revealed' : ''}`}>
            Passionate full-stack developer with expertise in modern web technologies and a drive for creating impactful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 section-reveal ${isVisible ? 'revealed' : ''}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white font-poppins">
                Full-Stack Software Engineer
              </h3>
              
              <p className="text-light-gray text-lg leading-relaxed">
                With <span className="text-electric-cyan font-semibold">2.8+ years of professional experience</span>, 
                I specialize in building scalable cross-platform solutions using modern technologies. 
                My expertise spans from <span className="text-electric-purple font-semibold">MERN stack development</span> to 
                <span className="text-neon-green font-semibold"> AI/ML integration</span>, delivering high-quality software 
                that drives business growth.
              </p>

              <p className="text-light-gray text-lg leading-relaxed">
                I've successfully delivered projects across various domains including 
                <span className="text-electric-cyan font-semibold"> e-commerce platforms</span>, 
                <span className="text-electric-purple font-semibold"> management systems</span>, and 
                <span className="text-neon-green font-semibold"> AI-powered applications</span>. 
                My approach focuses on clean, maintainable code and user-centric design.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center glass rounded-xl p-6 hover-glow">
                <div className="text-3xl font-bold text-gradient-green mb-2">
                  {counters.experience}+
                </div>
                <div className="text-light-gray text-sm">Years Experience</div>
              </div>
              <div className="text-center glass rounded-xl p-6 hover-glow">
                <div className="text-3xl font-bold text-gradient-green mb-2">
                  {counters.projects}+
                </div>
                <div className="text-light-gray text-sm">Projects Delivered</div>
              </div>
              <div className="text-center glass rounded-xl p-6 hover-glow">
                <div className="text-3xl font-bold text-gradient-green mb-2">
                  {counters.uptime}%
                </div>
                <div className="text-light-gray text-sm">Uptime</div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white font-poppins mb-6">
                Key Achievements
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`glass rounded-xl p-4 hover-glow card-stagger ${isVisible ? 'animate' : ''}`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <h5 className="text-white font-semibold mb-2">{achievement.title}</h5>
                    <p className="text-light-gray text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className={`section-reveal ${isVisible ? 'revealed' : ''}`}>
            <div className="glass rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-white font-poppins mb-8 text-center">
                Technical Expertise
              </h4>
              
              <div className="space-y-6">
                {techStack.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className={`card-stagger ${isVisible ? 'animate' : ''}`}
                    style={{animationDelay: `${index * 0.1 + 0.5}s`}}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{tech.icon}</span>
                        <span className="text-white font-medium">{tech.name}</span>
                      </div>
                      <span className="text-electric-cyan font-semibold">{tech.level}%</span>
                    </div>
                    
                    <div className="w-full bg-glass-bg rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${tech.level}%` : '0%',
                          transitionDelay: `${index * 0.1 + 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className={`mt-20 section-reveal ${isVisible ? 'revealed' : ''}`}>
          <h4 className="text-2xl font-semibold text-white font-poppins text-center mb-12">
            Education & Professional Development
          </h4>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-xl p-6 hover-glow text-center">
              <div className="text-3xl mb-4">🎓</div>
              <h5 className="text-white font-semibold mb-2">B.Sc. (Hons)</h5>
              <p className="text-light-gray text-sm">Software Engineering</p>
              <p className="text-electric-cyan text-xs mt-1">Cardiff Metropolitan University</p>
            </div>
            
            <div className="glass rounded-xl p-6 hover-glow text-center">
              <div className="text-3xl mb-4">📜</div>
              <h5 className="text-white font-semibold mb-2">HND</h5>
              <p className="text-light-gray text-sm">Software Engineering</p>
              <p className="text-electric-cyan text-xs mt-1">NIBM</p>
            </div>
            
            <div className="glass rounded-xl p-6 hover-glow text-center">
              <div className="text-3xl mb-4">🤖</div>
              <h5 className="text-white font-semibold mb-2">AI/ML</h5>
              <p className="text-light-gray text-sm">Machine Learning</p>
              <p className="text-electric-cyan text-xs mt-1">Specialized Training</p>
            </div>
            
            <div className="glass rounded-xl p-6 hover-glow text-center">
              <div className="text-3xl mb-4">☁️</div>
              <h5 className="text-white font-semibold mb-2">Cloud Computing</h5>
              <p className="text-light-gray text-sm">Digital Ocean</p>
              <p className="text-electric-cyan text-xs mt-1">Production Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;