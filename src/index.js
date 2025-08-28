import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CorporateFilms from './Components/CorporateFilms';
import reportWebVitals from './reportWebVitals';
import PrivacyPolicy from './Components/PrivacyPolicy';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} /> {/* Default Route */}
      <Route path="CorporateFilms" element={<CorporateFilms />} />
      <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
    </Routes>
  </BrowserRouter>
);

// Log web vitals if needed
reportWebVitals();
