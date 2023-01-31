import React from 'react'
import '../App.css'

function NavBar() {
    return (
  

<nav className="navbar navbar-expand-lg navbar-dark fixed-top">
    <div className="container flex-lg-column">
        <a className="navbar-brand mx-lg-auto mb-lg-4" href="#home">
            <span className="h3 fw-bold d-block d-lg-none">Madhukar Eppalapelly</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>




        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto flex-lg-column text-lg-center" data-bs-spy="scroll" data-bs-target=".navbar">

                <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#work">Work</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" href="#blog">Blog</a>
                    </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        </div>
</nav>
      
    )
}

export default NavBar