import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import inspirationBathroomImg from '../assets/images/inspiration_master_bathroom_1793288331254.jpg';

interface InspirationProps {
  onQuoteClick: () => void;
}

export const Inspiration: React.FC<InspirationProps> = ({ onQuoteClick }) => {
  return (
    <section id="inspiration" className="relative py-28 bg-[#0B0B0B] text-white overflow-hidden">
      {/* Background Architectural Bathroom Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={inspirationBathroomImg}
          onError={(e) => {
            e.currentTarget.src = '/images/inspiration_bathroom.jpg';
          }}
          alt="Contemporary luxury ensuite bathroom inspiration with marble feature wall and freestanding stone tub"
          className="w-full h-full object-cover object-center filter brightness-[0.70]"
          loading="lazy"
        />
        {/* Dark Vignette / Contrast gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Dark Translucent Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#171717]/90 backdrop-blur-md border border-neutral-800 p-8 sm:p-12 shadow-2xl relative"
          >
            {/* Bronze Accent line */}
            <div className="w-12 h-1 bg-[#B8875E] mb-6" />

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8875E] mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Bathroom Inspiration</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Your Bathroom. Your Vision.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
              Whether you&apos;re planning a modern refresh or a complete bathroom transformation, get in touch to discuss your ideas and requirements.
            </p>

            {/* Inspiration considerations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#B8875E] shrink-0" />
                <span>Tailored suite layouts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#B8875E] shrink-0" />
                <span>Contemporary brassware</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#B8875E] shrink-0" />
                <span>Clean tile &amp; stone finishes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#B8875E] shrink-0" />
                <span>Practical storage solutions</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <button
                onClick={onQuoteClick}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#B8875E] hover:bg-[#C99C76] active:bg-[#9F6E47] transition-all duration-200 shadow-md cursor-pointer"
              >
                <span>LET&apos;S TALK ABOUT YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-[11px] text-neutral-400 italic">
                *Inspiration imagery shown to illustrate modern bathroom possibilities. Every project is planned individually around your home and budget.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
