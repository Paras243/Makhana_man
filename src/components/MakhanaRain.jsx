import { useEffect, useRef } from "react";
import makhanaImg from "../assets/WhatsApp_Image_2025-11-25_at_12.46.32_PM-removebg-preview.png";

export default function MakhanaRain() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const drops = [];

    const NUM_DROPS = 15;
    const gravity = 0.15;       // fall acceleration
    const bounceFactor = 0.35;  // how much energy remains after bounce
    const groundOffset = 20;    // how high above ground the makhana settles

    for (let i = 0; i < NUM_DROPS; i++) {
      const el = document.createElement("img");
      el.src = makhanaImg;
      el.style.position = "absolute";
      el.style.width = `${90 + Math.random() * 40}px`;
      el.style.opacity = "0.85";
      el.style.left = `${Math.random() * 95}%`;
      el.style.top = "-120px";
      container.appendChild(el);

      drops.push({
        el,
        x: parseFloat(el.style.left),
        y: -Math.random() * 300,
        velocity: Math.random() * 2 + 1,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 2 + 1,
        drift: Math.random() * 0.4 - 0.2,
        settled: false,
      });
    }

    function animate() {
      drops.forEach((d) => {
        if (!d.settled) {
          d.velocity += gravity;
          d.y += d.velocity;
          d.x += d.drift;
          d.rotation += d.rotationSpeed;

          d.el.style.transform = `translate(${d.x}px, ${d.y}px) rotate(${d.rotation}deg)`;

          const ground = window.innerHeight - groundOffset;

          if (d.y >= ground) {
            d.y = ground;
            d.velocity *= -bounceFactor;

            // If velocity is very small → settle
            if (Math.abs(d.velocity) < 1.5) {
              d.settled = true;
              d.velocity = 0;
            }
          }
        } else {
          // Settled makhana slowly fades out → resets from top
          d.el.style.opacity = "0.5";

          if (Math.random() < 0.005) {
            d.settled = false;
            d.y = -150;
            d.velocity = 0;
            d.el.style.opacity = "0.8";
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    />
  );
}
