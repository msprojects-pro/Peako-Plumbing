import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] text-neutral-400 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="font-display text-2xl font-bold tracking-wider text-white uppercase block">
                PEAKO&apos;S
              </span>
              <span className="text-[11px] tracking-[0.22em] text-[#B8875E] font-semibold uppercase">
                PLUMBING • HEATING • BATHROOMS
              </span>
            </div>

            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              Plumbing, heating and bathroom services across Staffordshire &amp; Cheshire. Dedicated home improvement with free, no-obligation quotations.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2">
              <MapPin className="w-4 h-4 text-[#B8875E] shrink-0" />
              <span>Serving Staffordshire &amp; Cheshire, United Kingdom</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-[#B8875E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B8875E] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#inspiration" className="hover:text-[#B8875E] transition-colors">
                  Our Work &amp; Inspiration
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B8875E] transition-colors">
                  About Peako&apos;s
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B8875E] transition-colors">
                  Contact &amp; Quotes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <p className="text-xs text-neutral-400">
              Speak directly with us to discuss your plumbing, heating, or bathroom requirements:
            </p>
            <div className="pt-1">
              <a
                href="tel:+447446453828"
                className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-[#B8875E] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B8875E]" />
                <span>07446 453828</span>
              </a>
            </div>
            <p className="text-xs text-neutral-400">
              Free, no-obligation quotations
            </p>
          </div>
        </div>

        {/* Bronze Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B8875E]/60 to-transparent my-4" />

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} Peako&apos;s Plumbing Heating &amp; Bathrooms. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-[#B8875E] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B8875E]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
