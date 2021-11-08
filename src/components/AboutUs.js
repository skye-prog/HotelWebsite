import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import AboutUsImg1 from "../img/about-us-img-1.jpeg";
import AboutUsImg2 from "../img/about-us-img-2.jpeg";
import AboutUsImg3 from "../img/about-us-img-3.jpeg";
import AboutUsImg4 from "../img/about-us-img-4.jpeg";
import { BsChevronDoubleRight } from "react-icons/bs";
import "./AboutUs.css";
function AboutUs() {
  return (
    <Container fluid className='justify-content-md-center AboutUs_container'>
      <Row>
        <Col md={6}>
          <div className='col-left'>
            <div className='p1'>ABOUT US </div>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='p2'>Grand Hotel </div>
            <div className='About_description'>
              We offer the best accodomation for your trip! Enjoy the spa and
              treat yourself a cup of whisky. Many room types are offered. Want
              to have an excited night? Check our ongoing events.
            </div>
            <button className='AboutUs_button'>
              READ MORE <BsChevronDoubleRight />
              <BsChevronDoubleRight />
            </button>
          </div>
        </Col>
        <Col className='justify-content-md-center' md={6}>
          <div className='col-right '>
            <img className='img1' src={AboutUsImg1} alt='img1' />
            <img className='img2' src={AboutUsImg2} alt='img2' />
            <img className='img3' src={AboutUsImg3} alt='img3' />
            <img className='img4' src={AboutUsImg4} alt='img4' />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
