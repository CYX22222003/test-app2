import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Home(){
    return  (
        <div className="App-home">
          <h1 className='App-header'>First Deployment on Github Pages</h1>
          <p className='App-Content'>This is my first webpage deployed on Github pages. More content may be added in the future!</p>
          <Link to="/Intro">Link to learn more</Link>
        </div>
    );
}