import React, { useState, useEffect, useRef } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'industrial' | 'personal';
  featured: boolean;
  impact?: string;
  image?: string;
  status: 'completed' | 'ongoing';
}

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'industrial' | 'personal'>('all');
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

  const projects: Project[] = [
    // Industrial Projects
    {
      id: 'smartco',
      title: 'SmartCo Management Platform',
      description: 'Fully automated cross-platform software solution for customer transactions and internal operations, significantly enhancing efficiency and scalability.',
      tech: ['MERN Stack', 'PayPal/KNET', 'Socket.IO', 'MongoDB', 'Digital Ocean'],
      liveUrl: 'https://app.smartco.live',
      category: 'industrial',
      featured: true,
      impact: 'Enhanced efficiency and scalability',
      status: 'completed',
      image: '💼'
    },
    {
      id: 'oran',
      title: 'Oran - AI Salon Management',
      description: 'Large-scale AI-powered salon management system targeting Europe and the Middle East with intelligent scheduling and customer management.',
      tech: ['Python', 'LLM', 'ML', 'Flask', 'React', 'TypeScript', 'Microservices'],
      liveUrl: 'https://www.oranesalon.com',
      category: 'industrial',
      featured: true,
      impact: 'AI-driven optimization for salon operations',
      status: 'completed',
      image: '💇‍♀️'
    },
    {
      id: 'akira',
      title: 'Akira E-commerce Platform',
      description: 'WordPress/WooCommerce e-commerce platform with custom plugin development and third-party delivery integration.',
      tech: ['WordPress', 'WooCommerce', 'MySQL', 'PHP', 'Digital Ocean'],
      liveUrl: 'https://akira.lk',
      category: 'industrial',
      featured: true,
      impact: 'Streamlined order management and fulfillment',
      status: 'completed',
      image: '🛒'
    },
    {
      id: 'ministore',
      title: 'Multi-tenant E-commerce Platforms',
      description: 'Laravel-based multi-tenant e-commerce platforms (MiniStore.lk & LocalShop.lk) with dynamic store creation and management.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Livewire', 'Digital Ocean'],
      liveUrl: 'https://ministore.lk',
      category: 'industrial',
      featured: true,
      impact: 'Enabled multiple business launches',
      status: 'completed',
      image: '🏪'
    },

    // Personal Projects
    {
      id: 'netflix-clone',
      title: 'Netflix Clone',
      description: 'Full-featured Netflix clone with user authentication, movie browsing, and streaming interface built with modern React.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      liveUrl: 'https://sanan-netflix-clone-w39d.vercel.app',
      githubUrl: 'http://github.com/shinanmohamed363',
      category: 'personal',
      featured: true,
      status: 'completed',
      image: '🎬'
    },
    {
      id: 'apple-clone',
      title: 'Apple Website Clone',
      description: 'Pixel-perfect recreation of Apple\'s website with smooth animations and responsive design using React and Tailwind CSS.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      liveUrl: 'https://sanan-apple-clone.vercel.app',
      githubUrl: 'http://github.com/shinanmohamed363',
      category: 'personal',
      featured: true,
      status: 'completed',
      image: '🍎'
    },
    {
      id: 'tesla-clone',
      title: 'Tesla Website Clone',
      description: 'Interactive Tesla website clone featuring 3D elements, smooth scrolling, and modern UI/UX design patterns.',
      tech: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://tesla-clone-silk-beta.vercel.app',
      githubUrl: 'http://github.com/shinanmohamed363',
      category: 'personal',
      featured: true,
      status: 'completed',
      image: '🚗'
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      description: 'Previous portfolio website showcasing projects and skills with modern design and smooth animations.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://shinanportfolio.vercel.app',
      githubUrl: 'http://github.com/shinanmohamed363',
      category: 'personal',
      featured: false,
      status: 'completed',
      image: '💼'
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });


  const openProject = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-electric-purple/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-electric-cyan/10 rounded-full blur-2xl animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-neon-green/5 rounded-full blur-xl animate-float" style={{animationDelay: '-4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold text-gradient font-poppins mb-6 section-reveal ${isVisible ? 'revealed' : ''}`}>
            Featured Projects
          </h2>
          <p className={`text-xl text-light-gray max-w-3xl mx-auto section-reveal ${isVisible ? 'revealed' : ''}`}>
            A showcase of industrial solutions and personal projects demonstrating full-stack expertise
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex justify-center mb-12 section-reveal ${isVisible ? 'revealed' : ''}`}>
          <div className="glass rounded-xl p-2 flex space-x-2">
            {[
              { key: 'all' as const, label: 'All Projects', count: projects.length },
              { key: 'industrial' as const, label: 'Industrial', count: projects.filter(p => p.category === 'industrial').length },
              { key: 'personal' as const, label: 'Personal', count: projects.filter(p => p.category === 'personal').length }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-electric-cyan to-electric-purple text-white'
                    : 'text-light-gray hover:text-white hover:bg-white/10'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`glass rounded-2xl overflow-hidden hover-glow group card-stagger ${isVisible ? 'animate' : ''}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-electric-cyan/10 to-electric-purple/10 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glass-bg/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'industrial' 
                      ? 'bg-electric-cyan/20 text-electric-cyan' 
                      : 'bg-electric-purple/20 text-electric-purple'
                  }`}>
                    {project.category === 'industrial' ? 'Industrial' : 'Personal'}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed'
                      ? 'bg-neon-green/20 text-neon-green'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-electric-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-light-gray text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Impact */}
                {project.impact && (
                  <div className="mb-4">
                    <span className="text-neon-green text-xs font-medium bg-neon-green/10 px-2 py-1 rounded-full">
                      💡 {project.impact}
                    </span>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-glass-bg rounded-md text-xs text-light-gray"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-glass-bg rounded-md text-xs text-electric-cyan">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <button
                      onClick={() => openProject(project.liveUrl!)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-electric-cyan to-electric-purple text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300"
                    >
                      Live Demo
                    </button>
                  )}
                  {project.githubUrl && (
                    <button
                      onClick={() => openProject(project.githubUrl!)}
                      className="px-4 py-2 glass text-light-gray hover:text-white rounded-lg font-medium hover:scale-105 transition-all duration-300"
                    >
                      GitHub
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className={`glass rounded-2xl p-8 section-reveal ${isVisible ? 'revealed' : ''}`}>
          <h3 className="text-2xl font-semibold text-white font-poppins text-center mb-8">
            Project Statistics
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-green mb-2">
                {projects.filter(p => p.category === 'industrial').length}
              </div>
              <div className="text-light-gray text-sm">Industrial Projects</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-green mb-2">
                {projects.filter(p => p.category === 'personal').length}
              </div>
              <div className="text-light-gray text-sm">Personal Projects</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-green mb-2">
                100%
              </div>
              <div className="text-light-gray text-sm">Success Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-green mb-2">
                {projects.filter(p => p.status === 'completed').length}
              </div>
              <div className="text-light-gray text-sm">Completed</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 section-reveal ${isVisible ? 'revealed' : ''}`}>
          <h3 className="text-2xl font-semibold text-white font-poppins mb-4">
            Want to see more?
          </h3>
          <p className="text-light-gray mb-8">
            Check out my GitHub profile for additional projects and open-source contributions
          </p>
          <button
            onClick={() => openProject('http://github.com/shinanmohamed363')}
            className="btn-primary hover-glow"
          >
            Visit GitHub Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;