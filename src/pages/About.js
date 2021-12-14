import React from "react";
import './about.css'
const About = ()=>{


    return(
        <div className="container">

                <div className="my-5">
                  <h1 className="text-center"> About Us </h1>
                </div>

             <div className="row about_us">
                <div className ="col-lg-6 col-sm-12 about_img">
                    <img src= "images/about_us.gif" alt ="about image"/>
                </div>
                <div className ="col-lg-6 col-sm-12 about_container">
                     <p>
                     We are solve it educational start-up. We are reforming existing educational system by taking help of existing users students and teacher's.
                     We will help student's by our interactive and smart study practice material work on pay as you go model. Along with our platform is useful 
                     for teacher's and tuition classes for getting online exposure and extra income provider through their content creation.
                     </p>

                     <br />

                     <div>
                        <h1>Vision</h1>  
                        <h2> To create affordable education system </h2>
                    </div>
                    <br />


                    <div>
                     <h1>Mission </h1> 
                     <h2>To convert online platforms addiction into passion.</h2>
                    </div>
                </div>           
            </div>
         
        </div>
    );
}

export default About;