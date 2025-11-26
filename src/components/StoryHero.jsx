import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Makhana from "./makhana";

export default function StoryHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">
      
      {/* 🔥 Cinematic Bokeh / Particles */}
      <div className="absolute inset-0 opacity-100 z-10 pointer-events-none">
        <Makhana />
      </div>

      {/* 🔥 Premium Spotlight Background */}
      <div className="absolute inset-0 bg-[#0C0B10]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 10%, rgba(255,140,60,0.3), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 80%, rgba(250,200,60,0.15), transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 90%)",
          }}
        />
      </div>

      {/* 🔥 Gradient Line Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-gradient-to-b from-[#FF6B35]/20 via-transparent to-transparent rotate-12 blur-[90px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130%] h-[130%] bg-gradient-to-b from-[#F7B801]/10 via-transparent to-transparent -rotate-12 blur-[110px]" />

      {/* 🔥 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-8 backdrop-blur-xl"
        >
          <Sparkles size={16} className="text-[#F7B801]" />
          <span className="text-sm tracking-wide text-white/90">
            The Origin of Crunch
          </span>
        </motion.div>

        {/* 🔥 Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight"
        >
          <span className="relative inline-block">
            {/* Glow Behind Text */}
            <span className="absolute inset-0 blur-[35px] bg-[#FF6B35]/40 rounded-full opacity-60"></span>

            {/* Main Text */}
            <span className="relative bg-gradient-to-r from-[#FF6B35] via-[#F7B801] to-[#06D6A0] bg-clip-text text-transparent">
              Every Crunch Has a Story
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          From ancient lotus ponds to modern India — this is where the journey of
          the world’s purest superfood begins.
        </motion.p>
      </motion.div>
    </section>
  );
}
