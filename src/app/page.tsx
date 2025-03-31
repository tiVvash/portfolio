"use client";
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

const sections = ["Profile", "Tech Stack", "Projects", "Contact Me"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Profile");

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden" }}>
      {/* Sidebar Navigation */}
      <Box
        sx={{
          width: "15vw",
          backgroundColor: "#1e1e1e",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {sections.map((section) => (
          <Button
            key={section}
            variant={activeSection === section ? "contained" : "outlined"}
            onClick={() => setActiveSection(section)}
            sx={{ width: "80%", backgroundColor: '#324f06', border: "1px solid black", }}
          >
            {section}
          </Button>
        ))}
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
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
          {activeSection === "Profile" && (
            <Profile />
          )}
          {activeSection === "Tech Stack" && (
            <TechStack/>
          )}
          {activeSection === "Projects" && (
            <Projects/>
          )}
          {activeSection === "Contact Me" && (
            <Typography variant="h3">Contact: Email, LinkedIn...</Typography>
          )}
        </motion.div>
      </Box>
    </Box>
  );
}
