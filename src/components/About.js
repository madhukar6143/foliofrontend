import React from 'react'



function About() {
    /*
    import btech from "../assets/images/btech.jpg"

import inter from "../assets/images/inter.jpg"

import school from "../assets/images/school.jpg"
    <div className="card-custom-image rounded-4">
    <img className="rounded-4  card-img-top" src={school} alt="" />
    </div>
                                */

  return (
    <div>
    <section id="about" className="full-height px-lg-5">
        <div className="container">

            <div className="row pb-4" data-aos="fade-up">
                <div className="col-lg-8">
                    <h1>My Education </h1>
                </div>
            </div>

            <div className="row gy-5">
                <div className="col-lg-6">

                    <div className="row gy-4">

                        <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                            <div className="bg-base p-4 rounded-4 shadow-effect">
                                <h4 className='card-heading'>Bachelor of  Technology</h4>
                                
                                <p >VNR VJIET,Bachupally,Hyderabad </p>
                                <p>2019 - 2023</p>
                                <p >CGPA : 7.93</p>
                                 </div>
                        </div>

                        <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                            <div className="bg-base p-4 rounded-4 shadow-effect">
                                <h4 className='card-heading'>Intermediate</h4>
                                
                                <p >Sri Chaitanya Junior College,Ameenpur,Hyderbad</p>
                                <p> 2017 - 2019</p>
                                <p >Percentage : 9.62</p>
                                 </div>
                        </div>

                       
                    </div>

                </div>

                <div className="col-lg-6">

                    <div className="row gy-4">

                    <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                            <div className="bg-base p-4 rounded-4 shadow-effect">
                                <h4 className='card-heading'>Secondary School </h4>
                                
                                <p >Vivekananda High School,Gangadhara,Karimnagar</p>
                                <p>2007-2017</p>
                                <p >CGPA : 9.8</p>
                                </div>
                        </div>


                       

                      

                    </div>

                </div>

            </div>

        </div>
    </section></div>
  )
}

export default About