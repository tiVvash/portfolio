"use client";

import { Box, Typography } from "@mui/material";
import BackgroundBeams from "../components/BackgroundBeams";
const YelpCamp = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' , width: '100vw', alignItems: 'center'}}>
            <Box sx={{ width: '90vw',}}>
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '90vw',
                    height: '100vh',
                    backgroundColor: 'black',
                    zIndex: -1,
                }}>
                    <BackgroundBeams className="background-beams" />
                </Box>

                <button>Go Back</button>
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
                <Typography>YelpCamp is a full-stack web application that allows users to explore campgrounds on an interactive map. Users can register, log in, create and manage their own campgrounds, leave reviews, and comment on other listings.</Typography>
            </Box>
        </Box>
    )

}

export default YelpCamp;