import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './Pages/AboutPage';
import StartInventoryPage from './Pages/StartInventoryPage';
import FindInventoryPage from './Pages/FindInventoryPage';

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/start" element={<StartInventoryPage />} />
      <Route path="/find" element={<FindInventoryPage />} />
    </Routes>
  );
}

export default AppRoute;