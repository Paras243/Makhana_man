
import { motion } from 'framer-motion';

export default function FloatingMakhana() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 1,
    size: 25 + Math.random() * 40
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.3, 0.1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay
          }}
        >
          <svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="18" fill="#F7B801" opacity="0.6" />
            <circle cx="20" cy="20" r="14" fill="#FF6B35" opacity="0.4" />
            <circle cx="15" cy="15" r="4" fill="#F5F3F4" opacity="0.8" />
            <circle cx="25" cy="18" r="3" fill="#F5F3F4" opacity="0.6" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
