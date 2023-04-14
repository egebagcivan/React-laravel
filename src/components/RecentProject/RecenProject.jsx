import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import Loading from '../Loading/Loading';

export class RecenProject extends Component {
  constructor() {
    super();
    this.state = {
      recentProjectData: [],
      loading: true
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.ProjectHome).then(result => {
      this.setState({ recentProjectData: result, loading: false })
    });
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    } else {
      const recentProjectList = this.state.recentProjectData;
      const myView = recentProjectList.map(recentProjectList => {
        return <Col lg={4} md={6} sm={12}>
          <Card className='projectCard'>
            <Card.Img variant="top" src={recentProjectList.img_one} />
            <Card.Body>
              <Card.Title className='serviceName'>{recentProjectList.project_name}</Card.Title>
              <Card.Text className='serviceDescription'>
                {recentProjectList.project_description}
              </Card.Text>
              <Button variant="primary"><Link className="link-style" to={"/projectdetails/" + recentProjectList.id + "/" + recentProjectList.project_name}> View More </Link>  </Button>
            </Card.Body>
          </Card>
        </Col>
      })

      return (
        <Fragment>
          <Container className='text-center'>
            <h1 className='serviceMainTitle'>RECENT PROJECTS</h1>
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

export default RecenProject