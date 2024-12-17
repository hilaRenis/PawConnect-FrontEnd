import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material';

const users = [
  { id: 1, username: 'john_doe', fullname: 'John Doe', email: 'john@example.com', role: 'user' },
  { id: 2, username: 'jane_smith', fullname: 'Jane Smith', email: 'jane@example.com', role: 'admin' },
  { id: 3, username: 'alex_jones', fullname: 'Alex Jones', email: 'alex@example.com', role: 'agency' },
];

function UserAccountManagementPage() {
  const navigate = useNavigate();

  const handleAddUser = () => {
    console.log('Navigate to Add User Page');
  };

  const handleEditUser = (id) => {
    console.log(`Edit user with ID: ${id}`);
  };

  const handleDeleteUser = (id) => {
    console.log(`Delete user with ID: ${id}`);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/');
  };

  const handleGoToAdminDashboard = () => {
    navigate('/admin-dashboard'); 
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#1976d2', width: '100%' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" onClick={() => navigate('/user-account-management')}>
              User Account Management
            </Button>
            <Button color="inherit" onClick={() => console.log('Navigate to Manage Posts')}>
              Manage Posts
            </Button>
            <Button color="inherit" onClick={handleGoToAdminDashboard}>
              Home
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 2, marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          User Account Management
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="user account table">
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.fullname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell align="center">
                    <Button variant="outlined" color="primary" onClick={() => handleEditUser(user.id)}>
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary" sx={{ marginLeft: 1 }} onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default UserAccountManagementPage;
