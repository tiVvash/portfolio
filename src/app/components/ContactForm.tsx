import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData); 
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2, width: 400, maxWidth: 700, mx: "auto", zIndex: 10, color: 'white' }}
        >
            <Typography variant="h4">Contact Me</Typography>

            <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                    border: '1px solid white', input: {
                        color: 'white',
                    }, '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                }}

            />

            <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                    border: '1px solid white', input: {
                        color: 'white',
                    }, '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                }}
            />

            <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                sx={{
                    border: '1px solid white', color: 'white', '& textarea': {
                        color: 'white',
                    }, input: {
                        color: 'white',
                    }, '& .MuiInputLabel-root': {
                        color: 'white',
                    }, '& .MuiInputLabel-root.Mui-focused': {
                        color: 'white',
                    },
                }}
            />

            <Button type="submit" variant="contained">Send</Button>
        </Box>
    );
}

export default ContactForm;