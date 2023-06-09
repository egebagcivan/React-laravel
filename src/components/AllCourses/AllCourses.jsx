import React, { Component, Fragment } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import Loading from '../Loading/Loading';
import WentWrong from '../WentWrong/WentWrong';
import Zoom from 'react-reveal/Zoom';

export class AllCourses extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true,
      error: false
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.CourseAll).then(result => {
      if (result == null) {
        this.setState({ error: true, loading: false })
      } else {
        this.setState({ myData: result, loading: false });
      }
    }).catch(error => {
      this.setState({ error: true, loading: false })
    })
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    } else if (this.state.loading === false) {
      const MyList = this.state.myData;
      const MyView = MyList.map(MyList => {

        return <Col lg={6} md={12} sm={12}>
          <Row>
            <Col lg={6} md={6} sm={12} className="p-2" >
              <Zoom top>
                <img className="courseImg" src={MyList.small_img} alt="AllCourses" />
              </Zoom>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Zoom top>
                <h5 className="text-justify serviceName">{MyList.short_title}  </h5>
                <p className="text-justify serviceDescription">{MyList.short_description}</p>
                <Link className="courseViewMore float-left" to={"/coursedetails/" + MyList.id + "/" + MyList.short_title} >View Details</Link>
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
    } // end else
    else if (this.state.error === true) {
      return <WentWrong />
    }
  }
}

export default AllCourses