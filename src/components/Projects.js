import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import Img from "../assets/images/delish.png"
import calendar from "../assets/images/calendar.jpg"
import rccol from "../assets/images/rccol.jpg"
import todo from "../assets/images/todo.jpg"

import '../App.css'
function Projects() {
    const [flip, setFlip] = useState(false);
    const [flip1, setFlip1] = useState(false);
    const [flip2, setFlip2] = useState(false);
    const [flip3, setFlip3] = useState(false);

    return (
        <section id="projects" className="px-lg-5">
            <div className="container">
                <div className="row pb-4">
                    <div className="col-lg-8">
                        <h1>My Projects</h1>
                    </div>
                </div>

                <div className="row gy-5">
                    <div className="col-md-6 p-4 d-flex" >
                        <ReactCardFlip isFlipped={flip}
                            flipDirection="vertical">
                            <div className="card-custom rounded-4  bg-base shadow-effect flex-fill">
                                <div className="card-custom-image rounded-4">
                                    <img className="rounded-4  card-img-top" src={Img} alt="" />
                                </div>
                                <div className="card-custom-content p-4">
                                    <h4 className="card-heading p-2">Delish Resturant Website</h4>
                                    <p>Delish is a restaurant project using React  application that allows customers..  <button  className="p-0 " onClick={() => setFlip(!flip)}>
                                        Read more ..</button></p>
                                    <div className='d-flex justify-content-evenly'>
                                        <a href="https://delish-restaurant.netlify.app/" className="link-custom" data-aos="fade-up" data-aos-delay="300"><i className="fa fa-link"></i>  Demo Link</a>
                                        <a href="https://github.com/madhukar6143/finaldelish" className="link-custom" data-aos="fade-up" data-aos-delay="300"><i className="fa fa-github"></i>  Github</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card-custom rounded-4  bg-base shadow-effect flex-fill">

                                <div className="card-custom-content p-4">
                                    <div className="d-flex justify-content-between">
                                        <span ><h4>Delish Resturant Website </h4></span><span><button className="bg-warning  text-danger" onClick={() => setFlip(!flip)}>X</button></span>
                                    </div>
                                    <p>Delish is a restaurant project using React  application that allows customers to view information about a restaurant such as its menu,
                                        location.The project would make use of React, a JavaScript library for building user interfaces,
                                        to create a seamless and intuitive experience for customers.It  built using a modular and reusable codebase.
                                        Additionally, it could also integrate with external APIs to retrieve information such as customer reviews, menu items and real-time updates.
                                    </p>
                                </div>
                            </div>

                        </ReactCardFlip >
                    </div>


                    <div className="col-md-6 p-4 d-flex" >
                        <ReactCardFlip isFlipped={flip1}
                            flipDirection="horizontal">
                            <div className="card-custom rounded-4  bg-base shadow-effect flex-fill">
                                <div className="card-custom-image rounded-4">
                                    <img className="rounded-4  card-img-top" src={calendar} alt="" />
                                </div>
                                <div className="card-custom-content p-4">

                                 <h4 className="card-heading p-2">Coding Calendar Webiste</h4>
                                    <p>Contest calendar is a onestop platform for all coding contest timings...  <button  className="p-0"  onClick={() => setFlip1(!flip)}>
                                        Read more ..</button></p>

                                    <div className='d-flex justify-content-evenly'>
                                        <a href="https://delish-restaurant.netlify.app/" className="link-custom" data-aos="fade-up" data-aos-delay="300"><i className="fa fa-link"></i>  Demo Link</a>
                                        <a href="https://github.com/madhukar6143/finaldelish" className="link-custom" data-aos="fade-up" data-aos-delay="300"><i className="fa fa-github"></i>  Github</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card-custom rounded-4  bg-base shadow-effect flex-fill">

                                <div className="card-custom-content p-4">
                                    <div className="d-flex justify-content-between">
                                        <span ><h4>Coding Calendar Webiste</h4> </span><span><button className="bg-warning " onClick={() => setFlip1(!flip1)}>X</button></span>
                                    </div>
                                    <p>Contest calendar is a onestop platform for all coding contest timings</p>
                                </div>
                            </div>

                        </ReactCardFlip >
                    </div>


                    <div className="col-md-6 p-4 d-flex " >

                        <ReactCardFlip isFlipped={flip2}
                            flipDirection="horizontal">
                            <div className="card-custom rounded-4  bg-base shadow-effect flex-fill">
                                <div className="card-custom-image rounded-4">
                                    <img className="rounded-4  card-img-top" src={rccol} alt="" />
                                </div>
                                <div className="card-custom-content p-4">   
                                <h4 className="card-heading p-2">RC Columnn calculator </h4>
                                <p>Fronted Angular website for calculating Size of Column..
                                <button   className="p-0"  onClick={() => setFlip2(!flip2)}>
                                        Read more ..</button></p>

                                   
                                    
                                         <div className='d-flex justify-content-evenly'>
                                <a href="https://rc-column-calculator.netlify.app" className="link-custom" data-aos="fade-up" data-aos-delay="300"><i className="fa fa-link"></i>  Demo Link</a>
                                <a href="https://github.com/madhukar6143/RCcolumncalculator" className="link-custom" data-aos="fade-up" data-aos-delay="300"><i className="fa fa-github"></i>Source Code</a>
                                
                                   
                                    </div>
                                </div>
                            </div>

                            <div className="card-custom rounded-4  bg-base shadow-effect flex-fill">

                                <div className="card-custom-content p-4">
                                    <div className="d-flex justify-content-between">
                                        <span >RC Columnn calculator </span><span><button className="bg-warning " onClick={() => setFlip2(!flip2)}>X</button></span>
                                    </div>
                                    <p>Fronted Angular website for calculating Size of Column ,Number of Bars required for given requirements.In this project I colloborated with senior civil students and made website for thier mini project</p>
                               
                                </div>
                            </div>

                        </ReactCardFlip >
                    </div>


                    <div className="col-md-6 p-4  d-flex" >

                        <ReactCardFlip isFlipped={flip3}
                            flipDirection="vertical">
                            <div className="card-custom rounded-4  bg-base shadow-effect flex-fill">
                                <div className="card-custom-image rounded-4">
                                    <img className="rounded-4  card-img-top" src={todo} alt="" />
                                </div>
                                <div className="card-custom-content p-4">

                                <h4 className="card-heading">Todo manager with Redux</h4>
                                    <p>Todo manager made with React and Redux  that allows users to create..
                                    <button  className="p-0" onClick={() => setFlip3(!flip3)}>
                                        Read more ..</button></p>

                                    <div className='d-flex justify-content-evenly'>
                                        <a href="https://todo-practice-redux.netlify.app/" className="link-custom" data-aos="fade-up" data-aos-delay="300"><i className="fa fa-link"></i>  Demo Link</a>
                                        <a href="https://github.com/madhukar6143/finaldelish" className="link-custom" data-aos="fade-up" data-aos-delay="300"><i className="fa fa-github"></i>  Github</a>
                                    </div>
                                </div>
                            </div>

                            <div className="card-custom rounded-4  bg-base shadow-effect flex-fill">

                                <div className="card-custom-content p-4">
                                    <div className="d-flex justify-content-between">
                                        <span ><h4>Todo manager with Redux</h4> </span><span><button className="bg-warning " onClick={() => setFlip3(!flip3)}>X</button></span>
                                    </div>
                                    <p>Todo manager made with React and Redux  that allows users to create and manage their to-do lists. 
                                        The user interface would be built using React and  application's state management would be handled using Redux, a JavaScript library 
                                        that helps manage the state of the application in a predictable and efficient way.The application would likely have a list of to-do items 
                                        that the user can add, edit, and delete. Each to-do item would have a title, a description, and a status (e.g. incomplete or complete).  
                                        The application would also use a database to store the to-do items and user information.</p>
                                </div>
                            </div>

                        </ReactCardFlip >
                    </div>





                </div>
            </div>
            <hr className="text-secondary"/>
        </section>

    )
}


export default Projects;

