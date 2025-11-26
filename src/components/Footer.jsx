import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Instagram, Twitter, Facebook } from "lucide-react";
import logo from "../assets/makhana.png"; // ⭐ Your Logo Here
import Makhana from "./makhana";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);

    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#1A1A1D] to-[#0F0F12]"
    >
      {/* MAIN CTA */}
     
      <div className="py-32 px-6 relative">
        {/* Animated BG */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B35] rounded-full blur-[150px] opacity-20"
        />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#06D6A0]/20 border border-[#06D6A0]/30 px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-[#06D6A0] rounded-full animate-pulse" />
            <span className="text-sm">Limited Time Offer</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8"
          >
            Join The{" "}
            <span className="bg-gradient-to-r from-[#FF6B35] via-[#F7B801] to-[#06D6A0] bg-clip-text text-transparent">
              Crunch Revolution
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#F5F3F4]/70 mb-12 max-w-3xl mx-auto"
          >
            Get 20% off your first order. Plus exclusive access to new flavors,
            recipes, and the community that's changing how Gen-Z snacks.
          </motion.p>

          {/* Email Subscribe Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubscribe}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 bg-[#2A2A2E] p-3 rounded-full border-2 border-[#F5F3F4]/10 focus-within:border-[#FF6B35]/50 transition-all">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Mail className="w-5 h-5 text-[#F5F3F4]/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-transparent outline-none placeholder:text-[#F5F3F4]/40"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-[#FF6B35] to-[#F7B801] px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#FF6B35]/40 transition-all"
              >
                <span className="font-black">
                  {subscribed ? "Subscribed! 🎉" : "Get 20% Off"}
                </span>
                {!subscribed && <ArrowRight className="w-5 h-5" />}
              </motion.button>
            </div>
          </motion.form>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[ 
              { value: "50K+", label: "Happy Customers" },
              { value: "4.9★", label: "Average Rating" },
              { value: "1M+", label: "Makhanas Served" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-black text-[#FF6B35]">
                  {stat.value}
                </div>
                <div className="text-[#F5F3F4]/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
<div className="relative border-t border-[#F5F3F4]/10 py-12 px-6 z-10">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-4 gap-12 mb-12">
 
      {/* Brand + Logo */}
     
      <div className="md:col-span-2 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-3xl bg-white border-4 border-[#FF6B35] shadow-[0_0_20px_rgba(255,120,50,0.6)] flex items-center justify-center p-2">
            <img
              src={logo}
              alt="The Makhana Man Logo"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>

        <p className="text-[#F5F3F4]/60 mb-6 max-w-md">
          Premium makhana for the modern generation.  
          Snack smarter, live better, crunch louder.
        </p>

        {/* Socials */}
        <div className="flex gap-4">
          {[
            { icon: <Instagram className="w-5 h-5" />, href: "#" },
            { icon: <Twitter className="w-5 h-5" />, href: "#" },
            { icon: <Facebook className="w-5 h-5" />, href: "#" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-[#2A2A2E] border border-[#F5F3F4]/10 rounded-full flex items-center justify-center hover:bg-[#FF6B35] hover:border-[#FF6B35]"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* SHOP Links */}
      <div className="relative z-10">
        <h4 className="font-black mb-4">Shop</h4>
        <ul className="space-y-2 text-[#F5F3F4]/60">
          <li><a href="#" className="hover:text-[#FF6B35]">All Products</a></li>
          <li><a href="#" className="hover:text-[#FF6B35]">Best Sellers</a></li>
          <li><a href="#" className="hover:text-[#FF6B35]">Gift Boxes</a></li>
          <li><a href="#" className="hover:text-[#FF6B35]">Subscriptions</a></li>
        </ul>
      </div>

      {/* COMPANY Links */}
      <div className="relative z-10">
        <h4 className="font-black mb-4">Company</h4>
        <ul className="space-y-2 text-[#F5F3F4]/60">
          <li><a href="#" className="hover:text-[#FF6B35]">About Us</a></li>
          <li><a href="#" className="hover:text-[#FF6B35]">Our Story</a></li>
          <li><a href="#" className="hover:text-[#FF6B35]">Contact</a></li>
          <li><a href="#" className="hover:text-[#FF6B35]">Careers</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom */}
    <div className="pt-8 border-t border-[#F5F3F4]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#F5F3F4]/40 text-sm relative z-10">
      <p>© 2025 The Makhana Man. All rights reserved.</p>

      <div className="flex gap-6">
        <a href="#" className="hover:text-[#FF6B35]">Privacy Policy</a>
        <a href="#" className="hover:text-[#FF6B35]">Terms of Service</a>
        <a href="#" className="hover:text-[#FF6B35]">Shipping Policy</a>
      </div>
    </div>
  </div>
</div>


      {/* Floating Scroll-To-Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#F7B801] rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-[#FF6B35]/50"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          ↑
        </motion.div>
      </motion.button>
    </section>
  );
}
