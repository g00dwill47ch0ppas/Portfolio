"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TYPING_TEXT = "Full-Stack Developer";

export function HeroSection() {
  const [typed, setTyped] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (step < TYPING_TEXT.length) {
        setTyped((prev) => prev + TYPING_TEXT[step]);
        setStep((s) => s + 1);
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [step]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-600/20 blur-[100px]"
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/5 w-[300px] h-[300px] rounded-full bg-amber-500/15 blur-[80px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/60"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: (i % 5) * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 via-emerald-400 to-amber-400 p-[3px] shadow-2xl shadow-purple-500/30"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1.25, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut", delay: 0.2 }}
        >
          <div className="w-full h-full rounded-full bg-[#0f0f1a] overflow-hidden">
            <img
              src="portrait.jpeg"
              alt="Portrait of Gosego Sebaetse"
              width={675}
              height={900}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        <motion.p
          className="text-sm uppercase tracking-[0.4em] text-purple-400 mb-5 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Gosego Sebaetse
        </motion.h1>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl text-muted">
            I'm a{" "}
            <span className="text-white font-semibold">
              {typed}
              <motion.span
                className="inline-block w-1 h-6 bg-purple-400 ml-1 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </span>
          </p>
        </motion.div>

        <motion.p
          className="text-base text-muted max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          BSc Honours student in Computer Science and IT at North-West University,
          passionate about building software that solves real-world problems.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-emerald-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-white/20 text-white/90 font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        
      </div>
    </section>
  );
}
