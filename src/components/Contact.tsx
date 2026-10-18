import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contact = portfolioData.contact;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/90 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 uppercase tracking-widest mb-2 font-semibold">
            <Mail className="h-3.5 w-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-cyan-600 rounded-full mt-3" />
          <p className="text-sm text-slate-600 mt-4">
            Available for student internships, research collaborations, project discussions, and AI engineering opportunities.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <div className="bg-white border border-slate-200 hover:border-slate-300 p-5 rounded-2xl flex items-center justify-between gap-4 transition-all shadow-sm">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-mono font-medium">Phone</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-sm font-bold text-slate-900 hover:text-cyan-700 transition-colors block truncate mt-0.5"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(contact.phone, 'phone')}
                className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedField === 'phone' ? (
                  <Check className="h-4 w-4 text-emerald-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-slate-200 hover:border-slate-300 p-5 rounded-2xl flex items-center justify-between gap-4 transition-all shadow-sm">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-mono font-medium">Email Address</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-cyan-700 transition-colors block truncate mt-0.5"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(contact.email, 'email')}
                className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedField === 'email' ? (
                  <Check className="h-4 w-4 text-emerald-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white border border-slate-200 hover:border-slate-300 p-5 rounded-2xl flex items-center justify-between gap-4 transition-all shadow-sm">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-mono font-medium">LinkedIn Profile</p>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-900 hover:text-cyan-700 transition-colors block truncate mt-0.5"
                  >
                    {contact.linkedinDisplay}
                  </a>
                </div>
              </div>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shrink-0"
                title="Open LinkedIn"
                aria-label="Open LinkedIn"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white border border-slate-200 p-5 rounded-2xl flex items-start gap-3.5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-100">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono font-medium">Academic Residence</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">
                  {contact.location}
                </p>
                <span className="inline-block mt-2 text-[11px] font-mono text-cyan-700 font-semibold">
                  {contact.availability}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative">
            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-cyan-600" />
              Send a Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the details below and I will respond to your inquiry promptly.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in duration-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <div>
                  <p className="font-semibold text-emerald-900">Thank you for reaching out!</p>
                  <p className="text-emerald-700 text-xs mt-0.5">Your message has been recorded. Hariharan R. will review and respond soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name <span className="text-cyan-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address <span className="text-cyan-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Subject <span className="text-cyan-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Inquiry / AI Project Discussion"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Message <span className="text-cyan-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details regarding your opportunity or project query..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 rounded-xl shadow-md shadow-cyan-600/20 transition-all duration-150 cursor-pointer active:scale-98"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
