import React from 'react'
import js from "../assets/images/blog-post-3.jpg"
import reactImg from '../assets/images/react.png'
import reduxImg from '../assets/images/redux.webp'
import dandeliImg from '../assets/images/dandeli.jpg'
import keralaImg from '../assets/images/kerala.jpg'

function Blogs() {
  return (

    <section id="blog" className="mt-5 px-lg-5">
    <div className="container">

        <div className="row pb-4" data-aos="fade-up">
            <div className="col-lg-8">
                <h1>Personal Blogs</h1>
            </div>
        </div>


        <div className="row gy-4">

            <div className="col-md-4 d-flex" data-aos="fade-up" data-aos-delay="900">
                <div className="card-custom rounded-4 bg-base shadow-effect  flex-fill">
                    <div className="card-custom-image rounded-4">
                    <img className="rounded-4" src={js} alt=""/>
                    </div>
                    <div className="card-custom-content p-4">
                        <p className="text-brand mb-2">6 April, 2022</p>
                        <h5 className="mb-4">A day in life of Developer</h5>
                        <a href="#blog" className="link-custom">Read More</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 d-flex" data-aos="fade-up" data-aos-delay="1800">
                <div className="card-custom rounded-4 bg-base shadow-effect  flex-fill">
                    <div className="card-custom-image rounded-4">
                    <img className="rounded-4" src={reactImg} alt=""/>
                    </div>
                    <div className="card-custom-content p-4">
                        <p className="text-brand mb-2">25 July, 2022</p>
                        <h5 className="mb-4">React: Up and Running: Enhanced Productivity with Structured Web Apps </h5>
                        <a href="#blog" className="link-custom">Read More</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 d-flex" data-aos="fade-up" data-aos-delay="2700">
                <div className="card-custom rounded-4 bg-base shadow-effect  flex-fill">
                    <div className="card-custom-image rounded-4">
                    <img className="rounded-4" src={reduxImg} alt=""/>                       
                    </div>
                    <div className="card-custom-content p-4">
                        <p className="text-brand mb-2">20 Dec, 2022</p>
                        <h5 className="mb-4">Art of managing state with Redux</h5>
                        <a href="#blog" className="link-custom">Read More</a>
                    </div>
                </div>
            </div>

            <div className="col-md-4 d-flex" data-aos="fade-down" data-aos-delay="900">
                <div className="card-custom rounded-4 bg-base shadow-effect  flex-fill">
                    <div className="card-custom-image rounded-4">
                    <img className="rounded-4" src={dandeliImg} alt=""/> 
                    </div>
                    <div className="card-custom-content p-4">
                        <p className="text-brand mb-2">20 Feb, 2021</p>
                        <h5 className="mb-4">Dandeli,Over the river and through the woods</h5>
                        <a href="#blog" className="link-custom">Read More</a>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4 d-flex" data-aos="fade-down" data-aos-delay="1800">
                <div className="card-custom rounded-4 bg-base shadow-effect  flex-fill">
                    <div className="card-custom-image rounded-4">
                    <img className="rounded-4" src={keralaImg} alt=""/>
                    </div>
                    <div className="card-custom-content p-4">
                        <p className="text-brand mb-2">20 Feb, 2022</p>
                        <h5 className="mb-4">Kerala, where the palm trees sway and the backwaters flow</h5>
                        <a href="#blog" className="link-custom">Read More</a>
                    </div>
                </div>
            </div>

            

        </div>

    </div>
    <hr className="text-secondary"/>
</section>  )
}

export default Blogs