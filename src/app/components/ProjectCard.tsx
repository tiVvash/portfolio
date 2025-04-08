import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";


interface ProjectCardProps {
    src: string;
    title: string;
    link: string;
}

const ProjectCard=({ src, title , link}: ProjectCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Clickable Image */}
            <motion.img
                src={src}
                layoutId={src}
                onClick={() => setIsOpen(true)}
                style={{
                    width: "400px",
                    height: "250px",
                    borderRadius: "10px",
                    cursor: "pointer",
                }}
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
                                width: "60vw",
                                height: "auto",
                                maxHeight: "80vh",
                                borderRadius: "10px",
                                cursor: "pointer",
                            }}
                        />
                        <Box sx={{ width: '80vw', height: 'auto' }}>
                            <Typography variant="h4">{title}</Typography>
                            <Button
                                variant="contained"
                                sx={{ mt: 2 }}
                                onClick={() => router.push(link)}
                            >
                                View Project
                            </Button>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    );
}

export default ProjectCard;