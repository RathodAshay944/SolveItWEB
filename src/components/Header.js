import React from "react";
import './header.css';
import background from '../images/1.gif'

const Header = () => {
  return (
    <>
      <div className="main_container">
        <section className="container ">
          <div className="row header_container">
            <div className="col-lg-6 col-sm-12 header_container_1">
              <h1 className="display-2">
                Let's Solve your Problems with <br />
               <span>SOLVEIT</span>
              </h1>
              <h3>Re-engineer Learning!</h3>
              
              <button type="button" class="btn btn-outline-primary btn-lg btn_lets_start">Get Started</button>
            </div>

            <div className ="col-lg-6 col-sm-12 header_container_2">
                    <img src= "images/1.gif" alt ="about image"/>
                </div>
           
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;