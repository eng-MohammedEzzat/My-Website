"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cvData } from "@/data/cvData";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const { personalInfo } = cvData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f97316', '#ea580c', '#c2410c']
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 uppercase mb-6">
            Let's <span className="text-orange-500">Connect</span>
          </h2>
          <p className="text-slate-600 font-bold leading-relaxed max-w-xl mx-auto uppercase tracking-widest text-xs">
            Interested in hiring or offering a training opportunity? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">

          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200 flex flex-col justify-center group hover:shadow-xl hover:border-orange-500 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Address</span>
                <button
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="text-xs font-bold text-orange-500 uppercase hover:text-orange-600 transition-colors"
                >
                  {copiedEmail ? "COPIED!" : "COPY"}
                </button>
              </div>
              <a href={`mailto:${personalInfo.email}`} className="text-xl font-black text-slate-900 hover:text-orange-500 transition-colors truncate">
                {personalInfo.email}
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200 flex flex-col justify-center group hover:shadow-xl hover:border-orange-500 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Phone / WhatsApp</span>
                <button
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="text-xs font-bold text-orange-500 uppercase hover:text-orange-600 transition-colors"
                >
                  {copiedPhone ? "COPIED!" : "COPY"}
                </button>
              </div>
              <a href={`tel:${personalInfo.phone}`} className="text-xl font-black text-slate-900 hover:text-orange-500 transition-colors truncate">
                {personalInfo.phone}
              </a>
            </motion.div>

            {/* Location & Socials Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200 flex flex-col gap-8 group hover:shadow-xl hover:border-orange-500 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Location</span>
                <span className="text-xl font-black text-slate-900">
                  Palestine, Gaza 🇵🇸
                </span>
              </div>
              <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-black text-slate-900 hover:text-orange-500 uppercase tracking-widest transition-colors"
                >
                  LINKEDIN
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-black text-slate-900 hover:text-orange-500 uppercase tracking-widest transition-colors"
                >
                  GITHUB
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-10 sm:p-12 rounded-[2.5rem] border border-slate-200 shadow-lg relative"
          >
            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">
              Send Direct Message
            </h3>
            <p className="text-sm font-bold text-slate-500 mb-10 uppercase tracking-widest">
              Fill out the details below to send a message directly to Mohammed.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center"
              >
                <h4 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Success!</h4>
                <p className="text-base font-bold text-slate-600 uppercase tracking-widest">
                  Message Sent Successfully. Mohammed will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest block mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="JOHN DOE"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-black text-slate-900 uppercase tracking-widest block mb-3">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="JOHN@COMPANY.COM"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-black text-slate-900 uppercase tracking-widest block mb-3">
                    Subject / Opportunity
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="TRAINING OPPORTUNITY / FULL-STACK PROJECT"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-black text-slate-900 uppercase tracking-widest block mb-3">
                    Message Body
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="WRITE YOUR MESSAGE DETAILS HERE..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 rounded-xl bg-slate-900 text-white font-black text-sm uppercase tracking-widest shadow-lg hover:bg-orange-500 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}
