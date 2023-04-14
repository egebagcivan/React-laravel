import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import reactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';

export class TermsDescription extends Component {
  constructor() {
    super();
    this.state = {
      TermsDescription: [],
      loading: true
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.Information).then(result => {
      this.setState({ TermsDescription: result[0]['terms'], loading: false })
    });
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    } else {
      return (
        <Fragment>
          <Container>
            <Row>
              <Col lg={12} sm={12} md={12}>
                <h1 className='mt-5 serviceName'>TERMS OF SERVICES</h1><hr />
                <p className='serviceDescription'>
                  {reactHtmlParser(this.state.TermsDescription)}
                </p>
              </Col>
            </Row>
          </Container >
        </Fragment >
      )
    }
  }
}

export default TermsDescription