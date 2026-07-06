import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { ProfileData } from '../types';

interface ContactProps {
  profile: ProfileData;
}

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact({ profile }: ContactProps) {
  const [formData, setFormData] = useState<FormFields>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState('');

  const validate = (): boolean => {
    const tempErrors: Errors = {};
    let isValid = true;

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      tempErrors.name = 'Please enter a name with at least 2 characters.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      tempErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      tempErrors.message = 'Please provide a message with at least 10 characters.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time clearance of error while typing
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('Please correct the highlighted input fields.');
      return;
    }

    setStatus('✓ Thanks! Your message has been sent successfully.');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setTimeout(() => {
      setStatus('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-neutral-900/60 dark:border-neutral-800/40 scroll-mt-12">
      <div className="w-full max-w-5xl mx-auto space-y-12 text-left">
        {/* Heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-xs font-bold text-gold-500 tracking-widest uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold font-serif text-white dark:text-white light-mode:text-neutral-900 tracking-tight">
            Let’s Build Something Meaningful Together
          </h2>
        </div>

        {/* Form grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8">
          {/* Card Left: Contact info */}
          <div className="p-6 md:p-8 rounded-3xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-left">
              <h3 className="text-lg font-bold font-serif text-white dark:text-white light-mode:text-neutral-900 border-b border-neutral-800/60 pb-3">
                Contact Details
              </h3>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-2xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Email
                  </h4>
                  <p className="text-sm text-neutral-300 dark:text-neutral-300 light-mode:text-neutral-700 font-semibold break-all">
                    {profile.email || 'pvsharanya21@gmail.com'}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-2xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Location
                  </h4>
                  <p className="text-sm text-neutral-300 dark:text-neutral-300 light-mode:text-neutral-700 font-semibold">
                    {profile.location || 'Bengaluru, India'}
                  </p>
                </div>
              </div>

              {/* Phone */}
              {profile.phone && (
                <div className="flex items-center gap-4 animate-fade-in">
                  <div className="p-3 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-2xl">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Phone
                    </h4>
                    <p className="text-sm text-neutral-300 dark:text-neutral-300 light-mode:text-neutral-700 font-semibold">
                      {profile.phone}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Social icons */}
            <div className="space-y-4 pt-4 border-t border-neutral-800/60 text-left">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Follow My Profiles
              </h4>
              <div className="flex gap-2">
                <a
                  href={profile.github || '#'}
                  onClick={(e) => {
                    if (!profile.github) {
                      e.preventDefault();
                      alert('📂 GitHub URL has not been customized in edit profile.');
                    }
                  }}
                  className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800/60 text-slate-400 hover:text-gold-500 hover:bg-gold-500/15 hover:border-gold-500/40 flex items-center justify-center transition-all cursor-pointer shadow-md"
                  aria-label="GitHub"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a
                  href={profile.linkedin || '#'}
                  onClick={(e) => {
                    if (!profile.linkedin) {
                      e.preventDefault();
                      alert('📂 LinkedIn URL has not been customized in edit profile.');
                    }
                  }}
                  className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800/60 text-slate-400 hover:text-gold-500 hover:bg-gold-500/15 hover:border-gold-500/40 flex items-center justify-center transition-all cursor-pointer shadow-md"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
                <a
                  href={profile.twitter || '#'}
                  onClick={(e) => {
                    if (!profile.twitter) {
                      e.preventDefault();
                      alert('📂 Twitter URL has not been customized in edit profile.');
                    }
                  }}
                  className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800/60 text-slate-400 hover:text-gold-500 hover:bg-gold-500/15 hover:border-gold-500/40 flex items-center justify-center transition-all cursor-pointer shadow-md"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Right */}
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-3xl bg-neutral-900/40 dark:bg-neutral-900/20 border border-neutral-800/60 dark:border-neutral-800/50 shadow-xl space-y-4"
            noValidate
          >
            {/* Name Input */}
            <div className="flex flex-col text-left">
              <label htmlFor="name" className="text-xs font-semibold text-slate-400 mb-1.5">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
                className={`w-full px-4 py-3 bg-neutral-950 border rounded-xl text-white dark:text-white light-mode:text-neutral-900 text-sm outline-none transition-all placeholder:text-slate-600 ${
                  errors.name
                    ? 'border-rose-500/60 focus:border-rose-500'
                    : formData.name
                    ? 'border-gold-500/40 focus:border-gold-500'
                    : 'border-neutral-800/60 focus:border-gold-500'
                }`}
              />
              {errors.name && (
                <span className="text-[11px] text-rose-400 mt-1">{errors.name}</span>
              )}
            </div>

            {/* Email Input */}
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="text-xs font-semibold text-slate-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@email.com"
                required
                className={`w-full px-4 py-3 bg-neutral-950 border rounded-xl text-white dark:text-white light-mode:text-neutral-900 text-sm outline-none transition-all placeholder:text-slate-600 ${
                  errors.email
                    ? 'border-rose-500/60 focus:border-rose-500'
                    : formData.email
                    ? 'border-gold-500/40 focus:border-gold-500'
                    : 'border-neutral-800/60 focus:border-gold-500'
                }`}
              />
              {errors.email && (
                <span className="text-[11px] text-rose-400 mt-1">{errors.email}</span>
              )}
            </div>

            {/* Message Input */}
            <div className="flex flex-col text-left">
              <label htmlFor="message" className="text-xs font-semibold text-slate-400 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your thoughts or project ideas..."
                rows={4}
                required
                className={`w-full px-4 py-3 bg-neutral-950 border rounded-xl text-white dark:text-white light-mode:text-neutral-900 text-sm outline-none transition-all placeholder:text-slate-600 resize-none ${
                  errors.message
                    ? 'border-rose-500/60 focus:border-rose-500'
                    : formData.message
                    ? 'border-gold-500/40 focus:border-gold-500'
                    : 'border-neutral-800/60 focus:border-gold-500'
                }`}
              />
              {errors.message && (
                <span className="text-[11px] text-rose-400 mt-1">{errors.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-neutral-950 font-bold text-sm rounded-xl hover:opacity-95 shadow-lg shadow-gold-500/5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-neutral-950" />
              <span>Send Message</span>
            </button>

            {/* Status alerts */}
            {status && (
              <p
                className={`text-center text-xs font-semibold pt-1 ${
                  status.startsWith('✓') ? 'text-gold-500' : 'text-rose-400'
                }`}
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
