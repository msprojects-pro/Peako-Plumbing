import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#inspiration' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#222222] shadow-lg py-3'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Logo Treatment */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8875E] rounded py-1 shrink-0"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase group-hover:text-[#B8875E] transition-colors">
              PEAKO&apos;S
            </span>
            <span className="text-[10px] tracking-[0.22em] text-[#B8875E] font-medium uppercase -mt-0.5 whitespace-nowrap">
              PLUMBING • HEATING • BATHROOMS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B8875E] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call & Quote CTAs */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href="tel:+447446453828"
              className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-[#B8875E] transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8875E]" />
              <span>07446 453828</span>
            </a>
            <button
              onClick={onQuoteClick}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#B8875E] hover:bg-[#C99C76] active:bg-[#9F6E47] rounded-none transition-all duration-200 shadow-sm hover:shadow-[#B8875E]/20 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <a
              href="tel:+447446453828"
              aria-label="Call Peako's"
              className="p-2 text-[#0B0B0B] bg-[#B8875E] hover:bg-[#C99C76] transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-neutral-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-[#B8875E]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#B8875E]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0B] border-b border-[#222222] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-200 hover:text-[#B8875E] py-2 border-b border-[#1c1c1c] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 space-y-3">
            <a
              href="tel:+447446453828"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#171717] border border-[#333333] hover:border-[#B8875E] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B8875E]" />
              <span>Call 07446 453828</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#B8875E] hover:bg-[#C99C76] transition-colors cursor-pointer text-center"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
