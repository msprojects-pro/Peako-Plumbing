import React from 'react';
import { motion } from 'motion/react';
import { MapPin, FileCheck2, Layers, PhoneCall } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      number: '01',
      title: 'LOCAL COVERAGE',
      description: 'Serving customers across Staffordshire and Cheshire.',
      icon: MapPin,
    },
    {
      number: '02',
      title: 'FREE QUOTATIONS',
      description: 'Get in touch for a free, no-obligation quote.',
      icon: FileCheck2,
    },
    {
      number: '03',
      title: 'MULTIPLE SERVICES',
      description: 'Plumbing, heating, and bathroom services in one place.',
      icon: Layers,
    },
    {
      number: '04',
      title: 'PERSONAL CONTACT',
      description: 'Speak directly with the business to discuss your requirements.',
      icon: PhoneCall,
    },
  ];

  return (
    <section className="py-24 bg-[#0B0B0B] text-white border-t border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block w-10 h-0.5 bg-[#B8875E] mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            A Professional Approach to Your Home
          </h2>
          <p className="text-base text-neutral-400">
            Clear communication, attentive service, and quality tradesmanship tailored to your domestic needs.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, index) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#171717] p-8 border border-neutral-800 hover:border-[#B8875E]/60 transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Thin bronze top accent divider */}
                <div className="w-10 h-0.5 bg-[#B8875E]/80 group-hover:w-full transition-all duration-500 mb-6" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-[#0B0B0B] border border-neutral-800 group-hover:border-[#B8875E] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-[#B8875E]" />
                    </div>
                    <span className="font-mono text-sm text-[#B8875E]/70 font-semibold">
                      {pt.number}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold tracking-wider text-white mb-3">
                    {pt.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
