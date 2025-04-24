import { Box, Button, TextField, Typography, Link ,  Snackbar, Alert} from "@mui/material";
import { useState } from "react";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { LinkedIn } from "@mui/icons-material";



const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error',
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

    const data = await res.json();

    if (res.ok) {
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert(data.message || "Failed to send message.");
    }
  } catch (error) {
    console.error("Error sending message:", error);
  }
};



    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ mt: '5vh' }}>
                <Typography variant="h2" sx={{
                    fontFamily: "'Playfair Display', serif", '@media (max-width:1024px)': {
                        fontSize: '2.5rem'
                    }, '@media (max-width:767px)': {
                        fontSize: '1.8rem'
                    }
                }}>Contact Me</Typography>
            </Box>
            <Box sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, height: '90vh', '@media (max-width:1023px)': {
                    flexDirection: 'column',
                    gap: 4
                }, '@media (max-width:767px)': {
                    gap: 1
                }
            }}
            >

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: "flex", flexDirection: "column", gap: 2, width: 350, maxWidth: 600, mx: "auto", zIndex: 10, color: 'white', '@media (max-width:1023px)': {
                            maxWidth: "80vw",
                        }, '@media (max-width:767px)': {
                            maxWidth: "80vw",
                        }
                    }}
                >


                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{
                            border: '1px solid white', borderRadius: 5, input: {
                                color: 'white',
                            }, '& .MuiInputLabel-root': {
                                color: 'white',
                            }, '& .MuiOutlinedInput-root': {
                                borderRadius: 5,
                            }
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
                            border: '1px solid white', borderRadius: 5, input: {
                                color: 'white',
                            }, '& .MuiInputLabel-root': {
                                color: 'white',
                            }, '& .MuiOutlinedInput-root': {
                                borderRadius: 5,
                            }
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
                            border: '1px solid white', borderRadius: 5, color: 'white', '& textarea': {
                                color: 'white',
                            }, input: {
                                color: 'white',
                            }, '& .MuiInputLabel-root': {
                                color: 'white',
                            }, '& .MuiInputLabel-root.Mui-focused': {
                                color: 'white',
                            }, '& .MuiOutlinedInput-root': {
                                borderRadius: 5,
                            },
                            '@media (max-width:767px)': {
                                maxHeight: '100px', '& .MuiOutlinedInput-root': {
                                    maxHeight: '100px'
                                },
                            }
                        }}
                    />

                    <Button type="submit" variant="contained" sx={{ backgroundColor: '#4a9db4', borderRadius: 5 }}>Send</Button>
                </Box>
                <Box>
                    <Typography variant='h5' sx={{ '@media (max-width:1023px)': { fontSize: '1rem', } }}>
                        Or
                    </Typography>
                </Box>
                <Box sx={{
                    textAlign: 'left', height: '327px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: '#1e1e1e', p: 2, borderRadius: 5, '@media (max-width:1023px)': { maxWidth: '80vw' }, '@media (max-width:767px)': {
                        maxHeight: '300px',
                    }
                }}>

                    <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1, }}>
                        <MailOutlinedIcon />
                        <Link href="mailto:tvash2001@gmail.com" sx={{ textDecoration: 'none', color: '#4a9db4', ":hover": { color: 'white' } }}>
                            tvash2001@gmail.com
                        </Link>
                    </Typography>

                    <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocalPhoneOutlinedIcon />
                        <Link href="tel:+995598343960" sx={{ textDecoration: 'none', color: '#4a9db4', ":hover": { color: 'white' } }}>
                            +995 598 34 39 60
                        </Link>
                    </Typography>
                    <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LinkedIn />
                        <Link href="https://www.linkedin.com/in/tinatin-vashakidze/" sx={{ textDecoration: 'none', color: '#4a9db4', ":hover": { color: 'white' }, '@media (max-width :1023px)': { wordWrap: 'break-word', whiteSpace: 'normal', maxWidth: '60vw' } }}>
                            https://www.linkedin.com/in/tinatin-vashakidze/
                        </Link>
                    </Typography>
                </Box>
            </Box>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default ContactForm;