import React, { Component, Fragment } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class AllCourses extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
          <h1 className='serviceMainTitle'>MY COURSES</h1>
          <div className='bottom'></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className='p-2'>
                  <img alt='Imageed' className='courseImg' src='https://img.freepik.com/free-photo/hands-close-up-co-workers-writing_1098-2513.jpg?w=2000&t=st=1677790216~exp=1677790816~hmac=68214954de486271dd4d49a004b446bc0f438469b0d885809d3cf47b461903da' />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className='serviceName text-justify'>Laravel 8</h5>
                  <p className='serviceDescription text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                  <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} className='p-2'>
                  <img alt='Imageed' className='courseImg' src='https://img.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg?w=2000&t=st=1677790219~exp=1677790819~hmac=8fb96b8c7a8dd64b0d0c5a0ddb9d228e936a453844a821d3b0729f8b4197efa5' />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className='serviceName text-justify'>Laravel 8</h5>
                  <p className='serviceDescription text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                  <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                </Col>
              </Row>

            </Col>

            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className='p-2'>
                  <img alt='Imageed' className='courseImg' src='https://img.freepik.com/free-photo/presentation-is-ready-group-people-business-conference-modern-classroom-daytime_146671-16284.jpg?w=2000&t=st=1677790221~exp=1677790821~hmac=171cd537b0b1196f64263647c6f1fde7d219f6a55a42c00ac500a76096a67194' />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className='serviceName text-justify'>Laravel 8</h5>
                  <p className='serviceDescription text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                  <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12} className='p-2'>
                  <img alt='Imageed' className='courseImg' src='https://img.freepik.com/free-photo/focused-book-group-people-business-conference-modern-classroom-daytime_146671-16265.jpg?w=2000&t=st=1677790765~exp=1677791365~hmac=e5930fa78d1740b44bac98ad1b813abe6654370fc2af11734ed13c9042a003a7' />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className='serviceName text-justify'>Laravel 8</h5>
                  <p className='serviceDescription text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                  <Link className="courseViewMore float-left" to="/coursedetails" >View Details</Link>
                </Col>
              </Row>

            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AllCourses