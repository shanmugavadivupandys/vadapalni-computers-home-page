import React from 'react';
import SectionTitle from './SectionTitle';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Us"
          subtitle="Fastest repair service with best price!"
        />

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/teamwork/800/600"
                alt="Our Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Vadapalani Computers
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Vadapalani Computers is a well-reputed computer sales and service provider in Chennai. As a team, we provide top-notch solutions and services for all computer, laptop, and CCTV requirements.
            </p>

            <ul className="space-y-4">
              {[
                "Our highly skilled technicians are dedicated to solving all your technical problems.",
                "We offer exceptional services at affordable prices.",
                "At Vadapalani Computers, we treat your problems as our own and endeavor to offer the best solutions accordingly."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-600 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;