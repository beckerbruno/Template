// src/routes/AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/home';
import About from '../pages/AboutUs/about';
import Contact from '../pages/Contact/Contact';
// import LoginPage from '../pages/LoginPage';
// import RegisterPage from '../pages/RegisterPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        {/* <Route path="/login" element={<LoginPage />} /> */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
