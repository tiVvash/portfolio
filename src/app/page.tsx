"use client";

import { Box, } from "@mui/material";


import BackgroundBeams from "./components/BackgroundBeams";
import Portfolio from "./components/Portfolio";


const HomePage = () =>  {
  return (<Box>
    {/* Background */}
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
    <Portfolio/>
  </Box>

  )
}

export default HomePage;