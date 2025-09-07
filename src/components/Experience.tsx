import React, { useState, useEffect, useRef } from 'react';

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  period: string;
  description: string[];
  achievements: string[];
  technologies: string[];
  logo: string;
  type: 'full-time' | 'internship';
  progression?: string;
}

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
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

  const experiences: ExperienceItem[] = [
    {
      id: 'one-day-digital',
      company: 'ONE DAY DIGITAL',
      position: 'Mid-Level Software Engineer',
      duration: '2+ Years',
      period: 'Mar 2023 – Aug 2025',
      progression: 'Promoted from Intern → Junior → Mid-Level',
      type: 'full-time',
      logo: '🚀',
      description: [
        'Built and maintained cross-platform POS solutions delivering desktop, web, and mobile interfaces',
        'Developed microservice-based backends with JWT authentication and RESTful APIs',
        'Architected solutions ensuring 99.9% uptime on Digital Ocean infrastructure',
        'Led development of 10+ applications using diverse tech stacks for various clients'
      ],
      achievements: [
        'Enhanced efficiency and scalability for retail clients',
        'Achieved 92% reduction in production bugs through TypeScript and Zod validation',
        'Successfully delivered cross-platform solutions across desktop, web, and mobile',
        'Streamlined transaction workflows and reporting systems',
        'Implemented clean, maintainable code practices with thorough code reviews'
      ],
      technologies: [
        'MERN Stack', 'TypeScript', 'PHP/Laravel', 'Python/Flask', 'Digital Ocean',
        'Docker', 'JWT Authentication', 'RESTful APIs', 'WebSocket (WSS)',
        'Microservices', 'Agile/Scrum', 'Bitbucket', 'MongoDB', 'MySQL'
      ]
    },
    {
      id: 'synapse-solution',
      company: 'SYNAPSE SOLUTION PVT LTD',
      position: 'Intern Software Engineer',
      duration: '5 Months',
      period: 'Oct 2022 – Mar 2023',
      type: 'internship',
      logo: '💻',
      description: [
        'Developed dynamic React web pages using state management and modern JavaScript',
        'Designed SEO-optimized modern UIs enhancing user experience',
        'Collaborated with designers, developers, and product managers',
        'Built microservice-based Java (Spring Boot) backends with SOLID principles'
      ],
      achievements: [
        'Boosted website leads by 15% through improved React interfaces',
        'Enhanced user experience and client satisfaction with modern UI designs',
        'Delivered high-quality features on schedule through effective collaboration',
        'Improved legacy software performance by 30%',
        'Applied data structures & algorithms best practices in backend development'
      ],
      technologies: [
        'React', 'JavaScript (ES6+)', 'Java Spring Boot', 'HTML5/CSS3',
        'SOLID Principles', 'Data Structures & Algorithms', 'SEO Optimization',
        'UI/UX Design', 'Legacy System Maintenance'
      ]
    }
  ];

  const skillsGained = [
    { category: 'Frontend', skills: ['React', 'TypeScript', 'Tailwind CSS', 'State Management'] },
    { category: 'Backend', skills: ['Node.js', 'PHP/Laravel', 'Python/Flask', 'Java Spring Boot'] },
    { category: 'Database', skills: ['MongoDB', 'MySQL', 'Database Design', 'Query Optimization'] },
    { category: 'DevOps', skills: ['Digital Ocean', 'Docker', 'CI/CD', 'Linux/Ubuntu'] },
    { category: 'Architecture', skills: ['Microservices', 'RESTful APIs', 'JWT Auth', 'MVC Pattern'] },
    { category: 'Soft Skills', skills: ['Agile/Scrum', 'Team Leadership', 'Code Reviews', 'Mentoring'] }
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-32 h-32 bg-electric-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-electric-purple/5 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-neon-green/10 rounded-full blur-2xl animate-float" style={{animationDelay: '-1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold text-gradient font-poppins mb-6 section-reveal ${isVisible ? 'revealed' : ''}`}>
            Professional Experience
          </h2>
          <p className={`text-xl text-light-gray max-w-3xl mx-auto section-reveal ${isVisible ? 'revealed' : ''}`}>
            2.8+ years of progressive growth from intern to mid-level engineer, building scalable solutions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-cyan via-electric-purple to-neon-green transform md:-translate-x-px"></div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative card-stagger ${isVisible ? 'animate' : ''}`}
                style={{animationDelay: `${index * 0.3}s`}}
              >
                {/* Timeline Node */}
                <div className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-electric-cyan to-electric-purple transform -translate-x-2 md:-translate-x-1/2 ${
                  index === 0 ? 'animate-glow' : ''
                }`}></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8'
                }`}>
                  <div className="glass rounded-2xl p-8 hover-glow group">
                    {/* Company Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-4xl">{exp.logo}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white font-poppins group-hover:text-electric-cyan transition-colors duration-300">
                          {exp.company}
                        </h3>
                        <p className="text-electric-cyan font-medium">{exp.position}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-sm text-light-gray">{exp.period}</span>
                          <span className="text-sm text-neon-green">• {exp.duration}</span>
                          {exp.progression && (
                            <span className="text-xs bg-electric-purple/20 text-electric-purple px-2 py-1 rounded-full">
                              {exp.progression}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'full-time' 
                          ? 'bg-neon-green/20 text-neon-green' 
                          : 'bg-electric-cyan/20 text-electric-cyan'
                      }`}>
                        {exp.type === 'full-time' ? 'Full-Time' : 'Internship'}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-4">Role & Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.description.map((desc: string, idx: number) => (
                          <li key={idx} className="text-light-gray flex items-start">
                            <span className="text-electric-cyan mr-2 mt-1">▪</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement: string, idx: number) => (
                          <li key={idx} className="text-light-gray flex items-start">
                            <span className="text-neon-green mr-2 mt-1">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-4">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech: string) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-glass-bg rounded-full text-sm text-light-gray hover:text-electric-cyan hover:bg-electric-cyan/10 transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Development */}
        <div className={`mt-20 section-reveal ${isVisible ? 'revealed' : ''}`}>
          <h3 className="text-2xl font-semibold text-white font-poppins text-center mb-12">
            Skills Developed Through Experience
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsGained.map((category, index) => (
              <div 
                key={category.category}
                className={`glass rounded-xl p-6 hover-glow card-stagger ${isVisible ? 'animate' : ''}`}
                style={{animationDelay: `${index * 0.1 + 0.5}s`}}
              >
                <h4 className="text-white font-semibold mb-4 text-center">{category.category}</h4>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="text-light-gray text-sm flex items-center">
                      <span className="w-2 h-2 bg-electric-cyan rounded-full mr-3"></span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Progression */}
        <div className={`mt-20 glass rounded-2xl p-8 section-reveal ${isVisible ? 'revealed' : ''}`}>
          <h3 className="text-2xl font-semibold text-white font-poppins text-center mb-8">
            Career Progression & Growth
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-white font-semibold mb-2">Intern (2022)</h4>
              <p className="text-light-gray text-sm">Started as an intern, focused on learning React and Java Spring Boot fundamentals</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-white font-semibold mb-2">Junior Developer (2023)</h4>
              <p className="text-light-gray text-sm">Promoted to junior role, began building full-stack applications independently</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h4 className="text-white font-semibold mb-2">Mid-Level Engineer (2024+)</h4>
              <p className="text-light-gray text-sm">Leading projects, mentoring juniors, and architecting scalable solutions</p>
            </div>
          </div>
        </div>

        {/* Professional References */}
        <div className={`mt-20 text-center section-reveal ${isVisible ? 'revealed' : ''}`}>
          <h3 className="text-2xl font-semibold text-white font-poppins mb-8">
            Professional Reference
          </h3>
          
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <div className="text-3xl mb-4">👨‍💼</div>
            <h4 className="text-white font-semibold mb-2">Reshika Sandeepa</h4>
            <p className="text-electric-cyan mb-2">Cloud Engineer - Codegen International (Pvt) Ltd</p>
            <div className="space-y-1 text-light-gray text-sm">
              <p>📧 reshika@codegen.net</p>
              <p>📞 +94 771504161</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;