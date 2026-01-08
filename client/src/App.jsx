import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import MainLayout from './components/layout/MainLayout';

// Pages
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/dashboard/Profile';
import BuildProfile from './components/dashboard/BuildProfile';
import AIMLGuide from './components/learning/AIMLGuide';
import AppDevGuide from './components/learning/AppDevGuide';
import CloudGuide from './components/learning/CloudGuide';
import Certifications from './components/certifications/Certifications';
import AddOpportunity from './components/opportunities/AddOpportunity';
import OpportunitiesList from './components/opportunities/OpportunitiesList';
import ResumeGenerator from './components/resume/ResumeGenerator';
import Home from './pages/Home';

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
      
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/build-profile" element={<ProtectedRoute><BuildProfile /></ProtectedRoute>} />
        <Route path="/certifications" element={<ProtectedRoute><Certifications /></ProtectedRoute>} />
        <Route path="/resume" element={<ProtectedRoute><ResumeGenerator /></ProtectedRoute>} />
        <Route path="/opportunities/add" element={<ProtectedRoute><AddOpportunity /></ProtectedRoute>} />
        <Route path="/opportunities" element={<ProtectedRoute><OpportunitiesList /></ProtectedRoute>} />
        <Route path="/learning/ai-ml" element={<AIMLGuide />} />
        <Route path="/learning/app-dev" element={<AppDevGuide />} />
        <Route path="/learning/cloud" element={<CloudGuide />} />
        <Route path="/learning/cybersecurity" element={<CyberGuide />} />
        <Route path="/learning/dsa" element={<DSAGuide />} />
        <Route path="/learning/dbms" element={<DBMSGuide />} />
        <Route path="/learning/graphic-design" element={<GraphicDesignGuide />} />
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
};

export default App;