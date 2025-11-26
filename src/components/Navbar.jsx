import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/The Makhana Man.jpg';

export default function Navbar({page = "home"}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks =
  page === "story"
    ? [
        { name: "Home", href: "/" },
        { name: "Product", href: "#product" },
        { name: "Benefits", href: "#benefits" },
        { name: "Contact", href: "#contact" },
      ]
    : [
        { name: "Story", href: "/story" },
        { name: "Product", href: "#product" },
        { name: "Benefits", href: "#benefits" },
        { name: "Contact", href: "#contact" },
      ];


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A1A1D]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl  mx-auto px-6 py-4">
  <div className="flex items-center justify-between ">
   {/* Logo Only - Premium Glow Version */}
{/* Logo Only - Premium Glow Version (BIGGER & CLEANER) */}
<motion.a
  href="/"
  className="cursor-pointer select-none "
  whileHover={{ scale: 1.10 }}
  transition={{ type: "spring", stiffness: 240, damping: 18 }}
>
  <div
    className="
      w-24 h-14 md:w-40 md:h-20
                
      rounded-3xl 
      bg-white
      shadow-[0_0_45px_rgba(255,130,50,0.55)]
      flex items-center justify-center
      p-3  
       border-orange-400 border-4                 
    "
  >
    <img
      src={logo}
      alt="The Makhana Man Logo"
      className="w-full h-full object-contain rounded-2xl 
                 shadow-[0_0_20px_rgba(255,255,255,0.35)]"
    />
  </div>
</motion.a>





          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <span className="hover:text-[#FF6B35] transition-colors duration-300">
                  {link.name}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300"
                />
              </motion.a>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-[#FF6B35] to-[#F7B801] px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-[#FF6B35]/50 transition-shadow duration-300"
            >
              <ShoppingCart size={18} />
              <span>Cart</span>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-[#06D6A0] text-[#1A1A1D] w-6 h-6 rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pt-4 border-t border-[#F5F3F4]/10"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-[#FF6B35] transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button className="bg-gradient-to-r from-[#FF6B35] to-[#F7B801] px-6 py-2.5 rounded-full flex items-center gap-2 justify-center">
                  <ShoppingCart size={18} />
                  <span>Cart</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
