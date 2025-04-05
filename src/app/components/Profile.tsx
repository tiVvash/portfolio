

// Profile.tsx
import { Typography, Container, Avatar, Box } from "@mui/material";
import TypingEffect from "./TypingEffect";


const Profile: React.FC = () => {
    return (
        <Box sx={{ position: 'relative', height: '100vh', width: '95vw' }}>

            {/* Content */}
            <Container
                maxWidth="lg"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    justifyItems: 'center',
                    zIndex: 1, 
                    color: '#fff', 
                }}
            >
                <Avatar
                    alt="Remy Sharp"
                    src="/images/Pfp.jpeg"
                    sx={{
                        width: '30vh',
                        height: '30vh',
                        mb: '10px',
                    }}
                />

                <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                        height: '5vw',
                    }}
                >
                    <TypingEffect text="Welcome to my portfolio!" speed={100} delay={1000} />
                </Typography>

                <Typography variant="h3">Hi, I am Tinatin Vashakidze</Typography>
                <Typography variant="h5">Frontend Developer | React | Next.js</Typography>
            </Container>
        </Box>
    );
}

export default Profile;