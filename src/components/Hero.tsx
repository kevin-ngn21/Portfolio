import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-gray-100">
              <ImageWithFallback
                src='../../images/profile-picture.jpg'
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl mb-4 text-gray-900">
              Hello, I'm <span className="text-blue-600">Kevin Nguyen</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              SAIT Marketing Graduate
            </p>
            <p className="text-lg text-gray-500 max-w-2xl">
              Bringing ideas to life through creativity and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
