import React from "react";

export default function Navbar(){
    return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-sm justify-content-center bg-light navbar-light">
        
            <a className="navbar-brand" href="#">
            
            </a>
            
            <div className="navbar-toggler" type="button" data-bs-toggle="dropdown" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar">
                <div class="collapsibleNavbar">
                    <a class="dropdown-item" href="#">Home</a>
                    <a class="dropdown-item" href="#about">About</a>
                    <a class="dropdown-item" href="#react_post">POST</a>
                    <a class="dropdown-item" href="#react_get">GET</a>
                </div>
            </div>
            

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="#react_post">CREATE</a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="#react_get">SHOW</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
    );
}