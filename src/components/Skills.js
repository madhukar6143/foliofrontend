import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import css from "../assets/img/css-3.png"
import html from "../assets/img/html.png"
import js from "../assets/img/js.png"
import react from "../assets/img/react-logo.png"
import typeScript from "../assets/img/ts.png"
import github from "../assets/img/github-logo.png"
import redux from "../assets/images/redux.webp"


import oracle from "../assets/img/oracle.jpg"

import antdesign from "../assets/img/antdesign.svg"
import mean from "../assets/img/mean.jpg"
import mern from "../assets/img/mern.jpg"
import heroku from "../assets/img/heroku.png"
import netlify from "../assets/img/netlify.webp"


import render from "../assets/img/render.jpg"

import mongodb from "../assets/img/mongodb.png"
import tailwind from "../assets/images/tailwind.png"





import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import '../App.css'



function Skills() {

  const [flip, setFlip] = useState(false);

  let items = [css, html, react, js, typeScript, github, redux,oracle,antdesign,mean,mern,heroku,netlify,render,mongodb,tailwind];

  let names = ["Css", "Html", "React", "JavaScript", "TypeScript", "Github", "Redux","Oracle","Antdesign","MEAN","MERN","Heroku","Netlify","Render","Mongodb","Tailwind"];

  let styling=["fade-down","fade-up","fade-left","fade-right"]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section id="skills">
      <div className="parent">
        <h2 className="text-center">Skills </h2>

        {flip ? <button className=" btnSize text-warning" onClick={() => setFlip(!flip)}><i className="fa-solid fa-toggle-on"></i></button> :
          <button className=" btnSize text-warning" onClick={() => setFlip(!flip)}><i className="fa-solid fa-toggle-off"></i></button>}

      </div>

      <ReactCardFlip isFlipped={!flip}
        flipDirection="vertical">
        <section className="skill bg-base" >

          <div className="container ">
            <div className="row">
              <div className="col-12">
                <div className="skill-bx wow zoomIn">
                  <p className=" capitalize">What is the most important thing after oxygen? To be industry relevant and have the right skills <br></br><span className="text-info"> Checkout my skills</span></p>


                  <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} className="owl-carousel owl-theme skill-slider cursor-pointer ">

                  
                  
                      {items.map((item, index) =>
                        <div className="item" key={index}>

                          <img src={item} alt="" />
                          <h5>{names[index]}</h5>
                        </div>
                      )}




                  </Carousel>
                </div>
              </div>
            </div>
          </div>


        </section>


        <section className="container px-5  mx-5">

          {items.map((item, index) =>
          <div className="d-inline-flex justify-content-between">
            <div className=" col-xs-6    p-4  abcd  w-0" id="content5" key={index}  data-aos={styling[index%4]} data-aos-delay="900">
              <div className="rounded-4 bg-base shadow-effect  abcd">
                <img className="rounded-4 skillPhoto " src={item} alt="" />
              </div>
              <div className='text-warning text-center'>{names[index]}</div>
            </div>
            </div>
            
          )}
        </section>
      </ReactCardFlip >
      <hr className="text-secondary"/>
    </section>

  )
}

export default Skills