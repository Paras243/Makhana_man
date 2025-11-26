import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Share2,
  Volume2,
  VolumeX,
  Pause,
  Play
} from "lucide-react";

export default function LifeStyle() {
  const reels = [
    {
      video: "/videos/reel_1.mp4",
      caption: "When the crunch hits different 🔥",
      likes: "14.2K",
      comments: "320"
    },
    {
      video: "/videos/reel_2.mp4",
      caption: "Healthy cravings unlocked 🍃",
      likes: "9.1K",
      comments: "210"
    },
    {
      video: "/videos/reel_3.mp4",
      caption: "Late-night snacking level = PRO 😎",
      likes: "11.8K",
      comments: "445"
    },
    {
      video: "/videos/reel_4.mp4",
      caption: "Snack strong. Hustle stronger 💪",
      likes: "7.8K",
      comments: "190"
    }
  ];

  return (
    <section className="py-28 px-6 bg-[#0F0F12]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Insta <span className="text-[#FF6B35]">Reels</span>
          </h2>
          <p className="text-lg text-[#F5F3F4]/60">
            Your stories. Your crunch. Your vibe.
          </p>.
        </motion.div>

        {/* Reels Row */}
        <div className="flex gap-8 overflow-x-auto pb-10 px-2 scrollbar-hide snap-x snap-mandatory">
          {reels.map((reel, index) => (
            <ReelCard key={index} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Reel Card Component ------------------------ */

function ReelCard({ reel }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const shareVideo = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="relative snap-center min-w-[240px] sm:min-w-[280px] md:min-w-[320px] h-[420px] rounded-3xl overflow-hidden bg-black shadow-lg"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={reel.video}
        muted={muted}
        playsInline
        loop
        preload="metadata"
        className="w-full h-full object-cover cursor-pointer"
        onClick={togglePlay}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      {/* Caption */}
      <div className="absolute bottom-5 left-5 right-5 text-white z-20">
        <p className="text-sm mb-3">{reel.caption}</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <span className="text-sm">{reel.likes}</span>
          </div>

          <div className="flex items-center gap-1">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">{reel.comments}</span>
          </div>

          <button onClick={shareVideo}>
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* SOUND Toggle */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 bg-black/50 p-2 rounded-full z-30 transition-all"
      >
        {muted ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute top-4 left-4 bg-black/50 p-2 rounded-full z-30 transition-all"
      >
        {playing ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </button>
    </motion.div>
  );
}



// import { motion } from 'framer-motion';
// import  ImageWithFallback  from './figma/ImageWithFallback';
// import { Instagram, Heart, MessageCircle } from 'lucide-react';

// export function Lifestyle() {
//   const lifestyleImages = [
//     {
//       url: 'https://images.unsplash.com/photo-1701967341617-14499d8bf8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW4lMjB6JTIwd29ya2luZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjM2MzIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
//       caption: 'Late night hustle sessions',
//       likes: '2.4K',
//       user: '@codewithmakhana'
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3NjM1Mzc5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
//       caption: 'Post-workout perfection',
//       likes: '3.1K',
//       user: '@fitnessmakhana'
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZWF0aW5nJTIwc25hY2tzfGVufDF8fHx8MTc2MzYzMjAwMXww&ixlib=rb-4.1.0&q=80&w=1080',
//       caption: 'Squad snacking goals',
//       likes: '4.2K',
//       user: '@squadvibes'
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1624948465121-96e87ae34a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlcnNvbiUyMGhlYWx0aHklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzYzNjMyMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
//       caption: 'Healthy living made easy',
//       likes: '1.8K',
//       user: '@wellnessjourney'
//     }
//   ];

//   const testimonials = [
//     {
//       text: "Finally, a snack that doesn't make me feel guilty at 3 AM. The Makhana Man gets it.",
//       author: "Priya, 22",
//       role: "UI/UX Designer"
//     },
//     {
//       text: "I used to reach for chips. Now it's makhana all the way. Tastes amazing, feels amazing.",
//       author: "Arjun, 24",
//       role: "Software Engineer"
//     },
//     {
//       text: "This is THE snack for my Netflix binges. Crunchy, tasty, and actually good for me!",
//       author: "Zara, 21",
//       role: "Content Creator"
//     }
//   ];

//   return (
//     <section className="py-32 px-6 bg-gradient-to-b from-[#0F0F12] to-[#1A1A1D] relative overflow-hidden">
//       {/* Background Gradient Orbs */}
//       <motion.div
//         animate={{
//           scale: [1, 1.3, 1],
//           opacity: [0.1, 0.2, 0.1],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: 'easeInOut'
//         }}
//         className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F7B801] rounded-full blur-[120px]"
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <motion.span
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-block px-4 py-2 bg-[#F7B801]/20 rounded-full border border-[#F7B801]/30 mb-6"
//           >
//             Join The Movement
//           </motion.span>
//           <h2 className="text-4xl md:text-6xl font-black mb-6">
//             The <span className="text-[#F7B801]">Makhana</span> Lifestyle
//           </h2>
//           <p className="text-xl text-[#F5F3F4]/70 max-w-2xl mx-auto">
//             Real people. Real moments. Real makhana.
//           </p>
//         </motion.div>

//         {/* Instagram-style Grid */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
//           {lifestyleImages.map((image, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true, margin: '-50px' }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05, y: -10 }}
//               className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
//             >
//               {/* Image */}
//               <ImageWithFallback
//                 src={image.url}
//                 alt={image.caption}
//                 className="w-full h-full object-cover"
//               />

//               {/* Overlay */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//                 className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D] via-[#1A1A1D]/50 to-transparent flex flex-col justify-end p-6"
//               >
//                 <p className="mb-2">{image.caption}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-[#F5F3F4]/70">{image.user}</span>
//                   <div className="flex items-center gap-3">
//                     <div className="flex items-center gap-1">
//                       <Heart className="w-5 h-5 text-red-500 fill-red-500" />
//                       <span className="text-sm">{image.likes}</span>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Instagram Icon */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//                 className="absolute top-4 right-4"
//               >
//                 <Instagram className="w-6 h-6 text-white" />
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Testimonials */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h3 className="text-3xl font-black text-center mb-12">
//             What The <span className="text-[#FF6B35]">Community</span> Says
//           </h3>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className="relative bg-gradient-to-br from-[#2A2A2E] to-[#1A1A1D] p-8 rounded-3xl border border-[#F5F3F4]/10 hover:border-[#FF6B35]/30 transition-all"
//               >
//                 {/* Quote Icon */}
//                 <motion.div
//                   animate={{
//                     rotate: [0, 5, -5, 0],
//                   }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: 'easeInOut'
//                   }}
//                   className="text-6xl text-[#FF6B35] opacity-20 mb-4"
//                 >
//                   "
//                 </motion.div>

//                 {/* Testimonial Text */}
//                 <p className="text-lg mb-6 leading-relaxed text-[#F5F3F4]/80">
//                   {testimonial.text}
//                 </p>

//                 {/* Author */}
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#F7B801] rounded-full flex items-center justify-center">
//                     <span className="text-xl">
//                       {testimonial.author.charAt(0)}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="font-black">{testimonial.author}</p>
//                     <p className="text-sm text-[#F5F3F4]/60">{testimonial.role}</p>
//                   </div>
//                 </div>

//                 {/* Decorative Element */}
//                 <motion.div
//                   animate={{
//                     scale: [1, 1.2, 1],
//                     rotate: [0, 90, 180]
//                   }}
//                   transition={{
//                     duration: 10,
//                     repeat: Infinity,
//                     ease: 'easeInOut'
//                   }}
//                   className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FF6B35] rounded-full blur-[60px] opacity-10"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Social CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="mt-20 text-center"
//         >
//           <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#2A2A2E] to-[#1A1A1D] px-8 py-4 rounded-full border border-[#F5F3F4]/10">
//             <Instagram className="w-6 h-6 text-[#F7B801]" />
//             <div className="text-left">
//               <p className="font-black">Share your Makhana Moments</p>
//               <p className="text-sm text-[#F5F3F4]/60">Tag us @themakhanaman</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
