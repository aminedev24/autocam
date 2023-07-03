import React from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./searchBox";
import heroImg1 from './BARGAINSALE-sale_n copy.jpg';
//const heroImg1 = require('./BARGAINSALE-sale_n.jpg').default;
import heroImg2 from './FLASHSALE-sale_n copy.jpg';

function Hero() {
  return (
    <>
  <div className="hero">
    <div className="carousel-container">
      <Carousel nextIcon={<span className="carousel-arrow">&#8250;</span>} prevIcon={<span className="carousel-arrow">&#8249;</span>}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroImg1}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroImg2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>

    
  </div>
  <div className="searchBox">
    <SearchBox />
  </div>
 
  </>
  );
}

export default Hero;
