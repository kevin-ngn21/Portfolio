import React from 'react';
import { ProjectCard } from './ProjectCard';

interface FeaturedProjectsProps {
  onLearnMore: () => void;
}

export function FeaturedProjects({ onLearnMore }: FeaturedProjectsProps) {
  const projects = [
    {
      id: 1,
            title: 'Associate Supplier Program',
      description: 'Managed the Associate Supplier Program supporting promotional content across Petro-Canada stations.',
      image: '../../images/PC-Station.jpg',
      tags: ['Management', 'Communication', 'Detail-Oriented',]
    },
    {
      id: 2,
            title: 'Petro-Canada: Fall Campaign',
      description: 'Developed key visuals and messaging for Petro-Canada’s Fall 2023 promotion on Instagram.',
      image: '../../images/IG-Pic-2.jpg',
      tags: ['Social Media', 'Creative Design', 'Messaging']
    },
    {
      id: 3,
        title: 'Petro-Canada: Halloween Campaign',
      description: 'Developed a Halloween promotion for Petro-Canada.',
      image: '../../images/IG-Pic.jpg',
      tags: ['Social Media', 'Creative Design', 'Messaging']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
  A showcase of projects highlighting my creativity, strategy, and ability to drive meaningful results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onLearnMore={onLearnMore} />
          ))}
        </div>
      </div>
    </section>
  );
}