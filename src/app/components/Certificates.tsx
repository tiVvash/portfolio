import { Box, Typography } from '@mui/material'
import ProjectCard from './ProjectCard';

const projects = [
    { name: "The Web Developer Bootcamp", img: "/images/TheWebDeveloperBootcamp.jpg", link: "/" , description: ''},
    { name: "The HTML and CSS Bootcamp", img: "/images/HTMLCSSBootcamp.jpg", link: "/", description: '' }
];

const Certificates = () => {
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mt: '5vh' }}>
                <Typography variant="h2" sx={{
                    fontFamily: "'Playfair Display', serif", '@media (max-width:1024px)': {
                        fontSize: '2.5rem'
                    }, '@media (max-width:767px)': {
                        fontSize: '1.8rem'
                    }
                }}>Certificates</Typography>
            </Box>

            <Box sx={{
                display: "flex", gap: 4, flexWrap: "wrap", justifyContent: 'center', alignItems: 'center', height: '90vh',
                '@media (max-width:1024px)': { flexDirection: 'column', gap: "6vh" }
            }}>
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
    )
}

export default Certificates;