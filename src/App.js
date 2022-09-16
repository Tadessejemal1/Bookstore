import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Catagories from './Pages/Catagories';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catagories" element={<Catagories />} />
      </Routes>
    </Router>
  );
}

export default App;
