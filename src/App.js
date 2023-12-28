import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import GetTest from './GetTest';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/react_get" element={<GetTest />} />
    </Routes>
    </div>
  );
}

export default App;
