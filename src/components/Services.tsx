import React from 'react';
import { motion } from 'motion/react';
import { Wrench, Flame, Bath, ArrowUpRight } from 'lucide-react';
import plumbingImg from '../assets/images/service_plumbing_work_1793288328511.jpg';
import heatingImg from '../assets/images/service_heating_radiator_1793288330135.jpg';
import bathroomImg from '../assets/images/service_bathroom_renovation_1793288330431.jpg';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'plumbing',
      title: 'Plumbing',
      description: 'Plumbing services for your home, from general plumbing enquiries to practical repairs and improvements.',
      image: plumbingImg,
      fallbackImage: '/images/service_plumbing.jpg',
      icon: Wrench,
      serviceKey: 'Plumbing',
      points: [
        'Pipework maintenance & repairs',
        'Taps, wastes & domestic fixtures',
        'Leak detection & preventative care',
      ],
    },
    {
      id: 'heating',
      title: 'Heating',
      description: 'Heating services to help keep your home comfortable. Contact us to discuss your requirements.',
      image: heatingImg,
      fallbackImage: '/images/service_heating.jpg',
      icon: Flame,
      serviceKey: 'Heating',
      points: [
        'Radiator installations & replacements',
        'Thermostatic radiator valves (TRVs)',
        'Heating system improvements & efficiency',
      ],
    },
    {
      id: 'bathrooms',
      title: 'Bathrooms',
      description: 'Transform your bathroom with a clean, contemporary finish tailored to your space and preferences.',
      image: bathroomImg,
      fallbackImage: '/images/service_bathroom.jpg',
      icon: Bath,
      serviceKey: 'Bathroom Installation',
      points: [
        'Complete bathroom renovations',
        'Walk-in showers & wet room setups',
        'Modern vanities, suites & brassware',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white text-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block w-10 h-0.5 bg-[#B8875E] mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B0B0B] mb-4">
            Services Tailored to Your Home
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            From everyday plumbing needs to complete bathroom transformations, get in touch to discuss your project.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col bg-[#F5F0EA] border border-[#E8E2DC] hover:border-[#B8875E]/60 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md"
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={service.image}
                    onError={(e) => {
                      if (e.currentTarget.src !== service.fallbackImage) {
                        e.currentTarget.src = service.fallbackImage;
                      }
                    }}
                    alt={`${service.title} service photograph`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 via-transparent to-transparent opacity-80" />

                  {/* Bronze Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-[#0B0B0B] border border-[#B8875E] flex items-center justify-center shadow-md">
                    <IconComponent className="w-5 h-5 text-[#B8875E]" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#0B0B0B] mb-3 group-hover:text-[#9F6E47] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-6 border-t border-[#E8E2DC] pt-4">
                      {service.points.map((pt, i) => (
                        <li key={i} className="text-xs text-neutral-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B8875E] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA link */}
                  <button
                    onClick={() => onSelectService(service.serviceKey)}
                    className="group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B0B0B] hover:text-[#B8875E] transition-colors pt-2 cursor-pointer text-left"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B8875E] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
