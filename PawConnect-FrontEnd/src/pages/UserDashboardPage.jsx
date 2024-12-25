import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { AppBar, Toolbar, Typography, Button, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const announcements = [
  {
    id: 1,
    title: 'Lost Pet: Bella',
    description: 'A small brown dog was lost near Central Park on June 10th.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Stray Cat Seen',
    description: 'A white and black cat spotted near Oak Street.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Pet offer for adoption: Max',
    description: 'Grey tabby cat. 3-4 years old. Found 5 months ago in Central Park.',
    image: 'https://via.placeholder.com/150',
  },
];

function UserDashboardPage() {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/'); 
  };

  const handleGoToUserDashboard = () => {
    navigate('/user-dashboard'); 
  };

  const handleGoToChatPage = () => {
    navigate('/chat'); 
  };

  const handleGoToAnnouncements = () => {
    navigate('/announcement');
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#1976d2', width: '100%' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Dashboard
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" onClick={handleGoToUserDashboard}>
              Home
            </Button>
            <Button color="inherit" onClick={handleGoToChatPage}>
              Chat Page
            </Button>
            <Button color="inherit" onClick={handleGoToAnnouncements}>
              Announcements
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 2, marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          Announcements
        </Typography>
        <Grid container spacing={3}>
          {announcements.map((announcement) => (
            <Grid item xs={12} sm={6} md={4} key={announcement.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={announcement.image}
                  alt={announcement.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {announcement.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {announcement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default UserDashboardPage;