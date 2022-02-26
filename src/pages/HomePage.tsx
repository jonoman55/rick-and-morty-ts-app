// import { NavLink } from 'react-router-dom';
import { Box, Stack, Container, Card, Typography } from '@mui/material';
import { Button } from '../components/controls';
import rickAvatar from '../images/rick-avatar.png';
import noobNoob from '../images/noob-noob.png';

// TODO : Finish styling this page
// TODO : Make a styled NavLink button
const HomePage = () => (
    <Box sx={{ my: 4 }}>
        <Container maxWidth='sm'>
            <Card elevation={2} sx={{ p: 2, m: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box component='img' src={rickAvatar} alt='' sx={{ height: 64, width: 64 }} />
                    <Typography component='p' sx={{ fontWeight: 700, fontSize: 16, textAlign: 'center', width: '100%' }}>Explore</Typography>
                    <Box component='img' src={noobNoob} alt='' sx={{ height: 64, width: 64 }} />
                </Box>
                <Stack spacing={4} sx={{ py: 2, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Button variant='contained' href='/characters' sx={{ width: 125 }}>Characters</Button>
                    <Button variant='contained' href='/locations' sx={{ width: 125 }}>Locations</Button>
                    <Button variant='contained' href='/episodes' sx={{ width: 125 }}>Episodes</Button>
                    <Button variant='contained' href='/search' sx={{ width: 125 }}>Search</Button>
                </Stack>
            </Card>
        </Container>
    </Box>
);

export default HomePage;