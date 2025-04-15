import {Box, Typography} from '@mui/material'

const Certificates = () => {
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mt: '5vh' }}>
            <Typography variant="h2" sx={{
                fontFamily: "'Playfair Display', serif", '@media (max-width:1024px)': {
                    fontSize: '2.5rem'
                }, '@media (max-width:767px)': {
                    fontSize: '1.8rem'
                }
            }}>Certificates</Typography>
        </Box>
        </Box>
        )
}

export default Certificates;