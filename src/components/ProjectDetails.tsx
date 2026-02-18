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
      title: 'Petro-Canada Associate Supplier Program',
      summary: 'This project involved managing the Petro-Canada Associate Supplier Program, which supplies promotional content and signage for retail locations across Canada.',
      image: '../../images/PC-Station.jpg',
      responsibilities: [
        'Managed the Associate Supplier Program, supporting content needs for stations nationwide.',
        'Coordinated briefings, creative development, and proofing with multiple agency teams.',
        'Ensured promotional materials were aligned with Petro-Canada’s branding and messaging.',
        'Collaborated with cross-functional teams and brands to apply revisions, finalize deliverables, and meet deadlines.',

      ],
      spotlight: 'A major highlight of this role was overseeing the end-to-end production cycle for signage and promotional content, ensuring clear communication between teams and delivering accurate, high-quality materials to Petro-Canada stations.',
      instagramLink: null
    },
    {
      id: 2,
      title: 'Petro-Canada Fall Campaign',
      summary: 'This project involved producing Fall 2023 promotional materials for Petro-Canada, designed to highlight seasonal deals and drive customer engagement across retail locations nationwide.',
      image: '../../images/IG-Pic-2.jpg',
      responsibilities: [
        'Created promotional concepts and messaging for Fall 2023 campaigns.',
        'Collaborated with agency partners on design development and revisions.',
        'Ensured seasonal assets aligned with Petro-Canada brand guidelines.',
        'Supported production and quality checks for signage and promotional materials.'
      ],
      spotlight: 'The highlight of this project was developing cohesive, visually appealing fall-themed assets that were deployed across Petro-Canada stations nationwide, enhancing the brand’s seasonal presence.',
      instagramLink: 'https://www.instagram.com/p/CzHWIygPwhi/?img_index=1'
    },
    {
      id: 3,
      title: 'Petro-Canada Halloween Campaign',
      summary: 'This project involved developing Petro-Canada’s 2023 Halloween promotion, a creative campaign showcasing DIY Halloween costume ideas using everyday Petro-Canada products.',
      image: '../../images/IG-pic.jpg',
      responsibilities: [
        'Coordinated communication between Petro-Canada’s agency partners and marketing lead.',
        'Assisted with creative development and campaign messaging.',
        'Supported content creation for promotional assets.',
        'Helped review and proof campaign materials to ensure brand consistency.',
      ],
      spotlight: 'The central highlight of this project was developing creative assets that showcased unique Halloween costume ideas using real Petro-Canada products, giving the campaign a fun, seasonal, and highly shareable angle.',
      instagramLink: 'https://www.instagram.com/p/CzB3PXmr7YC/?img_index=1'
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
