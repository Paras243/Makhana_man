import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollSlideSection({ left, right }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center"],  
  });

  // LEFT (image)
  const leftX = useTransform(scrollYProgress, [0, 1], ["-50px", "0px"]);
  const leftOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // RIGHT (text)
  const rightX = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
  const rightOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 px-6 md:px-12 flex items-center"

    >
      <div className="grid md:grid-cols-2 gap-2 items-center w-full">
        {/* LEFT (image) */}
        <motion.div
          style={{ x: leftX, opacity: leftOpacity }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {left}
        </motion.div>

        {/* RIGHT (text) */}
        <motion.div
          style={{ x: rightX, opacity: rightOpacity }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {right}
        </motion.div>
      </div>
    </section>
  );
}

