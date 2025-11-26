import { motion } from 'framer-motion';
import { Heart, Zap, Shield, Brain, Dumbbell, Leaf } from 'lucide-react';
import Makhana from './makhana'

export default function HealthBenefits() {
  const benefits = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: 'Heart Healthy',
      description: 'Low in sodium and cholesterol, makhana supports cardiovascular health naturally.',
      color: '#FF6B35',
      delay: 0
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Instant Energy',
      description: 'Complex carbs provide sustained energy without the crash. Perfect for your hustle.',
      color: '#F7B801',
      delay: 0.1
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Rich in Antioxidants',
      description: 'Fights free radicals and supports your immune system. Stay protected, stay strong.',
      color: '#06D6A0',
      delay: 0.2
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'Boosts Focus',
      description: 'Essential minerals help improve cognitive function. Snack smarter, think sharper.',
      color: '#004E89',
      delay: 0.3
    },
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: 'High Protein',
      description: '9.7g protein per 100g supports muscle growth and recovery. Gains on gains.',
      color: '#FF6B35',
      delay: 0.4
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: 'All Natural',
      description: 'No artificial flavors, no preservatives. Just pure, natural goodness.',
      color: '#06D6A0',
      delay: 0.5
    },
  ];

  return (
    <section id="benefits" className="py-32 px-6 bg-[#0F0F12] relative overflow-hidden">

 <div className="absolute inset-0">
        <Makhana />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-[#06D6A0]/20 rounded-full border border-[#06D6A0]/30 mb-6"
          >
            Health Benefits
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Snack With <span className="text-[#06D6A0]">Purpose</span>
          </h2>
          <p className="text-xl text-[#F5F3F4]/70 max-w-2xl mx-auto">
            Every bite is packed with benefits. Because you deserve better than empty calories.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: benefit.delay }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative h-full bg-gradient-to-br from-[#2A2A2E] to-[#1A1A1D] p-8 rounded-3xl border border-[#F5F3F4]/10 hover:border-[#FF6B35]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top left, ${benefit.color}15, transparent 70%)`
                  }}
                />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-20 h-20 rounded-2xl mb-6 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color}30, ${benefit.color}10)`,
                    border: `2px solid ${benefit.color}40`
                  }}
                >
                  <div style={{ color: benefit.color }}>
                    {benefit.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#F5F3F4]/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative Circle */}
                <motion.div
                  className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full opacity-5"
                  style={{ backgroundColor: benefit.color }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke={benefit.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-[#2A2A2E] to-[#1A1A1D] p-12 rounded-3xl border border-[#F5F3F4]/10 relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] via-[#F7B801] to-[#06D6A0] blur-[60px]"
            />

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4">
                Ready to upgrade your snacking game?
              </h3>
              <p className="text-[#F5F3F4]/70 mb-8 max-w-lg mx-auto">
                Join thousands of Gen-Z hustlers who've made the switch to guilt-free, premium makhana.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#FF6B35] to-[#F7B801] px-10 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-[#FF6B35]/40 transition-all"
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
