"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  const colors = [
    "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "bg-amber-500/20 text-amber-300 border-amber-500/30",
    "bg-rose-500/20 text-rose-300 border-rose-500/30",
    "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    "bg-sky-500/20 text-sky-300 border-sky-500/30",
    "bg-violet-500/20 text-violet-300 border-violet-500/30",
    "bg-teal-500/20 text-teal-300 border-teal-500/30",
  ];

  return (
    <motion.span
      className={`px-3 py-1 rounded-full text-sm font-medium border ${colors[index % colors.length]}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: "backOut" }}
      whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.08)" }}
      whileTap={{ scale: 0.96 }}
    >
      {skill}
    </motion.span>
  );
}
