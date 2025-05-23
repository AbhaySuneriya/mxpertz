import React from 'react';
import Home from './pages/Home';
import Next from './pages/next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/next" element={<Next />} />
      </Routes>
    </Router>
  );
};

export default App;
