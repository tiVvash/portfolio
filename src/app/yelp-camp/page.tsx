"use client";

import { Box, Typography } from "@mui/material";
import BackgroundBeams from "../components/BackgroundBeams";
const YelpCamp = () => {
    return (
        <Box>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'black',
                zIndex: -1,
            }}>
                <BackgroundBeams className="background-beams" />
            </Box>
            <Typography variant="h1" sx={{
                textAlign: 'center',
                fontFamily: "'Playfair Display', serif", '@media (max-width:1024px)': {
                    fontSize: '2.7rem'
                }, '@media (max-width:767px)': {
                    fontSize: '2rem'
                }
            }}>YelpCamp</Typography>
            <Typography variant="h5">Tech Stack :</Typography>
            <Typography>HTML, CSS, Javascript, Bootstrap, Node.js, Express.js</Typography>
        </Box>
    )

}

export default YelpCamp;