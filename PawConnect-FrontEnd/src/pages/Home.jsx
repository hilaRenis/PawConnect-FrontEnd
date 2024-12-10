import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw', 
        height: '100vh', 
        backgroundImage: "url('/petphoto.jpeg')",
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        position: 'relative', 
      }}
    >

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1, 
        }}
      ></Box>

      <Box
        sx={{
          position: 'relative', 
          zIndex: 2, 
          textAlign: 'center', 
          color: 'white', 
          padding: 2,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to PawConnect
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, marginBottom: 4 }}>
          PawConnect is a platform dedicated to locating, adopting, and rescuing stray animals. 
          Join us to help make a difference!
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            size="large"
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            variant="outlined"
            color="primary"
            size="large"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

