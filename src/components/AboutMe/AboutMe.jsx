import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import face from '../../asset/image/face.png'
import { init } from 'ityped'
import Flip from 'react-reveal/Flip';

export class AboutMe extends Component {
  componentDidMount() {
    const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: false, strings: ['Developer!', 'Software Engineer!'] })
  }
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
          <h1 className='serviceMainTitle'>ABOUT ME</h1>
          <div className='bottom'></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Flip top>
                <div className="aboutMeImage">
                  <img className="aboutImg" src={face} />
                </div>
              </Flip>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Flip top>
                <div className="aboutMeBody">
                  <h2 className="aboutMeDetails">Hi There, I'm</h2>
                  <h2 className="aboutMeTitle">Ege Bağçıvan</h2>
                  <h3 className="aboutMeDetails">Work as <span id="myElement"> </span> </h3>
                </div>
              </Flip>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AboutMe