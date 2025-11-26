import { motion, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Check } from 'lucide-react';
import Makhana from './makhana'

export default function WhyMakhana() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const [hoveredSide, setHoveredSide] = useState(null);

  const badSnacks = [
    { name: 'High in Trans Fats', impact: 'Clogs arteries' },
    { name: 'Loaded with Sodium', impact: 'Blood pressure spike' },
    { name: 'Artificial Flavors', impact: 'Chemical overload' },
    { name: 'Empty Calories', impact: 'No nutrition' },
    { name: 'Sugar Crash', impact: 'Energy rollercoaster' },
  ];

  const goodMakhana = [
    { name: 'High in Protein', impact: '9.7g per 100g' },
    { name: 'Low Calorie', impact: 'Only 347 cal/100g' },
    { name: 'Rich in Antioxidants', impact: 'Anti-aging benefits' },
    { name: 'Gluten-Free', impact: 'Easy digestion' },
    { name: 'Natural Energy', impact: 'Sustained focus' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-[#0F0F12] relative overflow-hidden">
       <div className="absolute inset-0">
              <Makhana />
            </div>
      {/* Background Animation */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6B35] rounded-full blur-[200px] opacity-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#06D6A0]/20 rounded-full border border-[#06D6A0]/30 mb-6">
            The Comparison
          </span>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Why <span className="text-[#06D6A0]">Makhana</span>?
          </h2>

          <p className="text-xl text-[#F5F3F4]/70 max-w-2xl mx-auto">
            Let's be real. Your snack choices matter.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* BAD SNACKS CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onHoverStart={() => setHoveredSide('bad')}
            onHoverEnd={() => setHoveredSide(null)}
            className="relative group"
          >
            <motion.div
              animate={{ scale: hoveredSide === 'bad' ? 1.02 : 1 }}
              className="bg-gradient-to-br from-[#2A2A2E] to-[#1A1A1D] p-8 rounded-3xl border-2 border-red-500/30 relative overflow-hidden"
            >

              <motion.div
                className="absolute inset-0 bg-red-500/5"
                animate={{ opacity: hoveredSide === 'bad' ? 1 : 0 }}
              />

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center border-2 border-red-500/40">
                  <X className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-red-400">Traditional Snacks</h3>
                  <p className="text-[#F5F3F4]/60">The old way</p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                {badSnacks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-[#1A1A1D]/50 rounded-xl border border-red-500/10"
                  >
                    <X className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-bold mb-1">{item.name}</p>
                      <p className="text-sm text-[#F5F3F4]/60">{item.impact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-red-500 rounded-full blur-[100px] opacity-10" />
            </motion.div>
          </motion.div>

          {/* GOOD MAKHANA CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onHoverStart={() => setHoveredSide('good')}
            onHoverEnd={() => setHoveredSide(null)}
            className="relative group"
          >
            <motion.div
              animate={{ scale: hoveredSide === 'good' ? 1.02 : 1 }}
              className="bg-gradient-to-br from-[#2A2A2E] to-[#1A1A1D] p-8 rounded-3xl border-2 border-[#06D6A0]/30 relative overflow-hidden"
            >

              <motion.div
                className="absolute inset-0 bg-[#06D6A0]/5"
                animate={{ opacity: hoveredSide === 'good' ? 1 : 0 }}
              />

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-16 h-16 bg-[#06D6A0]/20 rounded-2xl flex items-center justify-center border-2 border-[#06D6A0]/40">
                  <Check className="w-8 h-8 text-[#06D6A0]" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-[#06D6A0]">Makhana</h3>
                  <p className="text-[#F5F3F4]/60">The smart choice</p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                {goodMakhana.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-3 p-4 bg-[#1A1A1D]/50 rounded-xl border border-[#06D6A0]/10 hover:border-[#06D6A0]/30"
                  >
                    <Check className="w-5 h-5 text-[#06D6A0] mt-0.5" />
                    <div>
                      <p className="font-bold mb-1">{item.name}</p>
                      <p className="text-sm text-[#F5F3F4]/60">{item.impact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#06D6A0] rounded-full blur-[100px] opacity-10" />
            </motion.div>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '9.7g', label: 'Protein' },
            { value: '347', label: 'Calories/100g' },
            { value: '0g', label: 'Trans Fat' },
            { value: '100%', label: 'Natural' },
          ].map((stat, index) => (
            <motion.div
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#2A2A2E] to-[#1A1A1D] p-6 rounded-2xl border border-[#F5F3F4]/10 text-center"
            >
              <div className="text-4xl font-black text-[#FF6B35] mb-2">
                {stat.value}
              </div>
              <div className="text-[#F5F3F4]/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
