import { motion } from "framer-motion";
import makhanaImg from "../assets/WhatsApp_Image_2025-11-25_at_12.46.32_PM-removebg-preview.png"; 

export default function Makhana() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 1,
    size: 40 + Math.random() * 50,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.img
          key={p.id}
          src={makhanaImg}
          alt="makhana"
          className="absolute opacity-70"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            objectFit: "contain",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
            opacity: [0.5, 0.5, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}