import { Box, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import CarouselWrapper from './CarouselWrapper';

const projects = [
  { name: "The Web Developer Bootcamp", img: "/images/TheWebDeveloperBootcamp.jpg", link: "https://www.udemy.com/course/the-web-developer-bootcamp/?couponCode=ST8MT220425G1", description: '' },
  { name: "The HTML and CSS Bootcamp", img: "/images/HTMLCSSBootcamp.jpg", link: "https://www.udemy.com/course/html-and-css-bootcamp/?couponCode=ST8MT220425G1", description: '' },
  { name: "The Web Design Course",  img: "/images/WebDesignCourse.jpg", link: "https://www.udemy.com/course/freelance-web-design-from-design-to-development-to-making-money/?couponCode=ST8MT220425G1", description: '' }
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

      <CarouselWrapper>
        {projects.map((project) => (
          <Box key={project.name} sx={{ flex: "0 0 auto", scrollSnapAlign: "start"}}>
            <ProjectCard
              src={project.img}
              title={project.name}
              link={project.link}
              description={project.description}
            />
          </Box>
        ))}
      </CarouselWrapper>
    </Box>
  );
};

export default Certificates;
