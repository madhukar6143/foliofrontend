import React from 'react'
import css from "../assets/img/css-3.png"
import html from "../assets/img/html.png"
import js from "../assets/img/js.png"
import react from "../assets/img/react-logo.png"
import typeScript from "../assets/img/ts.png"
import github from "../assets/img/github-logo.png"

import redux from "../assets/images/redux.webp"

import '../App.css'




function Skill2() {


  let items = [css, html, react, js, typeScript, github,redux];
  
  let names = ["Css", "Html", "React", "JavaScript", "TypeScript", "Github","Redux"];
  /*
  
    <div className="flip-card-container" style={{hue: 350}}>
      <div className="flip-card">
    
        <div className="card-front">
          <figure>
            <div className="img-bg"></div>
            <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake"/>
            <figcaption>Brohm Lake</figcaption>
          </figure>
    
          <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
            <li>Detail 3</li>
            <li>Detail 4</li>
            <li>Detail 5</li>
          </ul>
        </div>
    
        <div className="card-back">
          <figure>
            <div className="img-bg"></div>
            <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake"/>
          </figure>
    
          <button>Book</button>
    
          <div className="design-container">
            <span className="design design--1"></span>
            <span className="design design--2"></span>
            <span className="design design--3"></span>
            <span className="design design--4"></span>
            <span className="design design--5"></span>
            <span className="design design--6"></span>
            <span className="design design--7"></span>
            <span className="design design--8"></span>
          </div>
        </div>
    
      </div>
      */
  return (  <div className="container ">
 
    {items.map((item, index) =>
      <div className="col-xs-6 m-2 abcd w-0"  id="content5" key={index}>
        <div className="rounded-4 bg-base shadow-effect  abcd">
            <img className="rounded-4 skillPhoto " src={item} alt="" /> 
        </div>
        <div className='text-warning text-center'>{names[index]}</div>
      </div>
)}
</div >


  )
}

export default Skill2