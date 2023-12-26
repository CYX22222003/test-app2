import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Intro from './Intro';

function App() {
  return (
    <div className="App">
      <h1 className='App-header'>First Deployment on Github Pages</h1>
      <p>This is my first webpage deployed on Github pages. More content may be added in the future!</p>
    </div>
  );
}

export default App;
