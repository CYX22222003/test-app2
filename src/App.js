import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import GetTest from './GetTest';
import POSTinput from './POSTInput';

import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/react_get" element={<GetTest />} />
      <Route path="/react_post" element={<POSTinput />} />
    </Routes>
    </div>
  );
}

export default App;
