import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';

function AnnouncementPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });
  const [marker, setMarker] = useState([51.505, -0.09]);

  const handleGoToAdminDashboard = () => {
    navigate('/admin-dashboard');
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/');
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleMapClick = (event) => {
    setMarker([event.latlng.lat, event.latlng.lng]);
    setLocation({ lat: event.latlng.lat, lng: event.latlng.lng });
  };

  const handlePostAnnouncement = () => {
    console.log('Post Announcement:', { title, description, image, location });
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#1976d2', width: '100%' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Announcement Page
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" onClick={handleGoToAdminDashboard}>
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
          flexDirection: 'column',
          minHeight: '100vh',
          paddingTop: '64px',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Post a New Announcement
          </Typography>

          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ marginBottom: '16px' }}
          />
          {image && <Typography>Image: {image.name}</Typography>}

          <Typography variant="h6" sx={{ marginTop: 2 }}>Select Location</Typography>
          <MapContainer
            center={marker}
            zoom={13}
            style={{ height: '300px', width: '100%', marginBottom: '16px' }}
            onClick={handleMapClick}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={marker}>
              <Popup>Location: {marker[0]}, {marker[1]}</Popup>
            </Marker>
          </MapContainer>

          <Button
            variant="contained"
            color="primary"
            onClick={handlePostAnnouncement}
            sx={{ marginTop: 2 }}
          >
            Post Announcement
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default AnnouncementPage;