import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import reactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';

export class AboutDescription extends Component {
  constructor() {
    super();
    this.state = {
      AboutDescription: [],
      loading: true,
      error: false
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.Information).then(result => {
      if (result == null) {
        this.setState({ error: true })
      } else {
        this.setState({ AboutDescription: result[0]['about'], loading: false })
      }
    }).catch(error => {
      this.setState({ error: true })
    })
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    } else if (this.state.loading === false) {
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
    else if (this.state.error === true) {
      return <WentWrong />
    }
  }
}

export default AboutDescription