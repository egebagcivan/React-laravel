import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import reactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';


export class PrivacyDescription extends Component {
  constructor() {
    super();
    this.state = {
      PrivacyDescription: [],
      loading: true
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.Information).then(result => {
      this.setState({ PrivacyDescription: result[0]['privacy'], loading: false })
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
                <h1 className='mt-5 serviceName'>Data Protection Principles</h1><hr />
                <p className='serviceDescription'> Data Subject's Rights
                  {reactHtmlParser(this.state.PrivacyDescription)}
                </p>

              </Col>
            </Row>
          </Container>
        </Fragment >
      )
    }
  }
}

export default PrivacyDescription