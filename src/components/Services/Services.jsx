import React, { Component, Fragment } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';

export class Services extends Component {
  constructor() {
    super();
    this.state = {
      serviceData: []
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.Services).then(result => {
      this.setState({ serviceData: result })
    });
  }
  render() {
    const servicesList = this.state.serviceData;
    const myView = servicesList.map(servicesList => {
      return <Col lg={4} md={6} sm={12}>
        <div className='serviceCard text-center'>
          <img className='webIcon' src={servicesList.service_logo} alt="web" />
          <h2 className='serviceName'>{servicesList.service_name}</h2>
          <p className='serviceDescription'>{servicesList.service_description}</p>
        </div>
      </Col>
    })
    return (
      <Fragment>
        <Container className='text-center'>
          <h1 className='serviceMainTitle'>MY SERVICES</h1>
          <div className='bottom'></div>
          <Row>
            {myView}
          </Row>
        </Container>
      </Fragment >
    )
  }
}

export default Services