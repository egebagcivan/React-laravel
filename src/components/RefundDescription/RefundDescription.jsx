import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import reactHtmlParser from 'react-html-parser';

export class RefundDescription extends Component {
  constructor() {
    super();
    this.state = {
      RefundDescription: []
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.Information).then(result => {
      this.setState({ RefundDescription: result[0]['refund'] })
    });
  }
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} sm={12} md={12}>
              <h1 className='mt-5 serviceName'>Data Protection Principles</h1><hr />
              <p className='serviceDescription'>
                {reactHtmlParser(this.state.RefundDescription)}
              </p>

            </Col>
          </Row>
        </Container>
      </Fragment >
    )
  }
}

export default RefundDescription