import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';

class AllProjects extends Component {
  constructor() {
    super();
    this.state = {
      allProjectData: []
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.ProjectAll).then(result => {
      this.setState({ allProjectData: result })
    });
  }
  render() {
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
            <Button variant="primary"><Link className="link-style" to={"/projectdetails/" + allProjectDataList.id}> View More </Link>  </Button>
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
  }
}

export default AllProjects