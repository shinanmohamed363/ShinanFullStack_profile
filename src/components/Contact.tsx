import React, { useState, useEffect, useRef } from 'react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'Shinanmohamed363@gmail.com',
      link: 'mailto:Shinanmohamed363@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '(+94) 74 024 5152',
      link: 'tel:+94740245152'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Negombo, Western Province, Sri Lanka',
      link: 'https://maps.google.com/?q=Negombo,Western+Province,Sri+Lanka'
    }
  ];

  const socialLinks = [
    {
      platform: 'GitHub',
      icon: '💻',
      url: 'http://github.com/shinanmohamed363',
      username: '@shinanmohamed363'
    },
    {
      platform: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/shinanmohamed363',
      username: 'Najimudeen Sanan'
    },
    {
      platform: 'Portfolio',
      icon: '🌐',
      url: 'https://shinanportfolio.vercel.app',
      username: 'Previous Portfolio'
    }
  ];

  const linkedInPosts = [
    {
      title: 'New Project Journey Begins',
      url: 'https://www.linkedin.com/posts/shinanmohamed363_day-1-new-project-journey-begins-activity-7277336239916163072-iizR',
      type: 'text'
    },
    {
      title: 'Exciting New Project Alert',
      url: 'https://www.linkedin.com/posts/shinanmohamed363_exciting-new-project-alert-thrilled-to-activity-7259960468239196160-kjBO',
      type: 'text'
    },
    {
      title: 'MERN Stack Development',
      url: 'https://www.linkedin.com/posts/shinanmohamed363_mernstack-react-webdevelopment-activity-7225453493904453633-Vnxa',
      type: 'video'
    },
    {
      title: 'Web Development Showcase',
      url: 'https://www.linkedin.com/posts/shinanmohamed363_mernstack-webdevelopment-softwareengineering-activity-7223383964541972481-BKWr',
      type: 'video'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-48 h-48 bg-electric-purple/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-electric-cyan/10 rounded-full blur-2xl animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-neon-green/5 rounded-full blur-xl animate-float" style={{animationDelay: '-4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold text-gradient font-poppins mb-6 section-reveal ${isVisible ? 'revealed' : ''}`}>
            Get In Touch
          </h2>
          <p className={`text-xl text-light-gray max-w-3xl mx-auto section-reveal ${isVisible ? 'revealed' : ''}`}>
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`section-reveal ${isVisible ? 'revealed' : ''}`}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white font-poppins mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-light-gray mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-light-gray mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-light-gray mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-light-gray mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary hover-glow ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-neon-green/10 border border-neon-green/30 text-neon-green">
                    <p>✓ Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                    <p>✗ Something went wrong. Please try again or contact me directly.</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information & Social */}
          <div className={`space-y-8 section-reveal ${isVisible ? 'revealed' : ''}`}>
            {/* Contact Info */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white font-poppins mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.link}
                    target={info.label === 'Location' ? '_blank' : undefined}
                    rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 glass rounded-xl hover-glow group"
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <div className="text-light-gray text-sm">{info.label}</div>
                      <div className="text-white group-hover:text-electric-cyan transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white font-poppins mb-6">
                Connect With Me
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 glass rounded-xl hover-glow group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{social.icon}</div>
                      <div>
                        <div className="text-white group-hover:text-electric-cyan transition-colors duration-300 font-medium">
                          {social.platform}
                        </div>
                        <div className="text-light-gray text-sm">{social.username}</div>
                      </div>
                    </div>
                    <div className="text-light-gray group-hover:text-electric-cyan transition-colors duration-300">
                      →
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* LinkedIn Posts */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white font-poppins mb-6">
                Recent LinkedIn Posts
              </h3>
              
              <div className="space-y-3">
                {linkedInPosts.map((post, index) => (
                  <a
                    key={index}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 glass rounded-lg hover-glow group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-lg">
                        {post.type === 'video' ? '🎥' : '📝'}
                      </div>
                      <div className="text-white group-hover:text-electric-cyan transition-colors duration-300 text-sm">
                        {post.title}
                      </div>
                    </div>
                    <div className="text-light-gray group-hover:text-electric-cyan transition-colors duration-300 text-xs">
                      →
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-white font-poppins mb-4">
                Availability Status
              </h3>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-neon-green font-medium">Available for New Projects</span>
              </div>
              <p className="text-light-gray text-sm">
                Open to full-time opportunities, freelance projects, and collaborations
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-20 text-center section-reveal ${isVisible ? 'revealed' : ''}`}>
          <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gradient font-poppins mb-6">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-xl text-light-gray mb-8 leading-relaxed">
              Whether you need a full-stack web application, AI-powered solution, or want to discuss 
              a technical challenge, I'm here to help bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Shinanmohamed363@gmail.com"
                className="btn-primary hover-glow"
              >
                Start a Conversation
              </a>
              <a
                href="https://www.linkedin.com/in/shinanmohamed363"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary hover-glow"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;