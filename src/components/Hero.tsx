import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bg-[url('/bg-pattern-dots.svg')] left-1/2 top-1/2 w-[200%] h-[200%] transform -translate-x-1/2 -translate-y-1/2 bg-repeat opacity-5"
          style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 75%)' }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Welcome to <span className="text-blue-300">Stockholm</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your guide to navigating life in Sweden's vibrant capital. From housing to healthcare, we've got you covered.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-blue-900 bg-white hover:bg-gray-50 transition-colors shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/guides/apartment-stockholm"
              className="inline-flex items-center px-8 py-4 border border-blue-300 text-lg font-medium rounded-lg text-white hover:bg-blue-300 transition-colors shadow-lg"
            >
              Browse Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
