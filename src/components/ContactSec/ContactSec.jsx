import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';

export class ContactSec extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      email: "",
      phone: ""
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.FooterData).then(result => {
      this.setState({
        address: result[0]['address'],
        email: result[0]['email'],
        phone: result[0]['phone']
      })
    });
  }
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className='serviceName'>Quick Connect</h1>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" placeholder="Enter Your Message" rows={3} />
                </Form.Group>
                <Button onClick={this.sendContact} variant="primary" >
                  Submit
                </Button>
              </Form>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <h1 className='serviceName'>Discuss Now</h1>
              <p className='serviceDescription'>
                <FontAwesomeIcon icon={faEarth} />{this.state.address}<br />
                <FontAwesomeIcon icon={faEnvelope} />{this.state.email}<br />
                <FontAwesomeIcon icon={faPhone} />{this.state.phone}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ContactSec