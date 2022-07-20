import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/img/slider3.jpg";
import slider2 from "../../assets/img/slider1.jpg";
import "./HomePageBanner.css";
const HomePageBanner = () => {
  return (
    <div className="carosel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "560px" }}
            src={slider1}
            alt="First slide"
          />
          <div className="carosel-container">
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "560px" }}
            src={slider2}
            alt="Second slide"
          />

          <div className="carosel-container">
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "560px" }}
            src={slider1}
            alt="Third slide"
          />
          <div className="carosel-container">
            {" "}
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePageBanner;
