import React from 'react';
import {Carousel} from 'react-bootstrap';

import image1 from "../Banner_1.jpg"
import image2 from "../Banner_2.jpg"
import image3 from "../Banner_3.jpg"

const CarousleContainer =() =>{
    return(
      <Carousel controls={false} fade={true} pause={false} >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carouselheading">
            <h3>Sai Yadav | Camera Rental</h3>
            <p>Phone/Whatsapp: 9014508402</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className="carouselheading">
          <h3>Sai Yadav | Camera Rental</h3>
          <p>Phone/Whatsapp: 9014508402</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="carouselheading">
          <h3>Sai Yadav | Camera Rental</h3>
          <p>Phone/Whatsapp: 9014508402</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default CarousleContainer;
