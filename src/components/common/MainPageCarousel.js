import React from "react";
import lol_homepage from "../leagueResults/lol-homepage.jpg";
import valorant_home from "../leagueResults/valorant_home.jpeg";
import valorant_home2 from "../leagueResults/valorant_home2.jpg";
import Carousel from "react-bootstrap/Carousel";

function MainPageCarousel() {
  return (
    <Carousel interval={2000} indicators={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={lol_homepage} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={valorant_home} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={valorant_home2} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default MainPageCarousel;
