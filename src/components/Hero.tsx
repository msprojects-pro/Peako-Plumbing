import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, MapPin, Award } from 'lucide-react';
import heroBathroomImg from '../assets/images/hero_luxury_bathroom_1793288327802.jpg';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBathroomImg}
          onError={(e) => {
            // Fallback to static public directory asset if bundled path fails
            e.currentTarget.src = '/images/hero_luxury_bathroom.jpg';
          }}
          alt="Modern luxury bathroom with floating walnut vanity, circular illuminated mirror, marble walls, and walk-in shower"
          className="w-full h-full object-cover object-center filter brightness-[0.82]"
          loading="eager"
        />
        {/* Carefully controlled multi-stop dark scrim overlay ensuring WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/95 via-[#0B0B0B]/80 to-[#0B0B0B]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Bronze Accent Line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 48 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="h-1 bg-[#B8875E] mb-6"
          />

          {/* Region Sub-kicker */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-[#B8875E] uppercase mb-3"
          >
            Staffordshire &amp; Cheshire • United Kingdom
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Expert Plumbing, Heating &amp; Bathrooms.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-xl"
          >
            Professional home improvement services across Staffordshire &amp; Cheshire, with quality workmanship and a personal approach.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-5"
          >
            <button
              onClick={onQuoteClick}
              className="group flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#B8875E] hover:bg-[#C99C76] active:bg-[#9F6E47] transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#B8875E]/20 whitespace-nowrap cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="tel:+447446453828"
              className="flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#171717]/80 hover:bg-[#171717] border border-neutral-700 hover:border-[#B8875E] transition-all duration-200 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#B8875E]" />
              <span>Call 07446 453828</span>
            </a>
          </motion.div>

          {/* Small Supporting Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm font-medium text-neutral-400 flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#B8875E]" />
            <span>Free, no-obligation quotations</span>
          </motion.p>

          {/* Key Trust Strip in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-neutral-300"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#B8875E] shrink-0" />
              <div>
                <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Coverage</p>
                <p className="text-sm font-medium text-white">Staffordshire &amp; Cheshire</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#B8875E] shrink-0" />
              <div>
                <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Reputation</p>
                <p className="text-sm font-medium text-white">100% Recommend Rating</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B8875E] shrink-0" />
              <div>
                <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Quotes</p>
                <p className="text-sm font-medium text-white">No-Obligation Advice</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
