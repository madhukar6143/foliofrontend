import React, { useEffect ,useState} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Work from './components/Work';
import Blogs from './components/Blogs';
import axios from 'axios';
import moment from 'moment';
export const URL = "https://portfoliobackend-4e5n.onrender.com"


function App() {

  const [message, setMessage] = useState('');

  let data = {
    "currentDate": moment().format('MMMM Do YYYY'),
    "count": 1
  };
  useEffect(() => {
    (async () => {
      await axios.post(`${URL}/user/track`, data)
    }
    )()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  

  useEffect(() => {
    axios.get(`${URL}/user/data`)
      .then(response => {
        setMessage(response.data.message);
        console.log(response,message)
      })
      .catch(error => {
        console.log(error);
      });
  }, [message]);



  return (

    <div className="row" data-bs-spy="scroll" data-bs-target=".navbar">


      <div className="col-sm-0  col-lg-2"><NavBar /></div>
      <div className="col-sm-12 col-lg-10">

        <Home />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Blogs />
        <Contact />
        <Footer /></div>
    </div>
  );
}

export default App;

/*
useEffect(() => {
    (async () => {
      const response = await axios.get(`${URL}/user/data`)
      console.log("res",response.data.payload);
    }
    )()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  */