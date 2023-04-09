import React from 'react';
import './App.css';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthPage />}/>
        <Route path='/home' element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
