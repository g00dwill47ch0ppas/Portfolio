"use client";

import { SkillBadge } from "./SkillBadge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming and Scripting",
    skills: ["Python", "C++", "Java", "C# (WinForms)", "MATLAB"],
    borderClass: "border-purple-500/20 hover:border-purple-400/40",
  },
  {
    title: "Frameworks and Databases",
    skills: [".NET Framework", "SQL (Oracle)", "Microsoft Office Suite"],
    borderClass: "border-emerald-500/20 hover:border-emerald-400/40",
  },
  {
    title: "Engineering and Design",
    skills: ["Engineering Graphics and Design", "Information Technology", "Physical Sciences"],
    borderClass: "border-amber-500/20 hover:border-amber-400/40",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-amber-400 text-sm tracking-[0.25em] uppercase font-semibold">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Skills and Technologies</h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            Technologies and subjects I have studied and worked with across my academic and personal projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={`glass rounded-2xl p-6 ${cat.borderClass} transition-colors`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "60px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400/60" />
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, si) => (
                  <SkillBadge key={skill} skill={skill} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { label: "Languages", value: "English, Setswana" },
            { label: "Current Study", value: "BSc Honours CS and IT" },
            { label: "University", value: "North-West University" },
            { label: "Interests", value: "Software Development" },
          ].map((item) => (
            <div key={item.label} className="glass rounded-xl p-4 text-center">
              <p className="text-xs text-muted uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-sm text-white font-medium">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
