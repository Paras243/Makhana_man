import { motion } from "framer-motion";

export default function StoryOutro() {
  return (
    <section className="py-28 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-6"
      >
        Join the Crunch Movement
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-white/70 text-lg max-w-2xl mx-auto mb-10"
      >
        Be part of a healthier, tastier lifestyle. The Makhana Man isn’t just a snack —
        it’s a revolution.
      </motion.p>

      <motion.a
        href="/product"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.96 }}
        className="bg-gradient-to-r from-[#FF7A36] to-[#F7C02D] px-12 py-4 rounded-full text-lg font-semibold text-black shadow-lg"
      >
        Shop Now
      </motion.a>
    </section>
  );
}
