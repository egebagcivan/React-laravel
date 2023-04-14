import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import Loading from '../Loading/Loading';

class AllProjects extends Component {
  constructor() {
    super();
    this.state = {
      allProjectData: [],
      loading: true
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.ProjectAll).then(result => {
      this.setState({ allProjectData: result, loading: false })
    });
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    } else {
      const allProjectDataList = this.state.allProjectData;
      const myView = allProjectDataList.map(allProjectDataList => {
        return <Col lg={4} md={6} sm={12}>
          <Card className='projectCard'>
            <Card.Img variant="top" src={allProjectDataList.img_one} />
            <Card.Body>
              <Card.Title className='serviceName'>{allProjectDataList.project_name}</Card.Title>
              <Card.Text className='serviceDescription'>
                {allProjectDataList.project_description}
              </Card.Text>
              <Button variant="primary"><Link className="link-style" to={"/projectdetails/" + allProjectDataList.id + "/" + allProjectDataList.project_name}> View More </Link>  </Button>
            </Card.Body>
          </Card>
        </Col>
      })

      return (
        <Fragment>
          <Container className='text-center'>
            <h1 className='serviceMainTitle'>ALL PROJECTS</h1>
            <div className='bottom'></div>
            <Row>
              {myView}
            </Row>
          </Container>
        </Fragment>
      )
    } //end else
  }
}

export default AllProjects