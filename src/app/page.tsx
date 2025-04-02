"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Paper, BottomNavigationAction, Typography } from "@mui/material";
import { Home, Twitter, Notifications, Person } from "@mui/icons-material";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";


const navItems = [
  { label: "Profile", icon: <Person sx={{color: 'white',  '&:hover': { color: '#324f06' }}} />, color: "#000000" },
  { label: "Tech Stack", icon: <Twitter sx={{color: 'white',  '&:hover': { color: '#324f06' }}} />, color: "#000000" },
  { label: "Projects", icon: <Notifications sx={{color: 'white',  '&:hover': { color: '#324f06' }}}/>, color: "#000000" },
  { label: "Contact Me", icon: <Home sx={{color: 'white',  '&:hover': { color: '#324f06' }}}/>, color: "#000000" },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(0);
  const activeSection = navItems[selected].label;

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden"  }}>
      {/* Sidebar Navigation */}
      <Box
        sx={{
          width: "10vw",
          backgroundColor: "#1e1e1e",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          position: "relative",
        }}
      >
        {/* Floating Bubble Animation */}
        <motion.div
          layoutId="bubble"
          initial={false}
          animate={{ top: `calc(${selected * 25 - 2}% + 10vh)` }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            position: "absolute",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            backgroundColor: navItems[selected].color,
            zIndex: 1,
          }}
        />

        {/* Navigation Buttons */}
        <Paper
          elevation={3}
          sx={{
            position: "relative",
            width: "100%",
            height: "100vh",
            backgroundColor: "#1e1e1e",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {navItems.map((item, index) => (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon}
              onClick={() => setSelected(index)}
              sx={{ opacity: selected === index ? 1 : 0.7, zIndex: 2 , }}
            />
          ))}
        </Paper>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: navItems[selected].color,
          color: "white",
        }}
      >
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          {activeSection === "Profile" && <Profile />}
          {activeSection === "Tech Stack" && <TechStack />}
          {activeSection === "Projects" && <Projects />}
          {activeSection === "Contact Me" && <Typography variant="h3">Contact: Email, LinkedIn...</Typography>}
        </motion.div>
      </Box>
    </Box>
  );
}
