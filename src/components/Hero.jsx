import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import MakhanaRain from './MakhanaRain';
import Makhana from './makhana';
// import MakhanaPopRain from './MakhanaPopRain';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden 
                 bg-gradient-to-b from-[#1A1A1D] via-[#2D1B3D] to-[#1A1A1D] px-4">
      
      {/* Background animation (lighter on mobile) */}
      <div className="absolute h-[100vh] w-full ">
  <Makhana />
  {/* Your hero content */}
</div>


      {/* Gradient Orbs — scaled down for mobile */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-5 w-56 h-56 md:w-96 md:h-96 
                   bg-[#FF6B35] rounded-full blur-[80px] md:blur-[120px]"
      />

      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-5 w-56 h-56 md:w-96 md:h-96
                   bg-[#F7B801] rounded-full blur-[80px] md:blur-[120px]"
      />

      {/* MAIN CONTENT */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-3xl mx-auto mt-10 md:mt-0"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm 
                     border border-white/20 px-4 py-2 rounded-full mb-6"
        >
          <Sparkles size={16} className="text-[#F7B801]" />
          <span className="text-sm md:text-base">Premium Makhana Experience</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-black tracking-tighter"
        >
          <span className="block text-4xl sm:text-5xl md:text-7xl mb-2">MEET THE</span>

          <span className="block text-5xl sm:text-6xl md:text-8xl 
                           bg-gradient-to-r from-[#FF6B35] via-[#F7B801] to-[#06D6A0]
                           bg-clip-text text-transparent">
            MAKHANA MAN
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-white/80 mt-6 mb-10 px-2"
        >
          Your guilt-free snack companion for late nights, big dreams, and everything in between.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
         <motion.a
  href="#product"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative overflow-hidden group bg-gradient-to-r from-[#FF6B35] to-[#F7B801] 
             px-8 py-3 rounded-full text-base sm:text-lg font-medium"
>
  {/* TEXT */}
  <span className="relative z-10">Discover The Crunch</span>

  {/* WHITE SWEEP EFFECT */}
  <span
    className="absolute inset-0 -left-full group-hover:left-full 
               transition-all duration-700 ease-out
               bg-white/30 blur-xl rounded-full"
  />
</motion.a>


          <motion.a
            href="/story"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white/30 px-8 py-3 rounded-full text-base sm:text-lg"
          >
            Learn Our Story
          </motion.a>
        </motion.div>

        


        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>

        

    </section>
  );
}


// import { motion, useScroll, useTransform } from 'framer-motion';
// import { ArrowDown, Sparkles } from 'lucide-react';
// import { useRef } from 'react';
// import FloatingMakhana from './FloatingMakhana';
// import Makhana from './makhana';

// export default function Hero() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start start', 'end start']
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

//   return (
//     <section
//       ref={ref}
//       className="relative min-h-[100vh] flex items-center justify-center overflow-hidden 
//                  bg-gradient-to-b from-[#1A1A1D] via-[#2D1B3D] to-[#1A1A1D] px-4">
      
//       {/* Background animation (lighter on mobile) */}
//       <div className="absolute inset-0">
//         <Makhana />
//       </div>

//       {/* Gradient Orbs — scaled down for mobile */}
//       <motion.div
//         animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute top-10 left-5 w-56 h-56 md:w-96 md:h-96 
//                    bg-[#FF6B35] rounded-full blur-[80px] md:blur-[120px]"
//       />

//       <motion.div
//         animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         className="absolute bottom-10 right-5 w-56 h-56 md:w-96 md:h-96
//                    bg-[#F7B801] rounded-full blur-[80px] md:blur-[120px]"
//       />

//       {/* MAIN CONTENT */}
//       <motion.div
//         style={{ y, opacity }}
//         className="relative z-10 text-center max-w-3xl mx-auto mt-10 md:mt-0"
//       >
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm 
//                      border border-white/20 px-4 py-2 rounded-full mb-6"
//         >
//           <Sparkles size={16} className="text-[#F7B801]" />
//           <span className="text-sm md:text-base">Premium Makhana Experience</span>
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="font-black tracking-tighter"
//         >
//           <span className="block text-4xl sm:text-5xl md:text-7xl mb-2">MEET THE</span>

//           <span className="block text-5xl sm:text-6xl md:text-8xl 
//                            bg-gradient-to-r from-[#FF6B35] via-[#F7B801] to-[#06D6A0]
//                            bg-clip-text text-transparent">
//             MAKHANA MAN
//           </span>
//         </motion.h1>

//         {/* Subheading */}
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-base sm:text-lg md:text-xl text-white/80 mt-6 mb-10 px-2"
//         >
//           Your guilt-free snack companion for late nights, big dreams, and everything in between.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <motion.a
//             href="#product"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-[#FF6B35] to-[#F7B801] px-8 py-3 
//                        rounded-full text-base sm:text-lg font-medium"
//           >
//             Discover The Crunch
//           </motion.a>

//           <motion.a
//             href="/story"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="border-2 border-white/30 px-8 py-3 rounded-full text-base sm:text-lg"
//           >
//             Learn Our Story
//           </motion.a>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//           className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:block"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//             className="flex flex-col items-center text-white/60"
//           >
//             <span className="text-sm">Scroll to explore</span>
//             <ArrowDown size={20} />
//           </motion.div>
//         </motion.div>
//       </motion.div>

//     </section>
//   );
// }
