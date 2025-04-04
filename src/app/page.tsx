"use client";

import { Box, } from "@mui/material";


import BackgroundBeams from "./components/BackgroundBeams";
import Portfolio from "./components/Portfolio";


export default function () {
  return (<Box>
    {/* Background */}
    <Box sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
    }}>
      <BackgroundBeams className="background-beams" />
    </Box>
    <Portfolio/>
  </Box>

  )
}