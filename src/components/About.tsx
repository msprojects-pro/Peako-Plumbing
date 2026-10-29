import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import aboutPlumberImg from '../assets/images/about_plumber_residential_1793288332122.jpg';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-24 bg-white text-[#171717] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden shadow-lg border border-[#E8E2DC]">
              <img
                src={aboutPlumberImg}
                onError={(e) => {
                  e.currentTarget.src = '/images/about_plumber.jpg';
                }}
                alt="Professional plumbing and heating specialist working carefully on domestic pipework in a home setting"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            {/* Subtle decorative bronze accent square frame */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#B8875E] -z-0 pointer-events-none" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            {/* Bronze Accent Line */}
            <div className="w-12 h-1 bg-[#B8875E] mb-6" />

            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#9F6E47] uppercase mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#B8875E]" />
              <span>Staffordshire &amp; Cheshire</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B0B0B] mb-6">
              Your Local Plumbing &amp; Heating Contact
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6">
              Peako’s Plumbing Heating &amp; Bathrooms covers Staffordshire and Cheshire, providing plumbing, heating, and bathroom services for homeowners. Whether you have a specific job in mind or would like to explore options for your bathroom, get in touch to discuss your requirements.
            </p>

            {/* Factual Highlights without invented claims */}
            <div className="space-y-3 mb-8 border-t border-[#E8E2DC] pt-6">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#F5F0EA] border border-[#B8875E]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#B8875E]" />
                </div>
                <p className="text-sm text-neutral-700">
                  <strong className="text-[#0B0B0B] font-semibold">Direct Communication:</strong> Deal directly with your tradesman for clear, honest project guidance.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#F5F0EA] border border-[#B8875E]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#B8875E]" />
                </div>
                <p className="text-sm text-neutral-700">
                  <strong className="text-[#0B0B0B] font-semibold">Transparent Quotations:</strong> Upfront, transparent, and completely free no-obligation quotes.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-[#F5F0EA] border border-[#B8875E]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#B8875E]" />
                </div>
                <p className="text-sm text-neutral-700">
                  <strong className="text-[#0B0B0B] font-semibold">Residential Focus:</strong> Dedicated service designed to respect and enhance your home.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onContactClick}
                className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#B8875E] hover:bg-[#C99C76] active:bg-[#9F6E47] transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>CONTACT PEAKO&apos;S</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
