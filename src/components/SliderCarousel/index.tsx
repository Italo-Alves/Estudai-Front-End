import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

const images = [
  {
    name: "Image 1",
    url:
      "https://cdn.pixabay.com/photo/2015/05/15/14/38/computer-768608_960_720.jpg",
  },

  {
    name: "Image 2",
    url:
      "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",
  },

  {
    name: "Image 3",
    url:
      "https://cdn.pixabay.com/photo/2015/03/26/09/40/keyboard-690066_960_720.jpg",
  },

  {
    name: "Image 4",
    url:
      "https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714_960_720.jpg",
  },
];

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      arrows: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      variableWidth: false,
      className: "slides",
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          {images.map((image, id) => {
            return (
              <div key={id}>
                <img
                  width="100%"
                  src={image.url}
                  alt="Images"
                  className="img-fluid"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
