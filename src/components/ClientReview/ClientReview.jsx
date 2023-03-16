import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';

export class ClientReview extends Component {
  constructor() {
    super();
    this.state = {
      ClientReviewData: []
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.ClientReview).then(result => {
      this.setState({ ClientReviewData: result })
    });
  }
  render() {
    const ClientReviewList = this.state.ClientReviewData;
    const myView = ClientReviewList.map(ClientReviewList => {
      return <SwiperSlide><img className='circleImg' src={ClientReviewList.client_image} alt='reviewImg' />
        <h2 className='reviewName'>{ClientReviewList.client_title}</h2>
        <p className='reviewDescription'>{ClientReviewList.client_description}</p></SwiperSlide>
    })
    return (
      <Fragment>
        <Container fluid={true} className='sliderBack text-center'>
          <h1 className='reviewMainTitle'>CLIENT REVIEWS</h1>
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
                {myView}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </Fragment >
    )
  }
}

export default ClientReview