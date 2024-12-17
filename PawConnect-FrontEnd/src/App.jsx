import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboardPage from './pages/UserDashboardPage';
import AgencyDashboardPage from './pages/AgencyDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import UserAccountManagementPage from './pages/UserAccountManagementPage.jsx'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={<UserDashboardPage />} />
        <Route path="/agency-dashboard" element={<AgencyDashboardPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/user-account-management" element={<UserAccountManagementPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;