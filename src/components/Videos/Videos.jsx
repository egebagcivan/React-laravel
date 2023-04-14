import React, { Component, Fragment } from 'react'
import { Row, Col, Container, Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { Player, BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import Loading from '../Loading/Loading';

export class Videos extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      video_url: "",
      video_description: "",
      loading: true
    }
  }
  handleModalClose = () => {
    this.setState({ show: false })
  }
  handleModalOpen = () => {
    this.setState({ show: true })
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.HomeVideo).then(result => {
      this.setState({
        video_description: result[0]['video_description'],
        video_url: result[0]['video_url'],
        loading: false
      })
    });
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    } else {
      return (
        <Fragment>
          <Container className='text-center'>
            <h1 className='serviceMainTitle'>OUR VIDEOS</h1>
            <div className='bottom'></div>
            <Row>
              <Col lg={6} md={6} sm={12} className='videoText'>
                {this.state.video_description}
              </Col>

              <Col lg={6} md={6} sm={12} className='videoCard'>
                <FontAwesomeIcon onClick={this.handleModalOpen} className='iconProject' icon={faVideoSlash} />
              </Col>
            </Row>
          </Container>
          <Modal size='lg' show={this.state.show} onHide={this.handleModalClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <Player src={this.state.video_url}>
                <BigPlayButton position="center" />
              </Player>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleModalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Fragment>
      )
    }
  }
}

export default Videos