import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Intro(){
    return (
        <div className="App-IntroPage">
            <p className="App-paragraph">
                This project was bootstrapped with [Create React App] <a href="https://github.com/facebook/create-react-app">Link to Create React App</a> <br />
                Details of the webpage: <br />
                Author: CYXun <br />                
            </p>
            <Link to="/Home">Link to Home page</Link>
        </div>
    )
}