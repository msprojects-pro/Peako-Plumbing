import React from 'react';
import { motion } from 'motion/react';
import { ThumbsUp, Star, ArrowRight, MessageSquareQuote } from 'lucide-react';

interface CustomerTrustProps {
  onContactClick: () => void;
}

export const CustomerTrust: React.FC<CustomerTrustProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 bg-[#F5F0EA] text-[#171717] border-t border-b border-[#E8E2DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Subtle bronze accent */}
          <div className="inline-block w-10 h-0.5 bg-[#B8875E] mb-4" />

          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B0B0B] mb-6">
            Trusted by Local Customers
          </h2>

          {/* Social Proof Card */}
          <div className="bg-white border border-[#E8E2DC] p-8 sm:p-10 shadow-sm mb-8 relative">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              {/* Thumbs up badge */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#0B0B0B] flex items-center justify-center text-[#B8875E] mb-2 shadow-xs">
                  <ThumbsUp className="w-8 h-8" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                  Facebook Community
                </span>
              </div>

              {/* Verified recommendation statement */}
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F0EA] border border-[#E8E2DC] text-xs font-semibold text-[#9F6E47] uppercase tracking-wider mb-2">
                  <span>Verified Public Feedback</span>
                </div>
                <p className="font-display text-3xl sm:text-4xl font-bold text-[#0B0B0B] tracking-tight">
                  100% recommend on Facebook
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                  {/* Illustrative stars with clear label */}
                  <div className="flex items-center text-[#B8875E]" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-neutral-600">
                    Based on 8 customer reviews
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[#E8E2DC] max-w-xl mx-auto">
              <p className="text-sm text-neutral-600 leading-relaxed italic flex items-center justify-center gap-2">
                <MessageSquareQuote className="w-4 h-4 text-[#B8875E] shrink-0" />
                <span>See the feedback shared by customers on the business&apos;s Facebook page.</span>
              </p>
            </div>
          </div>

          {/* Call to action */}
          <button
            onClick={onContactClick}
            className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#B8875E] hover:bg-[#C99C76] active:bg-[#9F6E47] transition-all duration-200 shadow-sm cursor-pointer"
          >
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
