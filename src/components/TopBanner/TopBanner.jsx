import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import Loading from '../Loading/Loading';

export class TopBanner extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subTitle: '',
      loaderClass: "text-center",
      mainDivClass: "d-none"
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.HomeTopTitle).then(result => {
      this.setState({ title: result[0]['home_title'], subTitle: result[0]['home_subtitle'], loaderClass: "d-none", mainDivClass: "text-center" })
    }).catch(error => {
      this.setState({ title: '???', subTitle: '???' })
    });
  }
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className='topBannerOverlay'>
            <Container className='topContent'>
              <Row>
                <Col className={this.state.loaderClass}>
                  <Loading />
                </Col>
                <Col className={this.state.mainDivClass}>
                  <h1 className='topTitle'>{this.state.title}</h1>
                  <h4 className='topSubTitle'>{this.state.subTitle}</h4>
                  <Button variant="primary">Learn More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    )
  }
}

export default TopBanner;