import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export class RecenProject extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
          <h1 className='serviceMainTitle'>RECENT PROJECTS</h1>
          <div className='bottom'></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className='projectCard'>
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg?w=2000&t=st=1677789215~exp=1677789815~hmac=08204ee03c03151da14d4d22e7dbef819fbebbd5e73c90d33f044f257287fd53" />
                <Card.Body>
                  <Card.Title className='serviceName'>Project One</Card.Title>
                  <Card.Text className='serviceDescription'>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary"><Link className="link-style" to="/projectdetails"> View More </Link>  </Button>
                </Card.Body>
              </Card>            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className='projectCard'>
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=2000&t=st=1677789383~exp=1677789983~hmac=001498364443eae1c4cf5516086c5b383bc322cb8fded2d9fb3f5c625969ea20" />
                <Card.Body>
                  <Card.Title className='serviceName'>Project Two</Card.Title>
                  <Card.Text className='serviceDescription'>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary"><Link className="link-style" to="/projectdetails"> View More </Link>  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className='projectCard'>
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg?w=2000&t=st=1677789412~exp=1677790012~hmac=263d5ceb8cb5b6231c3563141f98ac156b5dc2590732ecfb767a7c1fb13a3ece" />
                <Card.Body>
                  <Card.Title className='serviceName'>Project Three</Card.Title>
                  <Card.Text className='serviceDescription'>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary"><Link className="link-style" to="/projectdetails"> View More </Link>  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default RecenProject