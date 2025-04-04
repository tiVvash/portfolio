import * as React from 'react';
import { Box, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';

const projects = [
    { name: "YelpCamp", img: "/images/YelpCamp.png", link: "/yelp-camp" },
    { name: "Recipe Finder", img: "/images/RecipeFinder.png", link: "/recipe-finder" }
  ];

export default function Projects() {
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