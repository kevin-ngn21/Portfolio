import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            I'm a passionate creative professional with a love for crafting elegant solutions to complex problems. 
            With years of experience in design and development, I've helped numerous clients bring their visions to life.
          </p>
          
          <p className="mb-6">
            My approach combines technical expertise with a keen eye for aesthetics, ensuring that every project 
            not only functions flawlessly but also delivers an exceptional user experience. I believe in the power 
            of thoughtful design to transform ideas into impactful realities.
          </p>
          
          <p>
            When I'm not working on projects, you'll find me exploring new technologies, contributing to open-source 
            communities, or seeking inspiration in art and nature. I'm always excited to collaborate on meaningful 
            projects that push boundaries and create positive change.
          </p>
        </div>

        {/* Skills or Stats (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl mb-2 text-blue-600">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2 text-blue-600">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2 text-blue-600">30+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
