import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ShoppingCart, Heart, Flame, Star, Package } from "lucide-react";
import ImageWithFallback from "./figma/ImageWithFallback";

export default function ProductShowcase() {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // ⭐ NEW: Thumbnail images
  const images = ["Artboard 1.png", "Artboard 2.png", "makhana human.png"];
  const [activeImage, setActiveImage] = useState(images[0]);

  // 3D interaction values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const flavors = [
    { name: "Classic Salted", icon: "🧂", active: true },
  ];

  return (
    <section
      id="product"
      className="py-32 px-6 bg-gradient-to-b from-[#0F0F12] via-[#1A1A1D] to-[#0F0F12] relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FF6B35] rounded-full blur-[150px] opacity-10"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#F7B801] rounded-full blur-[150px] opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#FF6B35]/20 rounded-full border border-[#FF6B35]/30 mb-6">
            Our Product
          </span>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Premium <span className="text-[#FF6B35]">Makhana</span>
          </h2>

          <p className="text-xl text-[#F5F3F4]/70 max-w-2xl mx-auto">
            Hand-picked, roasted to perfection, and seasoned with care.
          </p>
        </motion.div>

        {/* PRODUCT GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* PRODUCT IMAGE + 3D EFFECT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative aspect-square max-w-lg mx-auto cursor-pointer"
            >
              {/* Glow ring */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] via-[#F7B801] to-[#06D6A0] rounded-full blur-[60px]"
              />

              {/* PRODUCT IMAGE */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-full h-full bg-gradient-to-br from-[#2A2A2E] to-[#1A1A1D] rounded-3xl overflow-hidden border-2 border-[#F5F3F4]/10 shadow-2xl"
              >
                <ImageWithFallback
                  src={activeImage} // ⭐ NEW
                  alt="Premium Makhana"
                  className="w-full h-full object-cover"
                />

                {/* PREMIUM BADGE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute top-6 right-6 bg-[#06D6A0] text-[#1A1A1D] px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
                >
                  <Star className="w-4 h-4" />
                  <span className="font-black text-sm">Premium Quality</span>
                </motion.div>
              </motion.div>

              {/* FLOATING ICONS */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <Flame className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#F7B801] rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <Package className="w-8 h-8 text-[#1A1A1D]" />
              </motion.div>
            </motion.div>

            {/* ⭐ NEW: THUMBNAIL STRIP */}
            <div className="flex justify-center gap-4 mt-6">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === img
                      ? "border-[#FF6B35]"
                      : "border-[#F5F3F4]/20"
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* PRODUCT DETAILS (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* TITLE */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F7B801] text-[#F7B801]" />
                ))}
                <span className="text-[#F5F3F4]/70">(4.9 / 5 from 1,247 reviews)</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-black mb-4">
                The Makhana Man's <span className="text-[#FF6B35]">Signature</span>
              </h3>

              <p className="text-xl text-[#F5F3F4]/70 leading-relaxed">
                Premium roasted makhana, perfectly seasoned. High in protein, low in calories, and impossible to resist.
              </p>
            </div>

            {/* FLAVORS */}
            <div>
              <p className="text-sm uppercase tracking-wider text-[#F5F3F4]/60 mb-3">
                Select Flavor
              </p>

              <div className="flex gap-3">
                {flavors.map((flavor, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-2xl border-2 transition-all ${
                      flavor.active
                        ? "bg-[#FF6B35] border-[#FF6B35]"
                        : "bg-[#2A2A2E] border-[#F5F3F4]/20"
                    }`}
                  >
                    <span className="text-2xl block">{flavor.icon}</span>
                    <span className="text-sm">{flavor.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* QUANTITY & PRICE */}
            <div className="flex items-end gap-6">
              {/* Quantity */}
              <div>
                <p className="text-sm uppercase tracking-wider text-[#F5F3F4]/60 mb-3">
                  Quantity
                </p>

                <div className="flex items-center gap-4 bg-[#2A2A2E] rounded-2xl p-2 border border-[#F5F3F4]/10">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-[#1A1A1D] rounded-xl flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                  >
                    −
                  </button>

                  <span className="text-2xl font-black w-12 text-center">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-[#1A1A1D] rounded-xl flex items-center justify-center hover:bg-[#FF6B35] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price */}
              <div>
                <p className="text-sm uppercase tracking-wider text-[#F5F3F4]/60 mb-1">
                  Price
                </p>

                <p className="text-4xl font-black text-[#06D6A0]">
                  ₹{(299 * quantity).toLocaleString()}
                </p>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-[#FF6B35] to-[#F7B801] px-8 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="font-black text-lg">
                  {addedToCart ? "Added to Cart!" : "Add to Cart"}
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLiked(!liked)}
                className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center ${
                  liked ? "bg-red-500 border-red-500" : "bg-[#2A2A2E] border-[#F5F3F4]/20"
                }`}
              >
                <Heart className={`w-6 h-6 ${liked ? "fill-white" : ""}`} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
