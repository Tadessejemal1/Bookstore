import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './App.css';
import Categories from './Components/Categories';
import BookStoreContainer from './Components/BookStoreContainer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<BookStoreContainer />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
