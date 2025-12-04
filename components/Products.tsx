import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Product } from '../types';
import { ShoppingBag, Eye } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const products: Product[] = [
    // Computers
    { id: 1, name: 'Dell Inspiron Desktop', category: 'Computers', image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Enterprise Server Rack', category: 'Computers', image: 'https://images.unsplash.com/photo-1558494949-ef526bca4899?auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Gaming Custom PC', category: 'Computers', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Lenovo All-in-One', category: 'Computers', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80' },
    
    // Laptops
    { id: 5, name: 'Dell XPS 15', category: 'Laptops', image: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&w=500&q=80' },
    { id: 6, name: 'MacBook Air M2', category: 'Laptops', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80' },
    { id: 7, name: 'HP Spectre x360', category: 'Laptops', image: 'https://images.unsplash.com/photo-1531297461136-8200b7109463?auto=format&fit=crop&w=500&q=80' },
    { id: 8, name: 'Lenovo ThinkPad', category: 'Laptops', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=500&q=80' },
    
    // Security
    { id: 9, name: 'Kaspersky Total Security', category: 'Security', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=500&q=80' },
    { id: 10, name: 'Hikvision Dome Camera', category: 'Security', image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3d63?auto=format&fit=crop&w=500&q=80' },
    { id: 11, name: 'Biometric Attendance', category: 'Security', image: 'https://images.unsplash.com/photo-1587058864380-6d4351659a84?auto=format&fit=crop&w=500&q=80' },
    { id: 12, name: 'Smart Video Doorbell', category: 'Security', image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?auto=format&fit=crop&w=500&q=80' },

    // Accessories
    { id: 13, name: 'HP LaserJet Printer', category: 'Accessories', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=500&q=80' },
    { id: 14, name: 'Samsung Curved Monitor', category: 'Accessories', image: 'https://images.unsplash.com/photo-1551739451-82e5bf118443?auto=format&fit=crop&w=500&q=80' },
    { id: 15, name: 'Logitech Mechanical Key', category: 'Accessories', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=500&q=80' },
    { id: 16, name: 'High-Speed Wi-Fi Router', category: 'Accessories', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80' },
  ];

  const categories = ['All', 'Computers', 'Laptops', 'Security', 'Accessories'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Products"
          subtitle="Top quality tech packaged with exceptional service."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-10 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl p-4 border border-gray-100 hover:border-cyan-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center animate-fade-in-up"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4 bg-gray-100">
                 <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                 />
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button className="p-3 bg-white rounded-full text-gray-800 hover:text-cyan-500 hover:scale-110 transition-all shadow-lg" title="View Details">
                      <Eye size={20} />
                    </button>
                    <button className="p-3 bg-cyan-500 rounded-full text-white hover:bg-cyan-400 hover:scale-110 transition-all shadow-lg" title="Contact Sales">
                      <ShoppingBag size={20} />
                    </button>
                 </div>
                 {/* Tag */}
                 <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-800 rounded-md shadow-sm">
                   {product.category}
                 </span>
              </div>
              
              <div className="w-full text-left">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-cyan-600 transition-colors truncate">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-cyan-600 font-semibold cursor-pointer group-hover:underline">Contact for Price</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;