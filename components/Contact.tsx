import React from 'react';
import SectionTitle from './SectionTitle';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact Us"
          subtitle="Get in touch for repairs, quotes, or support."
        />

        <div className="max-w-4xl mx-auto mt-16">
          {/* Info Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              We're Here to Help
            </h3>
            <p className="text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto">
              Vadapalani Computers is available to assist with all your computer and security requirements. 
              Reach out to us directly via phone or visit our store.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { icon: MapPin, title: "Our Location", text: "Vadapalani, Chennai, Tamil Nadu", sub: "Visit our store" },
                { icon: Phone, title: "Phone Support", text: "+91 98848 89977", sub: "Mon-Fri: 8:30am - 6:30pm" },
                { icon: Mail, title: "Email Us", text: "info@vadapalanicomputers.com", sub: "We reply within 24 hours" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 hover:bg-cyan-50 transition-colors duration-300 group">
                  <div className="p-4 bg-white rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                     <item.icon className="w-8 h-8 text-cyan-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-700 font-medium mb-1 text-sm md:text-base">{item.text}</p>
                    <p className="text-gray-400 text-sm">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;