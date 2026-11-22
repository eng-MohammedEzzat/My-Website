"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cvData } from "@/data/cvData";
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon } from "@/components/Icons";

const displayUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function ContactSection() {
  const { personalInfo } = cvData;
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    {
      id: "email",
      label: "Email Address",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      Icon: MailIcon,
      copyable: true,
    },
    {
      id: "phone",
      label: "Phone / WhatsApp",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      Icon: PhoneIcon,
      copyable: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: displayUrl(personalInfo.linkedin),
      href: personalInfo.linkedin,
      Icon: LinkedinIcon,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      value: displayUrl(personalInfo.github),
      href: personalInfo.github,
      Icon: GithubIcon,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-6xl font-serif text-slate-900 uppercase mb-6">
            Let's <span className="text-sky-500">Connect</span>
          </h2>
          <p className="text-slate-600 font-bold leading-relaxed max-w-xl mx-auto uppercase tracking-widest text-xs">
            Interested in hiring or offering a training opportunity? Reach out directly!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contacts.map(({ id, label, value, href, Icon, copyable, external }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-200 flex items-center gap-5 group hover:shadow-xl hover:border-sky-500 transition-all duration-300"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6" />
              </div>

              <div className="min-w-0 flex-1">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-1">
                  {label}
                </span>
                <a
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="text-lg font-black text-slate-900 hover:text-sky-500 transition-colors block truncate"
                >
                  {value}
                </a>
              </div>

              {copyable ? (
                <button
                  onClick={() => handleCopy(value, id)}
                  className="shrink-0 text-xs font-bold text-sky-500 uppercase hover:text-sky-600 transition-colors"
                >
                  {copied === id ? "COPIED!" : "COPY"}
                </button>
              ) : (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-bold text-sky-500 uppercase hover:text-sky-600 transition-colors"
                >
                  VISIT
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
