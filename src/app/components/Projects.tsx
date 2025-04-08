import * as React from 'react';
import { Box, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';

const projects = [
  { name: "YelpCamp", img: "/images/YelpCamp.png", link: "/yelp-camp" },
  { name: "Jewelry App", img: "/images/JewelryApp.png", link: "/jewelryApp" }
];

const Projects = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={{ m: "5vw 0" }}>
        <Typography variant="h2" sx={{fontFamily: "'Playfair Display', serif"}}>Projects</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            src={project.img}
            title={project.name}
            link={project.link}
          />
        ))}
      </Box>
    </Box>
  );
}
export default Projects;