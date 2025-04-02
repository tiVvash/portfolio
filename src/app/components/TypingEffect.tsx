"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, delay);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index, text, speed, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.span>
  );
};

export default TypingEffect;