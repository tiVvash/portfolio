import * as React from 'react';
import { Box, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';

const projects = [
    { name: "YelpCamp", img: "/images/YelpCamp.png", link: "/yelp-camp" },
    { name: "Jewelry App", img: "/images/JewelryApp.png", link: "/jewelryApp" }
  ];

const Projects =() => {
    return (
        <Box>
        <Typography variant="h2">Projects</Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
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