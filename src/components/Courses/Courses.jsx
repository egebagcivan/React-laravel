import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';

class Courses extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.CourseHome).then(result => {
      this.setState({ myData: result, loading: false });
    })
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    } else {
      const MyList = this.state.myData;
      const MyView = MyList.map(MyList => {

        return <Col lg={6} md={12} sm={12}>
          <Row>
            <Col lg={6} md={6} sm={12} className="p-2" >
              <Zoom top>
                <img className="courseImg" src={MyList.small_img} alt="small img" />
              </Zoom>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Zoom top>
                <h5 className="text-justify serviceName">{MyList.short_title}  </h5>
                <p className="text-justify serviceDescription">{MyList.short_description}</p>
                <Link className="courseViewMore float-left" to={"/coursedetails/" + MyList.id + "/" + MyList.short_title}>View Details</Link>
              </Zoom>
            </Col>
          </Row>
        </Col>
      })
      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">MY COURSES</h1>
            <div className="bottom"></div>
            <Row>
              {MyView}
            </Row>
          </Container>
        </Fragment>
      )
    }
  }
}
export default Courses