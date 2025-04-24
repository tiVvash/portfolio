import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";



interface ProjectCardProps {
    src: string;
    title: string;
    link: string;
    description: string;
}

const ProjectCard = ({ src, title, link, description }: ProjectCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const theme = useTheme();
    const isTablet = useMediaQuery('(max-width: 1023px)');// 
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const style = {
        width: isMobile ? '80vw' : isTablet ? '70vw' : '40vw',
        height: 'auto',
        borderRadius: '10px',
        cursor: 'pointer',
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Clickable Image */}
            <motion.img
                src={src}
                layoutId={src}
                onClick={() => setIsOpen(true)}
                style={style}
            />

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 1000,
                        }}
                    >
                        {/* Enlarged Image */}
                        <motion.img
                            src={src}
                            layoutId={src}
                            style={{
                                width: "70vw",
                                height: "auto",
                                maxHeight: "90vh",
                                borderRadius: "10px",
                                cursor: "pointer",
                            }}
                        />
                        <Box sx={{ width: '70vw', height: 'auto' , backgroundColor: '#1e1e1e', borderRadius: '0 0 10px 10px', p: '20px'}}>
                            <Typography variant="h4" sx={{
                                fontFamily: "'Playfair Display', serif", '@media (max-width:1024px)': {
                                    fontSize: '1.6rem'
                                }, '@media (max-width:767px)': {
                                    fontSize: '1.4rem'
                                },
                            }}>{title}</Typography>
                            <Typography>{description}</Typography>
                            <Button
                                variant="contained"
                                sx={{ mt: 2 }}
                                onClick={() => router.push(link)}
                            >
                                View More
                            </Button>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
}

export default ProjectCard;