import React from 'react'
import axios from 'axios'

import {useForm} from 'react-hook-form'
import '../App.css'
import { URL } from "../App";

function Contact() {

    let {register,handleSubmit,reset}=useForm()
   
        const onSubmit = async(data) => {
            let response =await axios.post(`${URL}/user/create-user`,data)
            if (response.status === 200) {
                //navigate to userlist component
                alert(response.data.message)
              }
            if(response.status===200 && response.data.message !=="Duplicate Data" )
            {
                reset({
                    username: '',
                    mail:'',
                    subject:'',
                    message:''
                  });
            }
          };    
  return (
    <div>      
        
        
        
          <section id="contact" >
    <div className="container  mt-5 px-5 ">
        
 


       
 

        <div className="row justify-content-center text-center">
            <div className="col-lg-8 pb-4" data-aos="fade-up">
                <h6 className="text-brand">CONTACT</h6>
                <h1>Interested in working together? Let's talk
                </h1>
            </div>

            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                




            <form onSubmit={handleSubmit(onSubmit)}  className="row g-lg-3 gy-3">
                
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Enter your name"
                        {...register("username")}/>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="email" className="form-control" placeholder="Enter your email"
                        {...register("mail")}/>
                    </div>
                    <div className="form-group col-12">
                        <input type="text" className="form-control" placeholder="Enter subject"
                        {...register("subject")}/>
                    </div>
                    <div className="form-group col-12">
                        <input   className="form-control textarea" placeholder="Enter your message"
                        {...register("message")}/>
                    </div>
                    <div className="form-group bg-base  col-12 d-grid text-center">
                                <button type="submit" className="btn btn-brand">Contact me</button>
                            </div>
                </form>
            </div>
        </div>


    </div>

    <div>       
        <div className=" container mt-5">
           
                <div  id="content1" className="social-icons d-flex justify-content-around mt-4">
                    <a href="#contact" data-aos="fade-up" data-aos-delay="300" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.instagram.com/madhukar_1718/" data-aos="fade-up" data-aos-delay="600" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/madhukar6143" data-aos="fade-left" data-aos-delay="900" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/madhukar-eppalapelly-b31197191/" data-aos="fade-right" target="_blank" data-aos-delay="1300" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/madhukar.madhu.100/" data-aos="fade-down" target="_blank" data-aos-delay="1500" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                </div>
    </div></div>

</section></div>
  )
}

export default Contact