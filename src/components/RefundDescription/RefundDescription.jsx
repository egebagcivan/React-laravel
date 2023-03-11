import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class RefundDescription extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} sm={12} md={12}>
              <h1 className='mt-5 serviceName'>Data Protection Principles</h1><hr />
              <p className='serviceDescription'>We promise to follow the following data protection principles:
                <ul>
                  <li>Processing is lawful, fair, transparent. Our Processing activities have lawful grounds. We always consider your rights before Processing Personal Data. We will provide you information regarding Processing upon request.</li>
                  <li>Processing is limited to the purpose. Our Processing activities fit the purpose for which Personal Data was gathered.</li>
                  <li>Processing is done with minimal data. We only gather and Process the minimal amount of Personal Data required for any purpose.</li>
                  <li>Processing is limited with a time period. We will not store your personal data for longer than needed.</li>
                  <li>We will do our best to ensure the accuracy of data.</li>
                  <li>We will do our best to ensure the integrity and confidentiality of data.</li>
                </ul>
              </p>

            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default RefundDescription