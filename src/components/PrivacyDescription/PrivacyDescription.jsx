import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import reactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';


export class PrivacyDescription extends Component {
  constructor() {
    super();
    this.state = {
      PrivacyDescription: [],
      loading: true,
      error: false
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.Information).then(result => {
      if (result == null) {
        this.setState({ error: true })
      } else {
        this.setState({ PrivacyDescription: result[0]['privacy'], loading: false })
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
    else if (this.state.error === true) {
      return <WentWrong />
    }
  }
}

export default PrivacyDescription