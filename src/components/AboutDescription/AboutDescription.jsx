import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import reactHtmlParser from 'react-html-parser';

export class AboutDescription extends Component {
  constructor() {
    super();
    this.state = {
      AboutDescription: []
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.Information).then(result => {
      this.setState({ AboutDescription: result[0]['about'] })
    });
  }
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
          <Row>
            <Col sm={12} lg={12} md={12}>
              {reactHtmlParser(this.state.AboutDescription)}
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AboutDescription