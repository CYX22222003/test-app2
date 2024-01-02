import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import GetTest from './GetTest';
import POSTinput from './POSTInput';
import Login from "./Login.js";
import {useState, useContext, createContext } from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';

export const AuthoContext = createContext();

function Logout(){
  const {AuthState, setState} = useContext(AuthoContext);
  function HandleLogout(){
    setState(false);
  }
  return (
    <div className='container'>
      <p className='text-warnig bg-light'>Do you really want to log out?</p> <br />
      <button onClick={HandleLogout}>Log out</button>
    </div>
  );
}

function App() { 
  const [AuthState, setState] = useState(false);
  return AuthState
  ? (
    <div>
    <AuthoContext.Provider value={{AuthState, setState}}>
      <Navbar />
      <Routes>
        <Route exact path="/login" element = {<Login />} />
        <Route exact path="/" element={AuthState ? <Home /> : <Navigate to="/login"/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/react_get" element={<GetTest />} />
        <Route exact path="/react_post" element={<POSTinput />} />
        <Route exact path="/log_out" element={<Logout />} />
      </Routes>
    </AuthoContext.Provider>
    </div>
    
  )
  : (<AuthoContext.Provider value={{AuthState, setState}}>
      <Navbar />
      <Login />
    </AuthoContext.Provider>
  );
}

export default App;
