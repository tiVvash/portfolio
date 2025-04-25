import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Paper, BottomNavigationAction, IconButton, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { Notifications, Person, Menu } from "@mui/icons-material";
import Profile from "./Profile";
import TechStack from "./TechStack";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Certificates from "./Certificates";

const navItems = [
    { label: "Profile", icon: <Person sx={{ color: 'white', '&:hover': { color: '#0e7aa1' } }} />, color: "#000000", content: 'Profile' },
    { label: "Tech Stack", icon: <CodeOutlinedIcon sx={{ color: 'white', '&:hover': { color: '#0e7aa1' } }} />, color: "#000000" },
    { label: "Projects", icon: <FolderSpecialIcon sx={{ color: 'white', '&:hover': { color: '#0e7aa1' } }} />, color: "#000000" },
    { label: "Certificates", icon: <MilitaryTechIcon sx={{ color: 'white', '&:hover': { color: '#0e7aa1' } }} />, color: "#000000" },
    { label: "Contact", icon: <Notifications sx={{ color: 'white', '&:hover': { color: '#0e7aa1' } }} />, color: "#000000" },

];

const Portfolio = () => {
    const [selected, setSelected] = useState(0);  // Default is the first item (Profile)
    const [drawerOpen, setDrawerOpen] = useState(false); // Drawer open/close state
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down('lg')); // max-width: 1024px
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // max-width: 767px

    const activeSection = navItems[selected].label;

    return (
        <Box sx={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>

            {/* Hamburger menu for mobile and tablet */}
            {(isMobile || isTablet) && (
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        zIndex: 1000,
                        color: 'white'
                    }}
                    onClick={() => setDrawerOpen(!drawerOpen)}
                >
                    <Menu />
                </IconButton>
            )}

            {/* Main content area */}
            <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>

                {/* Sidebar Navigation */}
                <Drawer
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    sx={{
                        width: isMobile ? '20%' : isTablet ? '18%' : '10%',
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            wwidth: isMobile ? '20%' : isTablet ? '15%' : '10%',
                            backgroundColor: '#1e1e1e',
                            color: 'white',
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        {navItems.map((item, index) => (
                            <Box
                                key={index}

                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {/* Bubble (Always behind the icon) */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: "80%",
                                        aspectRatio: '1',
                                        borderRadius: "50%",
                                        backgroundColor: '#4a9db4',
                                        zIndex: selected === index ? 1 : -1, // Bring the bubble in front for selected item
                                        opacity: selected === index ? 1 : 0, // Show the bubble only for the selected item
                                    }}
                                />
                                <BottomNavigationAction
                                    label={item.label}
                                    icon={item.icon}
                                    onClick={() => setSelected(index)}
                                    sx={{
                                        opacity: selected === index ? 1 : 0.7,
                                        zIndex: 2,
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Drawer>

                {/* Sidebar for Desktop */}
                {!isMobile && !isTablet && (
                    <Box
                        sx={{
                            width: "5vw",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                            position: "relative",
                        }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100vh",
                                backgroundColor: "#1e1e1e",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                alignItems: "center",
                            }}
                        >
                            {navItems.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {/* Bubble (Always behind the icon) */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            width: "80%",
                                            aspectRatio: '1',
                                            borderRadius: "50%",
                                            backgroundColor: '#4a9db4',
                                            zIndex: selected === index ? 1 : -1, // Bring the bubble in front for selected item
                                            opacity: selected === index ? 1 : 0, // Show the bubble only for the selected item
                                        }}
                                    />
                                    <BottomNavigationAction
                                        label={item.label}
                                        icon={item.icon}
                                        onClick={() => setSelected(index)}  // Set selected index when clicked
                                        sx={{
                                            opacity: selected === index ? 1 : 0.7,
                                            zIndex: 2, // Ensure icon is always on top of the bubble
                                        }}
                                    />
                                </Box>
                            ))}
                        </Paper>
                    </Box>
                )}

                {/* Main content */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                    }}
                >
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        style={{ textAlign: "center" }}
                    >
                        {activeSection === "Profile" && <Profile />}
                        {activeSection === "Tech Stack" && <TechStack />}
                        {activeSection === "Projects" && <Projects />}
                        {activeSection === "Certificates" && <Certificates />}
                        {activeSection === "Contact" && <ContactForm />}
                    </motion.div>
                </Box>
            </Box>
        </Box>
    );
};

export default Portfolio;