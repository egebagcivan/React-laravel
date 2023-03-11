import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class TermsDescription extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} sm={12} md={12}>
              <h1 className='mt-5 serviceName'>TERMS OF SERVICES</h1><hr />
              <p className='serviceDescription'>1. Terms
                By accessing this website, you are agreeing to be bound by these web site Terms and Conditions of Use, all contextual laws, and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                <br /><br />
                2. Use License
                Permission is granted to temporarily download one copy of the materials (information or software) ege website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                modify or copy the materials;
                use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
                attempt to decompile or reverse engineer any software contained on ege’s website;
                remove any copyright or other proprietary notations from the materials; or
                transfer the materials to another person or “mirror” the materials on any other server.
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by ege  at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </Col>
          </Row>
        </Container >
      </Fragment >
    )
  }
}

export default TermsDescription