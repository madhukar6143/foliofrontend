import React from 'react'
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css'


function Home() {

    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <div>
        
        <section id="home" className="full-height px-lg-5">

            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <h1 className="display-4 fw-bold" data-aos="fade-up">I'M A <span className="text-brand">REACT DEVELOPER </span> 
                         FROM HYDERABAD,INDIA</h1>
                        <p className="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">I am Madhukar, 
                       And I design visually stunning and dynamic React websites, and constantly explore new 
                        technologies to bring even more innovation to my work</p>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <a href="#projects" className="btn btn-brand me-3   border border-primary">Explore My Work</a>
                            <a  href="#projects" className="link-custom span px-2">Call: 9133 759 +++</a>
                            <a  href="#projects" className="link-custom span px-2">madhukar.eppalapelly@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    </div>
  )
}

export default Home