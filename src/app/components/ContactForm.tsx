import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { useState } from "react";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

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
        <Box>
            <Typography variant="h4" sx={{ mb: 5 }}>Contact Me</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 2, width: 400, maxWidth: 700, mx: "auto", zIndex: 10, color: 'white' }}
                >


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

                    <Button type="submit" variant="contained" sx={{ backgroundColor: '#4a9db4' }}>Send</Button>
                </Box>
                <Box>
                    <Typography variant='h5'>
                        Or
                    </Typography>
                </Box>
                <Box sx={{ textAlign: 'left'}}>

                    <Typography sx={{display: 'flex' , alignItems: 'center', gap: 2}}>
                        <MailOutlinedIcon />
                        <Link href="mailto:tvash2001@gmail.com">
                            tvash2001@gmail.com
                        </Link>
                    </Typography>

                    <Typography sx={{display: 'flex' , alignItems: 'center', gap: 2}}>
                        <LocalPhoneOutlinedIcon/>
                        <Link href="tel:+995598343960">
                            +995 598 34 39 60
                        </Link>
                    </Typography>
                    <Typography sx={{display: 'flex' , alignItems: 'center', gap: 2}}>
                        Linkedin:{' '}
                        <Link href="https://www.linkedin.com/in/tinatin-vashakidze/">
                            https://www.linkedin.com/in/tinatin-vashakidze/
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactForm;