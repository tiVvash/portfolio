import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from "react";

const CarouselWrapper = ({ children }: { children: React.ReactNode }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -300 : 300;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <Box sx={{width: '90vw', height: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Box
                component={motion.div}
                ref={scrollRef}
                sx={{
                    display: "flex",
                    gap: "16px",
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    padding: "20px 40px",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {children}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 2 }}>
                <IconButton
                    onClick={() => scroll("left")}
                    sx={{
                        backgroundColor: "#111",
                        color: "white",
                        "&:hover": { backgroundColor: "#333" },
                    }}
                >
                    <ArrowBackIosNewIcon sx={{ fontSize: 24 }} />
                </IconButton>

                <IconButton
                    onClick={() => scroll("right")}
                    sx={{
                        backgroundColor: "#111",
                        color: "white",
                        "&:hover": { backgroundColor: "#333" },
                    }}
                >
                    <ArrowForwardIosIcon sx={{ fontSize: 24 }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default CarouselWrapper;
