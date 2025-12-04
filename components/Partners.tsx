import React from 'react';
import SectionTitle from './SectionTitle';

const Partners: React.FC = () => {
  const customers = [
    { name: 'WallHost', src: '/logos/wallhost.png' },
    { name: 'Inocyx', src: '/logos/inocyx.png' },
    { name: 'MaxPro Asia', src: '/logos/maxpro.png' },
    { name: 'Pasumai', src: '/logos/pasumai.png' },
    { name: 'Polycab', src: '/logos/polycab.png' },
    { name: 'HPL', src: '/logos/hpl.png' },
    { name: 'Kovaion', src: '/logos/kovaion.png' },
  ];

  // Duplicate list to ensure smooth infinite scroll
  const scrollingCustomers = [...customers, ...customers, ...customers];

  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <SectionTitle title="Our Customers" subtitle="Proud to serve these leading organizations" />
      </div>

      <div className="relative w-full group">
        <div className="flex animate-scroll hover:[animation-play-state:paused] w-[200%]">
          {scrollingCustomers.map((customer, index) => (
            <div 
              key={index} 
              className="flex-1 flex items-center justify-center min-w-[200px] px-8"
            >
              {/* Logo Container */}
              <div className="h-16 md:h-20 w-40 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                <img 
                  src={customer.src} 
                  alt={customer.name}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image is missing
                    e.currentTarget.style.display = 'none';
                    const span = e.currentTarget.parentElement?.querySelector('span');
                    if (span) span.classList.remove('hidden');
                  }}
                />
                {/* Fallback Text */}
                <span className="hidden text-xl md:text-2xl font-black text-gray-300 uppercase tracking-tighter">
                  {customer.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Partners;