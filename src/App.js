import './App.css';
import Home from './Home';
import About from './About';
import {Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  );
}

export default App;
