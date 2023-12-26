import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Intro from './Intro';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Intro" element={<Intro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
