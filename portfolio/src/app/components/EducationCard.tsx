"use client";

import { motion } from "framer-motion";

interface EducationCardProps {
  institution: string;
  course: string;
  date: string;
  index: number;
}

export function EducationCard({ institution, course, date, index }: EducationCardProps) {
  return (
    <motion.div
      className="glass rounded-xl p-6 relative overflow-hidden"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-emerald-400 shadow-lg shadow-purple-500/50 z-10" />

      <div className="ml-10">
        <div className="flex items-center gap-2 text-sm text-muted mb-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{date}</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{institution}</h3>
        <p className="text-sm text-muted">{course}</p>
      </div>
    </motion.div>
  );
}
