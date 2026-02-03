import React from 'react';
import { ArrowLeft, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectDetailsProps {
  onBack: () => void;
}

export function ProjectDetails({ onBack }: ProjectDetailsProps) {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      summary: 'Led the design and development of a comprehensive e-commerce platform that serves over 50,000 users monthly. The platform features a modern, responsive design with advanced filtering, real-time inventory management, and seamless checkout experience. Built with scalability and performance in mind, the platform handles high traffic loads while maintaining optimal user experience.',
      image: 'https://images.unsplash.com/photo-1648260295976-de09f77ab469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2ODkwOTE3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      responsibilities: [
        'Architected the frontend infrastructure using React and TypeScript',
        'Designed and implemented responsive UI components following modern design principles',
        'Integrated payment gateway and authentication systems',
        'Optimized performance resulting in 40% faster load times',
        'Collaborated with backend team to design RESTful APIs'
      ],
      spotlight: 'Successfully launched the platform 2 weeks ahead of schedule, achieving a 95% customer satisfaction rating in the first quarter. The innovative product filtering system reduced search time by 60% and became a key differentiator in the market.',
      instagramLink: 'https://instagram.com/your-project'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      summary: 'Developed a secure and intuitive mobile banking application that revolutionizes how users manage their finances. The app features biometric authentication, real-time transaction notifications, budget tracking, and seamless money transfers. Designed with accessibility and security as top priorities, ensuring compliance with financial regulations while maintaining a delightful user experience.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4OTA4MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      responsibilities: [
        'Led UI/UX design process from wireframes to final implementation',
        'Implemented biometric authentication and end-to-end encryption',
        'Created intuitive dashboard with data visualization for spending insights',
        'Conducted extensive user testing and iterated based on feedback',
        'Ensured WCAG 2.1 AA accessibility compliance'
      ],
      spotlight: 'The app achieved 4.8 stars rating on both iOS and Android platforms within the first month of launch. User engagement increased by 150% compared to the legacy system, with average session time doubling. The streamlined onboarding process reduced drop-off rates by 70%.',
      instagramLink: 'https://instagram.com/your-banking-app'
    },
    {
      id: 3,
      title: 'Creative Portfolio',
      summary: 'Designed and built a visually stunning portfolio website for a creative agency, featuring smooth parallax animations, interactive galleries, and immersive storytelling. The website showcases the agency\'s diverse range of work across web design, branding, and digital marketing. Every element was carefully crafted to create a memorable browsing experience that reflects the agency\'s creative excellence.',
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg4NTQyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      responsibilities: [
        'Created custom animations and micro-interactions using Motion (Framer Motion)',
        'Implemented responsive image galleries with lazy loading',
        'Designed cohesive visual system with custom typography and color palette',
        'Optimized for performance achieving 95+ Lighthouse scores',
        'Integrated headless CMS for easy content management'
      ],
      spotlight: 'The portfolio website generated a 300% increase in qualified leads within the first three months. The unique interactive experience led to an average visit duration of 4.5 minutes, significantly higher than the industry average of 1.5 minutes. The site won recognition in multiple design awards and was featured in leading web design publications.',
      instagramLink: null
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4 text-gray-900">Featured Projects</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep dive into the projects that define my expertise and passion for creating impactful digital solutions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-96 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h2 className="text-4xl text-white mb-2">{project.title}</h2>
                  <div className="w-16 h-1 bg-blue-500"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 md:p-12">
                {/* Summary */}
                <div className="mb-8">
                  <h3 className="text-2xl text-gray-900 mb-4">Project Summary</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Core Responsibilities */}
                <div className="mb-8">
                  <h3 className="text-2xl text-gray-900 mb-4">Core Responsibilities</h3>
                  <ul className="space-y-3">
                    {project.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-lg">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spotlight */}
                <div className="mb-8">
                  <h3 className="text-2xl text-gray-900 mb-4">Spotlight</h3>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                    <p className="text-lg text-gray-800 leading-relaxed">
                      {project.spotlight}
                    </p>
                  </div>
                </div>

                {/* Instagram Link (if available) */}
                {project.instagramLink && (
                  <div className="flex justify-center pt-4">
                    <a
                      href={project.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      View on Instagram
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
