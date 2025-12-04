import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-gray-800 relative inline-block">
        {title}
        <span className="block h-1 w-16 bg-cyan-500 mx-auto mt-3"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-xs md:text-sm mt-4 uppercase tracking-wider font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;