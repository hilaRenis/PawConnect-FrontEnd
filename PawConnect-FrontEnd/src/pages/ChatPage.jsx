import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, List, ListItem, ListItemText, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';

function ChatPage() {
  const navigate = useNavigate();

  const handleGoToUserDashboard = () => {
    navigate('/user-dashboard');
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/');
  };

  return (
    <div>

      <AppBar position="fixed" sx={{ backgroundColor: '#1976d2', width: '100%' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat Page
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" onClick={handleGoToUserDashboard}>
              Home
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          paddingTop: '64px', 
        }}
      >

        <Box
          sx={{
            width: '300px',
            borderRight: '1px solid #ddd',
            backgroundColor: '#f5f5f5',
            padding: 2,
            overflowY: 'auto',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Conversations
          </Typography>
          <List>

            <ListItem button>
              <ListItemText primary="Agency 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Agency 2" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Agency 3" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Agency 4" />
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 2,
            paddingRight: 2,
            height: '85vh', 
          }}
        >
          <Box
            sx={{
              flexGrow: 1, 
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #ddd',
              borderRadius: 2,
              boxShadow: 1,
              overflow: 'hidden',
              backgroundColor: '#fff',
            }}
          >
            <Typography
              variant="h5"
              sx={{ padding: 2, borderBottom: '1px solid #ddd', textAlign: 'center' }}
            >
              Current Chat
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                overflowY: 'auto',
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <List disablePadding>
                <ListItem sx={{ alignItems: 'flex-start' }}>
                  <ListItemText
                    primary="Agency: Hello, how can we assist you today?"
                    secondary="10:00 AM"
                    sx={{ wordBreak: 'break-word' }}
                  />
                </ListItem>
                <ListItem sx={{ alignItems: 'flex-start' }}>
                  <ListItemText
                    primary="User: I want to adopt the cat named Max."
                    secondary="10:05 AM"
                    sx={{ wordBreak: 'break-word' }}
                  />
                </ListItem>
                <ListItem sx={{ alignItems: 'flex-start' }}>
                  <ListItemText
                    primary="Agency: That is lovely of you! Can you provide me a few of your personal details so we can know more about you? And we can organize a meeting!"
                    secondary="10:10 AM"
                    sx={{ wordBreak: 'break-word' }}
                  />
                </ListItem>
              </List>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: 1,
                padding: 2,
                borderTop: '1px solid #ddd',
              }}
            >
              <TextField
                fullWidth
                placeholder="Type your message..."
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              <IconButton color="primary">
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ChatPage;
