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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
      
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
      
          if (res.ok) {
            alert("Message sent!");
            setFormData({ name: "", email: "", message: "" });
          } else {
            alert("Failed to send message.");
          }
        } catch (error) {
          console.error("Error sending message:", error);
        }
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
                <Box sx={{ textAlign: 'left' , height: '327px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>

                    <Typography sx={{display: 'flex' , alignItems: 'center', gap: 2}}>
                        <MailOutlinedIcon />
                        <Link href="mailto:tvash2001@gmail.com" sx={{textDecoration: 'none', color: '#4a9db4', ":hover": {color:'white' }}}>
                            tvash2001@gmail.com
                        </Link>
                    </Typography>

                    <Typography sx={{display: 'flex' , alignItems: 'center', gap: 2}}>
                        <LocalPhoneOutlinedIcon/>
                        <Link href="tel:+995598343960" sx={{textDecoration: 'none', color: '#4a9db4', ":hover": {color:'white' }}}>
                            +995 598 34 39 60
                        </Link>
                    </Typography>
                    <Typography sx={{display: 'flex' , alignItems: 'center', gap: 2}}>
                        Linkedin:{' '}
                        <Link href="https://www.linkedin.com/in/tinatin-vashakidze/" sx={{textDecoration: 'none', color: '#4a9db4', ":hover": {color:'white' }}}>
                            https://www.linkedin.com/in/tinatin-vashakidze/
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactForm;