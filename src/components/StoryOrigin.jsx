import { motion } from "framer-motion";
import ScrollSlideSection from "./ScrollSlideSection";

export default function StoryOrigin() {
  return (
    <ScrollSlideSection
      left={
        <img
          src="makhana_exp_1.png"
          className="w-full max-w-lg select-none"
          alt="Makhana Fields"
        />
      }
      right={
  <div className="max-w-2xl space-y-4">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      Origin — Born in the Fields
    </h2>

    <p className="text-white/75 text-lg leading-relaxed">
      Long before The Makhana Man became a modern-day superfood icon, 
      his journey began in the quiet, lotus-filled ponds of rural Bihar. 
      Here, generations of farmers harvested these delicate seeds with 
      patience, devotion, and centuries-old wisdom.
    </p>

    <p className="text-white/75 text-lg leading-relaxed">
      What looked like a simple puffed seed was, in truth, a treasure — 
      a symbol of purity, wellness, and cultural heritage. From temple 
      offerings to ayurvedic rituals, makhana carried a legacy far beyond 
      its size.
    </p>

    <p className="text-white/80 text-lg leading-relaxed">
      Today, that legacy inspires everything we create. 
      Every crunch you taste is rooted in tradition, 
      crafted with honesty, and made for the new generation 
      that refuses to compromise between health and taste.
    </p>
  </div>
}

    />
  );
}
