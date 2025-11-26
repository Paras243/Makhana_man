import React from "react";
import StoryHero from "../components/StoryHero";
import StoryOrigin from "../components/StoryOrigin";
import StoryJourney from "../components/StoryJourney";
import StoryPersonality from "../components/StoryPersonality";
import StoryMission from "../components/StoryMission";
import StoryOutro from "../components/StoryOutro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function StoryPage() {
  return (
    <main className="bg-[#0C0B10] text-white overflow-hidden">
      <Navbar page="story" />
      <StoryHero />
      <StoryOrigin />
      <StoryJourney />
      <StoryPersonality />
      <StoryMission />
      {/* <StoryOutro /> */}
      <Footer />
    </main>
  );
}


// import React from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import FloatingMakhana from "../components/FloatingMakhana";
// import { Flame, Sparkles, Target, HeartHandshake } from "lucide-react";
// import Makhana from "../components/makhana";
// /**
//  * Replace `HERO_IMAGE` with a local path if you want to store the image in your repo,
//  * e.g. "/src/assets/hero.jpg". For now it uses the remote URL you provided.
//  */
// const HERO_IMAGE =
//   "https://media.licdn.com/dms/image/v2/D5616AQESFff3-qoQOw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1732121104507?e=1765411200&v=beta&t=nyVaQFbXwqWF2-BscI8_zf1_z-OOug83TGZd3z4rNEo";

// export default function StoryPage() {
//   return (
//     <div className="min-h-screen bg-[#0F0F12] text-white antialiased">
//       {/* Navbar (fixed) */}
//       <Navbar page="story" />

//       {/* HERO */}
//       {/* HERO */}
// <header className="relative w-full overflow-hidden">
//   <div className="relative w-full">


// {/* <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
//      <Makhana />
// </div> */}
 
//     {/* Responsive Hero Image */}
//     <img
//       src={HERO_IMAGE}
//       alt="Makhana hero"
//       loading="lazy"
//       className="w-full block"

//       style={{
//         width: "100%",
//         height: "clamp(60vh, 75vh, 90vh)", // adaptive height
//         objectFit: window.innerWidth < 768 ? "contain" : "cover", 
//         objectPosition: window.innerWidth < 768 ? "center top" : "center 30%", 
//         paddingTop: window.innerWidth < 768 ? "4rem" : "0", // space for navbar
//         backgroundColor: "#0F0F12", // fallback
//       }}
//     />

//     {/* Softer overlay: better mobile readability */}
//     <div
//       aria-hidden
//       className="absolute inset-0 pointer-events-none"
//       style={{
//         background:
//           "linear-gradient(180deg, rgba(10,10,12,0.15) 0%, rgba(10,10,12,0.45) 35%, rgba(10,10,12,0.85) 100%)",
//       }}
//     />

//     {/* Floating makhanas behind content */}
//     {/* <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
//       <FloatingMakhana />
//     </div> */}

//     {/* Hero content */}
    
//     <div className="relative w-full py-12 px-6 flex justify-center">
      
//       <div className="max-w-4xl text-center">

//         <motion.h1
//           initial={{ opacity: 0, y: 20, scale: 0.98 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
//           style={{ textWrap: "balance" }}
//         >
//           From a Midnight Craving to a{" "}
//           <span className="text-[#FF6B35]">Crunch Revolution</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.35, duration: 0.6 }}
//           className="mt-4 text-sm sm:text-base md:text-lg text-[#F5F3F4]/80 max-w-2xl mx-auto"
//         >
//           The Makhana Man started with one simple idea — snacks that honor both taste and health.
//           Join the movement of dreamers, hustlers, and midnight snackers.
//         </motion.p>
// <motion.div
//   initial={{ opacity: 0, y: 8 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.6 }}
//   className="mt-6 flex items-center justify-center gap-4"
// >

// <div className="absolute inset-0">
//         <Makhana />
//       </div>

//   {/* READ STORY BUTTON WITH SLIDING BG */}
//   <a
//     href="/story#story-sections"
//     className="
//       relative overflow-hidden group 
//       inline-block px-6 py-3 rounded-full 
//       bg-[#FF6B35] text-black font-black shadow-lg
//     "
//   >
//     <span className="relative z-10">Read Our Story</span>

//     <span
//       className="
//         absolute inset-0 
//         bg-gradient-to-r from-[#FF6B35] to-sky-400
//         -translate-x-full 
//         group-hover:translate-x-0 
//         transition-transform duration-700 ease-out
//       "
//     ></span>
//   </a>

//   {/* SHOP NOW BUTTON — NEW HOVER EFFECT */}
//   <a
//     href="#product"
//     className="
//       relative inline-block px-6 py-3 rounded-full 
//       border border-[#F5F3F4]/20 text-[#F5F3F4]
//       backdrop-blur-sm transition-all duration-300
//       group overflow-hidden
//     "
//   >
//     {/* Button Text */}
//     <span className="relative z-10 group-hover:text-[#FF6B35] transition-colors duration-300">
//       Shop Now
//     </span>

//     {/* Glow EXPANSION on hover */}
//     <span
//       className="
//         absolute inset-0 rounded-full opacity-0 
//         group-hover:opacity-100 
//         transition duration-500
//         bg-[#FF6B35]/20 blur-xl
//       "
//     ></span>

//     {/* Sliding bottom border */}
//     <span
//       className="
//         absolute bottom-0 left-0 h-[2px] w-0 
//         bg-[#FF6B35] 
//         group-hover:w-full 
//         transition-all duration-500
//       "
//     ></span>
//   </a>
// </motion.div>


//       </div>
//     </div>

//   </div>
// </header>


//       {/* Page Container (content) */}
//       <main id="story-sections" className="max-w-6xl mx-auto px-6 pt-12 pb-28 relative z-10">

       

//         <section className="space-y-20">
//           {/* Origin */}
//           <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
//             <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#FF6B35]/20 border border-[#FF6B35]/40 flex items-center justify-center p-4">
//               <Flame className="w-10 h-10 text-[#FF6B35]" />
//             </div>
//             <div>
//               <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Where it all began</h2>
//               <p className="text-[#F5F3F4]/70 leading-relaxed">
//                 It began during a late-night grind. The snacks available were all oily, heavy or tasted like guilt.
//                 That night the question came: <strong className="text-[#FF6B35]">Why choose between taste and health?</strong>
//                 That question became a mission.
//               </p>
//             </div>
//           </div>

//           {/* Discovery */}
//           <div className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-12">
//             <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#F7B801]/20 border border-[#F7B801]/40 flex items-center justify-center p-4">
//               <Sparkles className="w-10 h-10 text-[#F7B801]" />
//             </div>
//             <div>
//               <h2 className="text-2xl md:text-3xl font-extrabold mb-2">The discovery</h2>
//               <p className="text-[#F5F3F4]/70 leading-relaxed">
//                 Makhana: simple, light, and delicious. We rediscovered it and treated it like the premium snack it is —
//                 roasted right, seasoned with care, and crafted for modern taste.
//               </p>
//             </div>
//           </div>

//           {/* Mission */}
//           <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
//             <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#06D6A0]/20 border border-[#06D6A0]/40 flex items-center justify-center p-4">
//               <Target className="w-10 h-10 text-[#06D6A0]" />
//             </div>
//             <div>
//               <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Mission</h2>
//               <p className="text-[#F5F3F4]/70 leading-relaxed">
//                 Build a snack brand that fits the hustle — nutritious, flavorful, and convenient.
//                 We craft with purpose and deliver with pride.
//               </p>
//             </div>
//           </div>

//           {/* Community */}
//           <div className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-12">
//             <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[#004E89]/20 border border-[#004E89]/40 flex items-center justify-center p-4">
//               <HeartHandshake className="w-10 h-10 text-[#004E89]" />
//             </div>
//             <div>
//               <h2 className="text-2xl md:text-3xl font-extrabold mb-2">For the people</h2>
//               <p className="text-[#F5F3F4]/70 leading-relaxed">
//                 We’re a community of students, creators, hackers, and night-shift grinders. Makhana is the snack that supports grind and recovery.
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>

     


//     </div>
//   );
// }
