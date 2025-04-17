import * as React from 'react';
import { Box, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';

const projects = [
  { name: "YelpCamp", img: "/images/YelpCamp-min.png", link: "/yelp-camp", description: 'A full-stack application' },
  { name: "Jewelry App", img: "/images/JewelryApp-min.png", link: "/jewelryApp" , description: ''}
];

const Projects = () => {
  return (
    <Box sx={{ height: '100vh' ,display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ mt: '5vh'}}>
        <Typography variant="h2" sx={{
          fontFamily: "'Playfair Display', serif", '@media (max-width:1024px)': {
            fontSize: '2.5rem'
          }, '@media (max-width:767px)': {
            fontSize: '1.8rem'
          },
        }}>Projects</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: 'center', alignItems: 'center', height: '90vh', 
      '@media (max-width:1024px)': { flexDirection: 'column' , gap: "6vh"} }}>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            src={project.img}
            title={project.name}
            link={project.link}
            description={project.description}
          />
        ))}
      </Box>
    </Box>
  );
}
export default Projects;