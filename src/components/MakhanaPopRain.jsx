import { motion } from "framer-motion";
import { useMemo } from "react";
import makhanaImg from "../assets/WhatsApp_Image_2025-11-25_at_12.46.32_PM-removebg-preview.png";

const DROP_COUNT = 9;

export default function MakhanaPopRain() {
  // Stable random values (don’t change on every render)
  const drops = useMemo(
    () =>
      Array.from({ length: DROP_COUNT }, (_, i) => ({
        id: i,
        x: Math.random() * 90 + 5,            // 5%–95% width
        delay: i * 0.6 + Math.random() * 0.4, // natural stagger
        size: Math.random() * 22 + 69,        // 42px–64px
        drift: Math.random() * 24 - 12,       // -12px to +12px
        duration: 5 + Math.random() * 1.5,    // 5–6.5s (slow & premium)
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {drops.map((drop) => (
        <motion.img
          key={drop.id}
          src={makhanaImg}
          alt=""
          loading="lazy"
          className="absolute opacity-70"
          style={{
            left: `${drop.x}%`,
            width: drop.size,
            height: drop.size,
            transform: "translateX(-50%)",
          }}
          animate={{
            // Fall → soft bounce → settle → pop → reset
            y: ["-140%", "82vh", "70vh", "82vh", "-140%"],
            x: [0, drop.drift, drop.drift * 0.4, 0, 0],
            scale: [1, 1.02, 0.96, 1.12, 0],
            opacity: [0.9, 1, 1, 0.7, 0],
            rotate: [0, 35, 60, 80, 0],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: drop.delay,
            ease: "easeInOut", // smooth, premium, no weird errors
          }}
        />
      ))}
    </div>
  );
}
