import React from 'react'
import js from "../assets/img/sakhyaa.jpg"

function Work() {
    return (
            <section id="work" className="border border-success" >
                <div className="container border border-primary">

                    <div className="row border border-warning ">

                        <div className="col-2 col-sm-3 col-md-4 border border-danger"></div>
                        <div className="col-8 col-sm-6 col-md-4 mb-4 text-center" data-aos="fade-up" data-aos-delay="300">
                            <h3>Experience</h3>


                            <div className="bg-base p-4 rounded-4 shadow-effect">

                                <h4 className="mb-4 text-center">Web Developer</h4>
                                <img className="rounded-4  d-flex mx-auto" src={js} alt="sakhyaa " />
                                <p className="text-brand mb-2">Sakhyaa.com</p>
                                
                                <p className="text-brand mb-2"> Aug-2021 - Nov-2021</p>
                                <p className="mb-0">Designed and developed landing page for website </p>
                            </div>
                        </div>
                        <div className="col-2 col-sm-3 col-md-4 border border-danger"></div>
                    </div>

                </div>
            </section>
    )
}

export default Work