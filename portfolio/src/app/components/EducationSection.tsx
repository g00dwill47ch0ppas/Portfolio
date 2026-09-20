"use client";

import { motion } from "framer-motion";
import { EducationCard } from "./EducationCard";

const education = [
  {
    institution: "North-West University",
    course: "Bachelor of Science Honours in Computer Science and Information Technology",
    date: "2026 - Present",
  },
  {
    institution: "North-West University",
    course: "Bachelor of Science in Information Technology",
    date: "2023 - 2025",
  },
  {
    institution: "Sol Plaatje Secondary School",
    course: "Grade 12 (NSC) — English HL, Setswana HL, Mathematics, Life Orientation, Engineering Graphics and Design, IT, Physical Sciences",
    date: "Completed 2022",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/6 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/6 w-72 h-72 bg-emerald-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-purple-400 text-sm tracking-[0.25em] uppercase font-semibold">
            Academics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Education</h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">
            My academic journey from high school through to my current honours studies.
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-12 border-l-2 border-white/10">
          {education.map((item, i) => (
            <EducationCard
              key={item.institution + item.date}
              institution={item.institution}
              course={item.course}
              date={item.date}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
