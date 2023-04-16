import React, { Component, Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import errorImg from '../../asset/image/error.svg'

export class WentWrong extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
          <Row>
            <col>
              <img className='errorIcon' src={errorImg} />
            </col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default WentWrong