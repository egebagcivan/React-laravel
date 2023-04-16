import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Link } from "react-router-dom";
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong'

export class Footer extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      email: "",
      phone: "",
      facebook: "",
      youtube: "",
      twitter: "",
      footerCredit: "",
      loaderClass: "p-5 text-justify",
      mainDivClass: "d-none",
      error: false
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.FooterData).then(result => {
      if (result == null) {
        this.setState({ error: true })
      } else {
        this.setState({
          address: result[0]['address'],
          email: result[0]['email'],
          phone: result[0]['phone'],
          facebook: result[0]['facebook'],
          youtube: result[0]['youtube'],
          twitter: result[0]['twitter'],
          footerCredit: result[0]['footer_credit'],
          loaderClass: "d-none",
          mainDivClass: "p-5 text-justify"
        })
      }
    }).catch(error => {
      this.setState({ error: true })
    })
  }
  render() {
    if (this.state.error === false) {
      return (
        <Fragment>
          <Container fluid={true} className='footerSection'>
            <Col className={this.state.loaderClass}>
              <Loading />
            </Col>
            <Row>
              <Col className='p-5 text-center' lg={3} md={6} sm={12}>
                <h2 className='footerName text-center'>Follow Us</h2>
                <div className='socialContainer'>
                  <a className='facebook social' href={this.state.facebook}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a className='youtube social' href={this.state.youtube}>
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a className='twitter social' href={this.state.twitter}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </Col>

              <Col className={this.state.mainDivClass} lg={3} md={6} sm={12}>
                <h2 className='footerName'>Address</h2>
                <p className='footerDescription'>
                  <FontAwesomeIcon icon={faEarth} />{this.state.address}<br />
                  <FontAwesomeIcon icon={faEnvelope} />{this.state.email}<br />
                  <FontAwesomeIcon icon={faPhone} />{this.state.phone}
                </p>
              </Col>

              <Col className={this.state.mainDivClass} lg={3} md={6} sm={12}>
                <h2 className='footerName'>Information</h2>
                <Link className='footerLink' to="/about">About Me</Link><br />
                <Link className='footerLink' to="/about">Company Profile</Link><br />
                <Link className='footerLink' to="/contact">Contact Us</Link>
              </Col>

              <Col className={this.state.mainDivClass} lg={3} md={6} sm={12}>
                <h2 className='footerName'>Policy</h2>
                <Link className='footerLink' to="/refund">Refund Policy</Link><br />
                <Link className='footerLink' to="/terms">Terms & Conditions</Link><br />
                <Link className='footerLink' to="/privacy">Privacy Policy</Link>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className='text-center copyRightSection'>
            <a className='copyRightLink' href="/">{this.state.footerCredit}</a>
          </Container>
        </Fragment >
      )
    } //end if
    else if (this.state.error === true) {
      return <WentWrong />
    }
  }
}

export default Footer