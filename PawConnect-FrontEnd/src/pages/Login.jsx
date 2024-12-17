import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (email === 'user@example.com' && password === 'password') {
      navigate('/user-dashboard');
    } else if (email === 'agency@example.com' && password === 'password') {
      navigate('/agency-dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', 
        width: '100vw',  
        background: 'linear-gradient(to bottom right, #ece9e6, #ffffff)',
      }}
    >
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 400,
          width: '100%',
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}
      >
        <Typography variant="h5" textAlign="center" marginBottom={2}>
          Login
        </Typography>

        {error && (
          <Typography color="error" textAlign="center" marginBottom={2}>
            {error}
          </Typography>
        )}

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>

        <Typography textAlign="center" marginTop={2}>
          Don't have an account?{' '}
          <Button
            onClick={() => navigate('/register')}
            variant="text"
            color="primary"
          >
            Register here
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;