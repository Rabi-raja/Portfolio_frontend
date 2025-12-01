// Hero.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const headlineWords = ["Full-Stack", "Web", "Development", "that", "Drives", "Innovation"];

export default function Hero() {
  const [visibleWords, setVisibleWords] = useState([]);

  // Show words one by one
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleWords(headlineWords.slice(0, i + 1));
      i++;
      if (i === headlineWords.length) clearInterval(interval);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  // Neon color palette
  const neonColors = ["#00ffff", "#ff00ff", "#7f00ff", "#ff0080", "#00ffea", "#0ff", "#ff5f00"];

  return (
    <div className="relative w-full h-[35vh] flex items-center justify-center overflow-hidden bg-white">

      {/* Floating glowing particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full opacity-70"
          style={{
            background: neonColors[Math.floor(Math.random() * neonColors.length)],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(5px)"
          }}
          animate={{
            x: [0, Math.random() * 400 - 200, 0],
            y: [0, Math.random() * 300 - 150, 0],
            scale: [0.9, 1.5, 0.9],
          }}
          transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Centered text */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold flex flex-wrap justify-center gap-4">
          {visibleWords.map((word, i) => (
            <motion.span
              key={i}
              animate={{
                color: neonColors,
                x: [0, 2, -2, 0],
                y: [0, -2, 2, 0],
              }}
              transition={{ duration: 4 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
              style={{
                textShadow: "0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)"
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Middle subheading */}
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-900 font-medium"
          animate={{
            y: [0, -4, 4, 0],
            x: [0, 2, -2, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          Crafting modern digital solutions — sleek front-end & robust back-end systems.
        </motion.p>

        {/* Last tagline */}
        <motion.p
          className="mt-4 text-xl md:text-xl font-semibold"
          animate={{
            y: [0, -3, 3, 0],
            x: [0, 2, -2, 0],
            color: neonColors
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ textShadow: "0 0 12px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)" }}
        >
          🚀 Quality, Reliability & Innovation in Every Project
        </motion.p>
      </div>
    </div>
  );
}
