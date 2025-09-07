import React, { useState, useEffect, useRef } from 'react';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: '⚡',
      skills: [
        { name: 'JavaScript (ES6+)', level: 95, years: '2.8', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 88, years: '2', icon: '📘', color: 'from-blue-400 to-blue-600' },
        { name: 'React.js', level: 92, years: '2.5', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
        { name: 'Node.js', level: 90, years: '2.8', icon: '🟢', color: 'from-green-400 to-green-600' },
        { name: 'Python', level: 85, years: '2', icon: '🐍', color: 'from-green-400 to-blue-500' },
        { name: 'PHP/Laravel', level: 82, years: '2.5', icon: '🔥', color: 'from-red-400 to-red-600' },
      ]
    },
    {
      title: 'Databases & APIs',
      icon: '🗃️',
      skills: [
        { name: 'MongoDB', level: 85, years: '2.5', icon: '🍃', color: 'from-green-500 to-green-700' },
        { name: 'MySQL', level: 88, years: '2.8', icon: '🐬', color: 'from-blue-500 to-blue-700' },
        { name: 'RESTful APIs', level: 92, years: '2.8', icon: '🔗', color: 'from-purple-400 to-purple-600' },
        { name: 'GraphQL', level: 75, years: '1.5', icon: '📊', color: 'from-pink-400 to-pink-600' },
        { name: 'Socket.IO', level: 80, years: '2', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'Digital Ocean', level: 85, years: '2.5', icon: '🌊', color: 'from-blue-400 to-blue-700' },
        { name: 'Docker', level: 75, years: '1.5', icon: '🐳', color: 'from-blue-400 to-blue-800' },
        { name: 'Git/GitHub', level: 92, years: '2.8', icon: '📋', color: 'from-gray-600 to-gray-800' },
        { name: 'CI/CD', level: 78, years: '2', icon: '🔄', color: 'from-green-500 to-blue-500' },
        { name: 'Linux/Ubuntu', level: 80, years: '2.5', icon: '🐧', color: 'from-orange-400 to-red-500' },
      ]
    },
    {
      title: 'Architecture & Tools',
      icon: '🏗️',
      skills: [
        { name: 'Microservices', level: 82, years: '2', icon: '🔧', color: 'from-purple-500 to-purple-700' },
        { name: 'MVC Pattern', level: 90, years: '2.8', icon: '📐', color: 'from-indigo-400 to-indigo-600' },
        { name: 'Tailwind CSS', level: 88, years: '2', icon: '🎨', color: 'from-cyan-400 to-teal-500' },
        { name: 'Agile/Scrum', level: 85, years: '2.5', icon: '🏃‍♂️', color: 'from-green-400 to-emerald-500' },
        { name: 'AI/ML Basics', level: 70, years: '1', icon: '🤖', color: 'from-violet-400 to-violet-600' },
      ]
    }
  ];

  const certifications = [
    { name: 'Full Stack Development', issuer: 'Industry Experience', icon: '🏆' },
    { name: 'Cloud Deployment', issuer: 'Digital Ocean', icon: '☁️' },
    { name: 'Agile Methodology', issuer: 'Scrum Practice', icon: '⚡' },
    { name: 'AI/ML Integration', issuer: 'Practical Projects', icon: '🤖' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-electric-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-electric-purple/10 rounded-full blur-2xl animate-float" style={{animationDelay: '-3s'}}></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-neon-green/5 rounded-full blur-3xl animate-float" style={{animationDelay: '-1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold text-gradient font-poppins mb-6 section-reveal ${isVisible ? 'revealed' : ''}`}>
            Technical Skills
          </h2>
          <p className={`text-xl text-light-gray max-w-3xl mx-auto section-reveal ${isVisible ? 'revealed' : ''}`}>
            Comprehensive expertise across the full development stack with hands-on experience in modern technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`glass rounded-2xl p-8 hover-glow card-stagger ${isVisible ? 'animate' : ''}`}
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white font-poppins">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-xs text-light-gray bg-glass-bg px-2 py-1 rounded-full">
                          {skill.years}y
                        </span>
                      </div>
                      <span className="text-electric-cyan font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-glass-bg rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className={`glass rounded-2xl p-8 section-reveal ${isVisible ? 'revealed' : ''}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white font-poppins mb-4">
              Certifications & Achievements
            </h3>
            <p className="text-light-gray">
              Professional development and continuous learning journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className={`glass rounded-xl p-6 hover-glow text-center card-stagger ${isVisible ? 'animate' : ''}`}
                style={{animationDelay: `${index * 0.1 + 0.5}s`}}
              >
                <div className="text-3xl mb-4">{cert.icon}</div>
                <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                <p className="text-light-gray text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className={`mt-16 text-center section-reveal ${isVisible ? 'revealed' : ''}`}>
          <h3 className="text-2xl font-semibold text-white font-poppins mb-8">
            Technical Highlights
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 hover-glow">
              <div className="text-3xl mb-4">🔥</div>
              <h4 className="text-white font-semibold mb-2">Clean Code</h4>
              <p className="text-light-gray text-sm">
                Following SOLID principles and best practices for maintainable, scalable code
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 hover-glow">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-white font-semibold mb-2">Performance</h4>
              <p className="text-light-gray text-sm">
                Optimized applications with 99.9% uptime and 30% performance improvements
              </p>
            </div>
            
            <div className="glass rounded-xl p-6 hover-glow">
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="text-white font-semibold mb-2">Innovation</h4>
              <p className="text-light-gray text-sm">
                Integrating cutting-edge technologies like AI/ML and microservices architecture
              </p>
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className={`mt-16 text-center section-reveal ${isVisible ? 'revealed' : ''}`}>
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white font-poppins mb-4">
              Continuous Learning Philosophy
            </h3>
            <p className="text-light-gray text-lg leading-relaxed">
              "Technology evolves rapidly, and I embrace this change by continuously learning new frameworks, 
              languages, and methodologies. My goal is to stay at the forefront of software development while 
              maintaining a strong foundation in computer science principles."
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <span className="glass px-4 py-2 rounded-full text-electric-cyan text-sm">
                Always Learning
              </span>
              <span className="glass px-4 py-2 rounded-full text-electric-purple text-sm">
                Innovation Focused
              </span>
              <span className="glass px-4 py-2 rounded-full text-neon-green text-sm">
                Quality Driven
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;