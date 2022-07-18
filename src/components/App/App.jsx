import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import './App.css'
import Nav from '../navbar/nav'
import Home from '../home/home'
import About from '../about/about'
import Project from '../project/project'
import Contact from '../contact/contact';
import Footer from '../footer/footer'

class App extends React.Component{
    render(){
        return (
            <div className="home-page">
            {/* <Routes> */}
            {/* <div className="home-page"> */}
                {/* Navbar */}
                <Nav />
                {/* <Route Component={<Nav/>}/> */}

                {/* Landing-page / Home */}
                <Home />
                {/* <Route path='/home' Component={<Home/>}/> */}

                {/* About / what i do */}
                <About />
                {/* <Route path='/about' Component={<About/>}/> */}

                {/* Projects */}
                <Project />
                {/* <Route path='/project' Component={<Project/>}/> */}

                {/* Coding platform */}


                {/* Contact */}
                <Contact />
                {/* <Route path='/Contact' Component={<Contact/>}/> */}

                {/* Footer */}
                <Footer />
                {/* <Route Component={<Footer/>}/> */}

            {/* </div> */}
            {/* </Routes> */}
            </div>  

        );
    }
}

export default App;