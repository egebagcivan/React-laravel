import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEarth } from '@fortawesome/free-solid-svg-icons'


export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='footerSection'>
          <Row>
            <Col className='p-5 text-center' lg={3} md={6} sm={12}>
              <h2 className='footerName text-center'>Follow Us</h2>
              <div className='socialContainer'>
                <a className='facebook social' href='#'>
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a className='youtube social' href='#'>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a className='twitter social' href='#'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </Col>

            <Col className='p-5 text-justify' lg={3} md={6} sm={12}>
              <h2 className='footerName'>Address</h2>
              <p className='footerDescription'>
                <FontAwesomeIcon icon={faEarth} />123, Main Street, Your City, USA <br />
                <FontAwesomeIcon icon={faEnvelope} />Email: example@example.com <br />
                <FontAwesomeIcon icon={faPhone} />Phone: +880 123 456 789
              </p>
            </Col>

            <Col className='p-5 text-justify' lg={3} md={6} sm={12}>
              <h2 className='footerName'>Information</h2>
              <a className='footerLink' href="/">About Me</a><br />
              <a className='footerLink' href="/">Company Profile</a><br />
              <a className='footerLink' href="/">Contact Us</a>
            </Col>

            <Col className='p-5 text-justify' lg={3} md={6} sm={12}>
              <h2 className='footerName'>Policy</h2>
              <a className='footerLink' href="/">Refund Policy</a><br />
              <a className='footerLink' href="/">Terms & Conditions</a><br />
              <a className='footerLink' href="/">Privacy Policy</a>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className='text-center copyRightSection'>
          <a className='copyRightLink' href="#">© Ege Bağçıvan 2023</a>
        </Container>
      </Fragment >
    )
  }
}

export default Footer