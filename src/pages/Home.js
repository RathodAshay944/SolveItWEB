import React from "react";
import Header from '../components/Header';
import About from './About';
import Contact from "./Contact";
import Services from './Services'


const Home = ()=>{

    return (
        <div>
            <Header />
            <About />
            <Services />
            <Contact />
        </div>
    );
}

export default Home;