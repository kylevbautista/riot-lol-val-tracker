import React from "react";
import lol_homepage from "../leagueResults/lol-homepage.jpg";
import valorant_home from "../leagueResults/valorant_home.jpeg";
import Carousel from "react-bootstrap/Carousel";
import { Zoom } from "@mui/material";

function MainPageCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={valorant_home} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={lol_homepage} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={lol_homepage} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default MainPageCarousel;
