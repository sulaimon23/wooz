

import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import Image from 'react-bootstrap'

import slider1 from '../../assets/img/slider/1.jpg';
import slider2 from '../../assets/img/slider/2.jpg';
import slider3 from '../../assets/img/slider/3.jpg';

class SliderCarouselSections extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slider1} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slider2} alt="Third slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={slider3} alt="Third slide" />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default SliderCarouselSections;
