import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomePageFooter.css";
function HomePageFooter() {
  return (
    <div>
      <Container fluid className='Footer_Container'>
        <Row xs={1} sm={3} md={3} lg={3}>
          <Col className='Footer_Container_firstColumn'>
            <div className='Footer_Container__Header'> 24 Hours Support </div>
            <div className='EmailFlex Footer_Container__description'>
              <div>
                <i class='fas fa-envelope'></i>
              </div>
              <div>:GrandHotel@gmail.com</div>
            </div>
            <div className='Footer_Container__description'>
              <i class='fas fa-phone-square-alt'></i> :+610426976089
            </div>
            <div className='Footer_Container__description'>
              <i class='fas fa-map-marker-alt'></i> : 29/50 Henry Kendall St,
              Franklin,2913
            </div>
          </Col>
          <Col className='Footer_Container_secondColumn'>
            <div className='Footer_Container__Header'>Follow Us</div>
            <div className='Footer-icons'>
              <div className='facebook_icons'>
                <i class='fab fa-facebook'></i>
              </div>
              <div className='facebook_icons'>
                <i class='fab fa-twitter'></i>
              </div>
              <div>
                <i class='fab fa-instagram'></i>
              </div>
            </div>
          </Col>
          <Col>
            <div className='Footer_Container__Header'> Our NewsLetter</div>
            <div className='Footer_Container__description'>
              Sign up for special Offers
            </div>
            <div className='Footer-subsribe'>
              <input type='email' placeholder='E-mail'></input>
              <button>Subsribe</button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='Footer_copyright'>
        @copyright{new Date().getFullYear()} Skye - All Rights Reserved
      </div>
    </div>
  );
}

export default HomePageFooter;
