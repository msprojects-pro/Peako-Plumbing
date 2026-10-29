import { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { Inspiration } from './components/Inspiration.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { About } from './components/About.tsx';
import { CustomerTrust } from './components/CustomerTrust.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Plumbing');

  const scrollToContact = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-neutral-100 flex flex-col font-sans selection:bg-[#B8875E] selection:text-[#0B0B0B]">
      {/* Navigation Bar */}
      <Navbar onQuoteClick={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onQuoteClick={() => scrollToContact()} />

        {/* Services Section */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* Featured Bathroom Inspiration */}
        <Inspiration onQuoteClick={() => scrollToContact('Bathroom Installation')} />

        {/* Why Contact Peako's? */}
        <WhyChooseUs />

        {/* About Section */}
        <About onContactClick={() => scrollToContact()} />

        {/* Customer Feedback / Trust */}
        <CustomerTrust onContactClick={() => scrollToContact()} />

        {/* Contact Section */}
        <ContactSection selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
