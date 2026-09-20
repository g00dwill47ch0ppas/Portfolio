"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Computer Security & Cryptography Project",
    description:
      "A Python desktop application that encrypts and decrypts any file type — text, documents, or images — using classical ciphers: Vigenère, Vernam, Columnar Transposition, and Caesar. Handles key entry, file I/O, and .bin output through a Tkinter GUI, and ships as a portable PyInstaller executable.",
    tags: ["Python", "Tkinter", "Cryptography", "PyInstaller"],
    color: "from-purple-500 to-indigo-600",
    href: "https://github.com/g00dwill47ch0ppas/Computer-Security-Cryptography-Project",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Dara Game Intelligent Agent",
    description:
      "A Temporal-Difference reinforcement learning agent that learns to play Dara, a traditional West African strategy game. Uses after-state modelling and feature abstraction to cope with a 3^30 state space, with action masking, a Tkinter board, and Matplotlib convergence diagnostics.",
    tags: ["Python", "Reinforcement Learning", "NumPy", "Matplotlib"],
    color: "from-emerald-500 to-teal-600",
    href: "https://github.com/g00dwill47ch0ppas/Artificial-Intelligence-Mini-Project---Dara",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Johnos Skate Shop Web Scraper",
    description:
      "A Python scraper that reads the live category list from the Johnos Skate Shop site, collects product names, prices, and links, and exports the results to formatted Excel spreadsheets through an interactive console workflow.",
    tags: ["Python", "BeautifulSoup", "pandas", "OpenPyXL"],
    color: "from-amber-500 to-orange-600",
    href: "https://github.com/g00dwill47ch0ppas/Johnos-Skate-Shop-Webscrapper",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Academic Performance Monitor",
    description:
      "Honours research artefact: a lecturer-facing decision support system that flags at-risk students. Implements three mathematical models — PuLP linear-programming bounds, combinatorial participation planning, and non-linear assessment weighting — behind a Flask dashboard with per-module configuration.",
    tags: ["Flask", "PuLP", "pandas", "scipy"],
    color: "from-rose-500 to-pink-600",
    href: "https://github.com/g00dwill47ch0ppas/Academic-Performance-Monitor",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.article
      className="group relative glass rounded-2xl p-6 hover:bg-white/[0.04] transition-colors"
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "60px" }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div
        className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${project.color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
      />

      <motion.div
        className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-white/80 mb-5 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: -5 }}
      >
        {project.icon}
      </motion.div>

      <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md bg-white/5 text-muted text-xs font-medium group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} on GitHub`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm"
      >
        <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        <span className="text-purple-400 font-medium group-hover:translate-x-1 transition-transform">
          View Project
        </span>
        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-32 left-10 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-emerald-400 text-sm tracking-[0.25em] uppercase font-semibold">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Projects</h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            A selection of academic and personal projects that showcase my skills and interests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-sm text-muted">
            More projects coming soon as I continue building and learning.
          </p>
          <a
            href="https://github.com/g00dwill47ch0ppas"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-semibold text-white/90 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
