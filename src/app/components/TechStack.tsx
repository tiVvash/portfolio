import { Box, Typography } from "@mui/material";
import { motion, Transition } from "framer-motion";
import { useState } from "react";

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
  [{ src: "images/HTML.png", alt: "HTML" }],
  [
    { src: "images/CSS.png", alt: "CSS" },
    { src: "images/JS.png", alt: "JavaScript" },
  ],
  [
    { src: "images/TS.png", alt: "TypeScript" },
    { src: "images/React.png", alt: "React" },
    { src: "images/Next.svg", alt: "Next.js" },
    { src: "images/Github.svg", alt: "Github" },
  ],
  [
    { src: "images/Bootstrap.svg", alt: "Bootstrap" },
    { src: "images/MUI.png", alt: "MUI" },
  ],
  [{ src: "images/Figma.svg", alt: "Figma" }],
];

const TechStack = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ mt: '5vh'}}>
        <Typography variant="h2" sx={{
          fontFamily: "'Playfair Display', serif",
          '@media (max-width:1024px)': {
            fontSize: '2.5rem'
          }, '@media (max-width:767px)': {
            fontSize: '1.8rem'
          },
        }}>Tech Stack</Typography>
      </Box>
      <Box sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {icons.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 3,
              width: "100%",
              gap: "6vw",
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
                    width: "5vw",
                    height: "5vw",
                    '@media (max-width:1024px)': { width: '6vw', height: "6vw", },
                    '@media (max-width:767px)': { width: '10vw', height: "10vw", }
                  }}
                  onMouseMove={(e) => {
                    setHovered(icon.alt);
                    setPosition({ x: e.clientX + 10, y: e.clientY + 10 });
                  }}
                  onMouseLeave={() => setHovered(null)}
                />
              </motion.div>
            ))}
          </Box>
        ))}

        {hovered && (
          <Box
            sx={{
              position: "fixed",
              top: position.y,
              left: position.x,
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "0.9rem",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          >
            {hovered}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default TechStack;