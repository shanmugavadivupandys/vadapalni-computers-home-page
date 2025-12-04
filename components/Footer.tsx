import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Vadapalani Computers. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              The best computer store in India.
            </p>
         </div>
      </div>
    </footer>
  );
};

export default Footer;