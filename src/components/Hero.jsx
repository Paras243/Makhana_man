import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import FloatingMakhana  from './FloatingMakhana';
import Makhana from './makhana';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1A1A1D] via-[#2D1B3D] to-[#1A1A1D]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <Makhana />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-[#FF6B35] rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#F7B801] rounded-full blur-[120px]"
      />

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#F5F3F4]/10 backdrop-blur-sm border border-[#F5F3F4]/20 px-4 py-2 rounded-full mb-8"
        >
          <Sparkles size={16} className="text-[#F7B801]" />
          <span className="text-sm">Premium Makhana Experience</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4">
            MEET THE
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-r from-[#FF6B35] via-[#F7B801] to-[#06D6A0] bg-clip-text text-transparent">
            MAKHANA MAN
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-[#F5F3F4]/80 mb-12 max-w-2xl mx-auto"
        >
          Your guilt-free snack companion for late nights, big dreams, and everything in between.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#product"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 107, 53, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FF6B35] to-[#F7B801] px-10 py-4 rounded-full text-lg hover:shadow-2xl transition-all duration-300"
          >
            Discover The Crunch
          </motion.a>
          <motion.a
          href="/story"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#F5F3F4]/30 px-10 py-4 rounded-full text-lg hover:bg-[#F5F3F4]/10 transition-all duration-300"
          >
            Learn Our Story
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-[#F5F3F4]/60"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
