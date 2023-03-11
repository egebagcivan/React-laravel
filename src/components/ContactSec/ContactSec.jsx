import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-bootstrap/Form';

export class ContactSec extends Component {
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
              </Form>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <h1 className='serviceName'>Discuss Now</h1>
              <p className='serviceDescription'>
                <FontAwesomeIcon icon={faEarth} />123, Main Street, Your City, USA <br />
                <FontAwesomeIcon icon={faEnvelope} />Email: example@example.com <br />
                <FontAwesomeIcon icon={faPhone} />Phone: +880 123 456 789
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ContactSec