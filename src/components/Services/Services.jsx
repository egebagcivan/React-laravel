import React, { Component, Fragment } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import designIcon from '../../asset/image/design.png'
import ecommerceIcon from '../../asset/image/ecommerce.png'
import webIcon from '../../asset/image/web.png'

export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
          <h1 className='serviceMainTitle'>MY SERVICES</h1>
          <div className='bottom'></div>
          <Row>
            <Col lg={4} md={6} sm={12}> 
            <div className='serviceCard text-center'>
            <img className='ecommerceIcon' src={ecommerceIcon} alt="ecommerce"/>
            <h2 className='serviceName'>Ecommerce</h2>
            <p className='serviceDescription'>I will design and develop</p>
            </div>
            </Col>
            <Col lg={4} md={6} sm={12}> 
            <div className='serviceCard text-center'>
            <img className='designIcon' src={designIcon} alt="design"/>
            <h2 className='serviceName'>Web Design</h2>
            <p className='serviceDescription'>I will web design</p>
            </div>
            </Col>    
            <Col lg={4} md={6} sm={12}> 
            <div className='serviceCard text-center'>
            <img className='webIcon' src={webIcon} alt="web"/>
            <h2 className='serviceName'>Web Development</h2>
            <p className='serviceDescription'>I will do web development</p>
            </div>
            </Col>            
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services