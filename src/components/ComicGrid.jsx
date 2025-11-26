import { motion } from "framer-motion";
import pic1 from "../assets/1.png";
import pic2 from "../assets/2.png";
import pic3 from "../assets/3.png";
import pic4 from "../assets/pic2.jpeg";
import pic5 from "../assets/pic3.jpeg";
import pic6 from "../assets/pic4.jpeg";

const images = [pic1, pic2, pic3, pic4, pic5, pic6];

export default function ComicGrid() {
  return (
    <section className="py-20 px-6 bg-[#0F0F12] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-6xl font-black text-white mb-12">
          <span className="text-[#FF6B35]">Comic</span> Universe
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="rounded-3xl overflow-hidden shadow-xl shadow-black/30 border border-white/10"
            >
              <img
                src={src}
                alt={`Comic ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
