import React from "react";

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
            I am a recent Marketing graduate from the Southern Alberta Institute
            of Technology, I bring a mix of hands-on experience, creative
            problem-solving, and innovative thinking to every project I manage,
            as well as a sharp eye for detail, and the ability to excel
            independently and collaboratively.
          </p>  
        </div>

        {/* Skills or Stats (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl mb-2 text-blue-600">1</div>
            <div className="text-gray-600">Year of Industry Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2 text-blue-600">15+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2 text-blue-600">20+</div>
            <div className="text-gray-600">Brands Collaborations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
