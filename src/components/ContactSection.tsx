import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, FileCheck2, Clock, CheckCircle2, AlertCircle, Send } from 'lucide-react';

interface ContactSectionProps {
  selectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService = 'Plumbing' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    serviceRequired: selectedService,
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Please enter a contact phone number.';
    } else if (!/^[\d\s+()-]{9,16}$/.test(formData.phoneNumber.trim())) {
      errs.phoneNumber = 'Please enter a valid phone number.';
    }
    if (formData.emailAddress.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress.trim())) {
      errs.emailAddress = 'Please enter a valid email address.';
    }
    if (!formData.projectDetails.trim()) {
      errs.projectDetails = 'Please provide brief details about your enquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate reliable submission flow (easily connected to Web3Forms / backend endpoint)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0B0B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block w-10 h-0.5 bg-[#B8875E] mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Have a plumbing, heating, or bathroom project in mind? Get in touch for a free, no-obligation quotation.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details & Direct Call CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#171717] p-8 border border-neutral-800 space-y-6">
              <h3 className="font-display text-xl font-bold text-white tracking-wide">
                Direct Contact Details
              </h3>

              <div className="space-y-6 pt-2">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0B0B0B] border border-neutral-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#B8875E]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Phone</p>
                    <a
                      href="tel:+447446453828"
                      className="text-lg font-bold text-white hover:text-[#B8875E] transition-colors"
                    >
                      07446 453828
                    </a>
                  </div>
                </div>

                {/* Coverage */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0B0B0B] border border-neutral-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#B8875E]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Coverage</p>
                    <p className="text-sm font-medium text-white">
                      Staffordshire &amp; Cheshire, United Kingdom
                    </p>
                  </div>
                </div>

                {/* Quotation */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0B0B0B] border border-neutral-800 flex items-center justify-center shrink-0">
                    <FileCheck2 className="w-5 h-5 text-[#B8875E]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Quotation</p>
                    <p className="text-sm font-medium text-white">
                      Free, no-obligation quotes
                    </p>
                  </div>
                </div>

                {/* Personal Contact Note */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0B0B0B] border border-neutral-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#B8875E]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Response</p>
                    <p className="text-sm font-medium text-white">
                      Direct personal assistance from your tradesman
                    </p>
                  </div>
                </div>
              </div>

              {/* Call Button */}
              <div className="pt-4 border-t border-neutral-800">
                <a
                  href="tel:+447446453828"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#B8875E] hover:bg-[#C99C76] active:bg-[#9F6E47] transition-all duration-200 shadow-md text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL PEAKO&apos;S</span>
                </a>
              </div>
            </div>

            {/* Practical information card */}
            <div className="p-6 bg-[#171717]/50 border border-neutral-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#B8875E] mb-2">
                Homeowner Project Advice
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Whether you need a minor plumbing adjustment, a new designer radiator, or are mapping out a complete bathroom transformation, we provide friendly advice and free estimates.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#171717] p-8 sm:p-10 border border-neutral-800 shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-[#B8875E]/20 border border-[#B8875E] rounded-full mx-auto flex items-center justify-center text-[#B8875E]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Thank You for Your Enquiry
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                    We have received your project details. We will review your requirements and be in touch promptly to discuss your free, no-obligation quotation.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        emailAddress: '',
                        serviceRequired: 'Plumbing',
                        projectDetails: '',
                      });
                    }}
                    className="mt-6 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#B8875E] border border-[#B8875E] hover:bg-[#B8875E] hover:text-[#0B0B0B] transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-neutral-800 pb-4 mb-6">
                    <h3 className="font-display text-xl font-bold text-white">
                      Request a Free Quote
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Fill out the form below and we will contact you to discuss your project.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Full Name <span className="text-[#B8875E]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. David Smith"
                      className={`w-full bg-[#0B0B0B] border ${
                        errors.fullName ? 'border-red-500' : 'border-neutral-700 focus:border-[#B8875E]'
                      } px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Phone Number <span className="text-[#B8875E]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="e.g. 07446 453828"
                        className={`w-full bg-[#0B0B0B] border ${
                          errors.phoneNumber ? 'border-red-500' : 'border-neutral-700 focus:border-[#B8875E]'
                        } px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors`}
                      />
                      {errors.phoneNumber && (
                        <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="emailAddress" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Email Address <span className="text-neutral-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        placeholder="e.g. david@example.co.uk"
                        className={`w-full bg-[#0B0B0B] border ${
                          errors.emailAddress ? 'border-red-500' : 'border-neutral-700 focus:border-[#B8875E]'
                        } px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors`}
                      />
                      {errors.emailAddress && (
                        <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.emailAddress}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label htmlFor="serviceRequired" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Service Required <span className="text-[#B8875E]">*</span>
                    </label>
                    <select
                      id="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-neutral-700 focus:border-[#B8875E] px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Plumbing">Plumbing</option>
                      <option value="Heating">Heating</option>
                      <option value="Bathroom Installation">Bathroom Installation</option>
                      <option value="Other Enquiry">Other Enquiry</option>
                    </select>
                  </div>

                  {/* Tell Us About Your Project */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Tell Us About Your Project <span className="text-[#B8875E]">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Please share what you are looking to have done, your location (Staffordshire/Cheshire), and any specific requirements..."
                      className={`w-full bg-[#0B0B0B] border ${
                        errors.projectDetails ? 'border-red-500' : 'border-neutral-700 focus:border-[#B8875E]'
                      } px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors resize-y`}
                    />
                    {errors.projectDetails && (
                      <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.projectDetails}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#0B0B0B] bg-[#B8875E] hover:bg-[#C99C76] active:bg-[#9F6E47] transition-all duration-200 shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>REQUEST A FREE QUOTE</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center">
                    No obligation. Your information is treated confidentially and used only to respond to your request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
