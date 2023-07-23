import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ImagePage from './pages/ImagePage/ImagePage';
import LoginPage from './pages/LoginPage/LoginPage'

import './assets/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/image" element={<ImagePage />} />
    </Routes>
  </BrowserRouter>
);
