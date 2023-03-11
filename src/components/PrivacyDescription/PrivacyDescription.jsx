import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class PrivacyDescription extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} sm={12} md={12}>
              <h1 className='mt-5 serviceName'>Data Protection Principles</h1><hr />
              <p className='serviceDescription'> Data Subject's Rights
                <ul>
                  <li>Right to information – meaning you have to right to know whether your Personal Data is being processed; what data is gathered, from where it is obtained and why and by whom it is processed.</li>
                  <li>Right to access – meaning you have the right to access the data collected from/about you. This includes your right to request and obtain a copy of your Personal Data gathered.</li>
                  <li>Right to rectification – meaning you have the right to request rectification or erasure of your Personal Data that is inaccurate or incomplete.</li>
                  <li>Right to erasure – meaning in certain circumstances you can request for your Personal Data to be erased from our records.</li>
                  <li>Right to restrict processing – meaning where certain conditions apply, you have the right to restrict the Processing of your Personal Data.</li>
                  <li>Right to object to processing – meaning in certain cases you have the right to object to Processing of your Personal Data, for example in the case of direct marketing.</li>
                  <li>Right to object to automated Processing – meaning you have the right to object to automated Processing, including profiling; and not to be subject to a decision based solely on automated Processing. This right you can exercise whenever there is an outcome of the profiling that produces legal effects concerning or significantly affecting you.</li>
                  <li>Right to data portability – you have the right to obtain your Personal Data in a machine-readable format or if it is feasible, as a direct transfer from one Processor to another.</li>
                  <li>Right to lodge a complaint – in the event that we refuse your request under the Rights of Access, we will provide you with a reason as to why. If you are not satisfied with the way your request has been handled please contact us.</li>
                </ul>
              </p>

            </Col>
          </Row>
        </Container>
      </Fragment >
    )
  }
}

export default PrivacyDescription