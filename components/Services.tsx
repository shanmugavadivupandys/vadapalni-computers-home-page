import React from 'react';
import SectionTitle from './SectionTitle';
import { Database, Wrench, Cctv, Network } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Data Recovery',
      description: 'Rapid data recovery: restoring lost files from damaged storage media securely.',
      icon: <Database className="w-full h-full" />,
    },
    {
      id: 2,
      title: 'Computer Repair',
      description: 'Expert diagnostics and repair for hardware, software, and motherboard issues.',
      icon: <Wrench className="w-full h-full" />,
    },
    {
      id: 3,
      title: 'CCTV Installation',
      description: 'Reliable surveillance setups for homes and businesses with remote viewing.',
      icon: <Cctv className="w-full h-full" />,
    },
    {
      id: 4,
      title: 'Network Solutions',
      description: 'Enterprise-grade networking, Wi-Fi configuration, and structured cabling.',
      icon: <Network className="w-full h-full" />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative" id="services">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-200"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Fastest repair service with best price!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:scale-150"></div>
              
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-cyan-200 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative p-4 bg-cyan-50 rounded-2xl group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, {
                    className: "w-8 h-8 text-cyan-600 group-hover:text-white transition-colors duration-300"
                  })}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;