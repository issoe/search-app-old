import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ImagePage from './pages/ImagePage/ImagePage';
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage';
import TextPage from './pages/TextPage/TextPage';
import TextPage2 from './pages/TextPage/TextPage2';
import SignupPage from './pages/SignupPage/SignupPage';

import './assets/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/image" element={<ImagePage />} />
      <Route path="/text" element={<TextPage />} />
      <Route path="/text2" element={<TextPage2 />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
