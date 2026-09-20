"use client";

import { motion } from "framer-motion";

const personalInfo = {
  fullName: "Gosego Oduetse Goodwill Sebaetse",
  location: "Mahikeng, South Africa",
  email: "gosegosebaetse@gmail.com",
  phone: "+27 63 122 3386",
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-purple-400 text-sm tracking-[0.25em] uppercase font-semibold">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Who I Am</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-base text-muted leading-relaxed mb-4">
              I am a motivated Computer Science and IT student at North-West University,
              currently pursuing my BSc Honours. My academic background spans programming,
              database management, and engineering design, and I'm passionate about
              building software that solves real-world problems.
            </p>
            <p className="text-base text-muted leading-relaxed">
              I've worked with a range of technologies including Python, C++, Java,
              C# (WinForms), SQL (Oracle), and MATLAB. I enjoy turning ideas into
              working applications and am always learning new tools and frameworks.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { label: "Citizenship", value: "South African" },
                { label: "Languages", value: "English, Setswana" },
                { label: "Home", value: "Mahikeng" },
                { label: "Role", value: "Student and Developer" },
              ].map((fact) => (
                <div key={fact.label} className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">{fact.label}</p>
                  <p className="text-sm text-white font-medium">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "60px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>
            <div className="space-y-4">
              {[
                { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { label: "Phone", value: personalInfo.phone, href: `tel:+27631223386` },
                { label: "Location", value: personalInfo.location, href: "https://www.google.com/maps/search/?api=1&query=Mahikeng%2C+South+Africa" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-white/90 hover:text-white group transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all flex-shrink-0">
                    {item.label === "Email" && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {item.label === "Phone" && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                    {item.label === "Location" && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                  <span>{item.value}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
