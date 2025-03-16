import AdminLayout from 'layouts/admin';
import AuthLayout from 'layouts/auth';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />

      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
