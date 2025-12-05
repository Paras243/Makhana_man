import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import icon_1 from '../assets/freepik__i-want-coffee-cup-icon-in-comic-style__65235.png';
import icon_2 from '../assets/freepik__i-want-laptop-icon-in-comic-style__65233.png';
import icon_3 from '../assets/freepik__i-want-thunder-sign-icon-in-comic-style__65236.png';
import icon_4 from '../assets/freepik__i-want-heart-icon-in-comic-style__65237.png';
import { Coffee, Laptop, Zap, Heart } from 'lucide-react';

export default function OriginStory() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const stories = [
    {
      icon: icon_1,
      title: 'The Late Night Struggle',
      description:
        'It was 2 AM. Deadlines looming. Stomach growling. But all the snacks felt... wrong. Too oily. Too guilty. Too yesterday.',
      color: '#FF6B35'
    },
    {
      icon: icon_2,
      title: 'The Discovery',
      description:
        'Then came makhana. Light, crunchy, and guilt-free. It was the snack that understood the hustle without slowing you down.',
      color: '#F7B801'
    },
    {
      icon: icon_3,
      title: 'The Mission Begins',
      description:
        'Why should healthy snacking be boring? The Makhana Man was born—to bring premium, delicious, and real snacks to Gen-Z.',
      color: '#06D6A0'
    },
    {
      icon: icon_4,
      title: 'For The Culture',
      description:
        "We're not just selling snacks. We're building a movement. One crunch at a time. For dreamers, hustlers, and midnight snackers.",
      color: '#004E89'
    }
  ];

  return (
    <section
      id="story"
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-[#1A1A1D] to-[#0F0F12] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
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
            className="inline-block px-4 py-2 bg-[#FF6B35]/20 rounded-full border border-[#FF6B35]/30 mb-6"
          >
            Origin Story
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            How It All <span className="text-[#FF6B35]">Started</span>
          </h2>

          <p className="text-xl text-[#F5F3F4]/70 max-w-2xl mx-auto">
            Every legend has an origin. This is ours.
          </p>
        </motion.div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => {
            const cardRef = useRef(null);

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-[#2A2A2E] to-[#1A1A1D] p-8 rounded-3xl border border-[#F5F3F4]/10 hover:border-[#FF6B35]/30 transition-all duration-500 overflow-hidden">

                  {/* Glow */}
                  <motion.div   
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${story.color}20, transparent 70%)`
                    }}
                  />

                  {/* Icon (UPDATED ONLY THIS) */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${story.color}40, ${story.color}20)`,
                      border: `2px solid ${story.color}60`
                    }}
                  >
                    <div style={{ color: story.color }}>
                      {typeof story.icon === "string" ? (
                        <img
                          src={story.icon}
                          alt="story-icon"
                          className="w-40 h-40 radiusf object-contain"
                        />
                      ) : (
                        story.icon
                      )}
                    </div>
                  </motion.div>

                  {/* Number */}
                  <div className="absolute top-6 right-6 text-6xl font-black text-[#F5F3F4]/5">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black mb-4 relative z-10">{story.title}</h3>
                  <p className="text-[#F5F3F4]/70 leading-relaxed relative z-10">
                    {story.description}
                  </p>

                  {/* Decorative Ball */}
                  <motion.div
                    className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-10"
                    style={{ backgroundColor: story.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="text-8xl text-[#FF6B35] opacity-40 absolute -top-6 -left-6"
            >
              "
            </motion.div>

            <p className="text-2xl md:text-3xl font-black max-w-3xl relative z-10">
              Snacking was never supposed to be a choice between{' '}
              <span className="text-[#FF6B35]">taste</span> and{' '}
              <span className="text-[#06D6A0]">health</span>
            </p>

            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="text-8xl text-[#FF6B35] opacity-40 absolute -below-6 -right-6"
            >
              "
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
