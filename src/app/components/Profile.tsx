
import { Typography, Container, Avatar } from "@mui/material";
import TypingEffect from "./TypingEffect";

export default function Profile() {


    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center', justifyItems: 'center' }}>
            <Avatar alt="Remy Sharp" src="/images/Pfp.jpeg" sx={{ width: '30vh', height: '30vh', mb: '10px' }} />

            <Typography variant="h2" gutterBottom sx={{height: '5vw'}}>
                <TypingEffect text="Welcome to my portfolio!" speed={100} delay={1000} />
            </Typography>
            <Typography variant="h5">Frontend Developer | React | Next.js</Typography>
        </Container>)
}