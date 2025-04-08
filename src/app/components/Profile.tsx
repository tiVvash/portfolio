

// Profile.tsx
import { Typography, Container, Avatar, Box } from "@mui/material";
import TypingEffect from "./TypingEffect";


const Profile: React.FC = () => {
    return (
        <Box sx={{ position: 'relative', height: '100vh', width: '100%' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            {/* Content */}
            <Container
                sx={{
                    // position: 'absolute',
                    // top: '50%',
                    // left: '50%',
                    // transform: 'translate(-50%, -50%)',
                    // textAlign: 'center',
                    width:'100%',
                    m: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
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
                        mb: '50px',
                        alignContent: 'center'
                    }}
                />

                <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                        height: '5vw',
                        mb: '50px',
                        textAlign: 'left',
                        fontFamily: "'Playfair Display', serif",
                        '@media (max-width:768px)': {
                            fontSize: '2.5rem'
                        }, '@media (max-width:390px)': {
                            fontSize: '1.6rem'
                        },
                    }}
                >
                    <TypingEffect text="Welcome to my portfolio!" speed={100} delay={1000} />
                </Typography>

                <Typography variant="h3" sx={{ mb: '10px',
                    fontFamily: "'Playfair Display', serif", '@media (max-width:768px)': {
                        fontSize: '2rem'
                    }, '@media (max-width:390px)': {
                        fontSize: '1.5rem'
                    },
                }}>Hi, I am Tinatin Vashakidze</Typography>
                <Typography >Frontend Developer | React | Next.js</Typography>
            </Container>
        </Box>
    );
}

export default Profile;