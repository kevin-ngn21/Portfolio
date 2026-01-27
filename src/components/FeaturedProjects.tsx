import React from 'react';
import { ProjectCard } from './ProjectCard';

export function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: 'Associate Supplier Program',
      description: 'Managed the Associate Supplier Program supporting promotional content across Petro-Canada stations.',
      image: 'https://images.unsplash.com/photo-1648260295976-de09f77ab469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2ODkwOTE3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Management', 'Communication', 'Detail-Oriented',]
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Intuitive mobile banking application focused on security and ease of use.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4OTA4MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Mobile', 'App Design', 'Fintech']
    },
    {
      id: 3,
      title: 'Creative Portfolio',
      description: 'A stunning portfolio website showcasing creative work with smooth animations and interactions.',
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg4NTQyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Portfolio', 'Web Design', 'Animation']
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
