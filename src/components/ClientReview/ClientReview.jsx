import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
export class ClientReview extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='sliderBack text-center'>
          <h1 className='reviewMainTitle'>OUR VIDEOS</h1>
          <div className='reviewBottom'></div>
          <Row className='text-center justify-content-center'>
            <Col lg={6} md={6} sm={12}>
              <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                navigation={true}
                pagination={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide><img className='circleImg' src='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?w=2000&t=st=1678309305~exp=1678309905~hmac=6fd53b5498c1c4b6a250886466cf0a76ff881abf4ca58943bd896aac2651eb0a' alt='reviewImg' />
                  <h2 className='reviewName'>Ege Bağçıvan1</h2>
                  <p className='reviewDescription'>I will design and develop Lorem Ipsum</p></SwiperSlide>
                <SwiperSlide><img className='circleImg' src='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?w=2000&t=st=1678309305~exp=1678309905~hmac=6fd53b5498c1c4b6a250886466cf0a76ff881abf4ca58943bd896aac2651eb0a' alt='reviewImg' />
                  <h2 className='reviewName'>Ege Bağçıvan2</h2>
                  <p className='reviewDescription'>I will design and develop Lorem Ipsum</p></SwiperSlide>
                <SwiperSlide><img className='circleImg' src='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?w=2000&t=st=1678309305~exp=1678309905~hmac=6fd53b5498c1c4b6a250886466cf0a76ff881abf4ca58943bd896aac2651eb0a' alt='reviewImg' />
                  <h2 className='reviewName'>Ege Bağçıvan3</h2>
                  <p className='reviewDescription'>I will design and develop Lorem Ipsum</p></SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </Fragment >
    )
  }
}

export default ClientReview