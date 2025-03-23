import { Typography, Container } from "@mui/material";

export default function Profile() {
    return (
        <Container maxWidth="lg" sx={{ mt: 10, textAlign: 'center' }}>
            <Typography variant="h2" gutterBottom>
                Hi, I'm Tinatin Vashakidze
            </Typography>
            <Typography variant="h5">Frontend Developer | React | Next.js</Typography>
        </Container>)
}