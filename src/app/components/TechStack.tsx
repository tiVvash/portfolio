

import { Box, Typography } from "@mui/material";
import { motion, Transition } from "framer-motion";


const floatingAnimation = {
  y: [-5, 5, -5],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  } as Transition, 
};

const icons = [
    [{ src: "images/HTML.png", alt: "HTML" }], // Row 1
    [
      { src: "images/CSS.png", alt: "CSS" },
      { src: "images/JS.png", alt: "JavaScript" },
    ], // Row 2
    [
      { src: "images/TS.png", alt: "TypeScript" },
      { src: "images/react.png", alt: "React" },
      { src: "images/Next.svg", alt: "Next.js" },
      { src: "images/Github.svg", alt: "Github" },
    ], // Row 3
    [
      { src: "images/Bootstrap.svg", alt: "Bootstrap" },
      { src: "images/MUI.png", alt: "MUI" },
    ], // Row 4
    [{ src: "images/Figma.svg", alt: "Figma" }], // Row 5
  ];

export default function TechStack() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{m: '0 0 5vw 0'}}>
        <Typography variant="h2">Tech Stack</Typography>
        </Box>
      {icons.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
            width: "100%",
            // maxWidth: "800px",
            gap: '6vw', 
            flexWrap: "wrap",
          }}
        >
          {row.map((icon) => (
            <motion.div
              key={icon.alt}
              animate={floatingAnimation}
              whileHover={{
                scale: 1.5, 
                zIndex: 1, 
                transition: { duration: 0.3 },
              }}
            >
              <Box
                component="img"
                src={icon.src}
                alt={icon.alt}
                sx={{
                  width: '5vw',
                  height: '5vw',
                }}
              />
            </motion.div>
          ))}
        </Box>
      ))}
    </Box>
  );
}
