import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import RestClient from '../../Restapi/RestClient';
import Appurl from '../../Restapi/Appurl';
import reactHtmlParser from 'react-html-parser';

export class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      techdesc: 'Loading...'
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.ChartData).then(result => {
      this.setState({ data: result })
    });
    RestClient.GetRequest(Appurl.HomeTechDesc).then(result => {
      this.setState({ techdesc: result[0]['tech_description'] })
    });
  }

  render() {
    const techDesc = this.state.techDesc;

    let blue = '#051b35';
    return (
      <Fragment>
        <Container className='text-center'>
          <h1 className='serviceMainTitle'>TECHNOLOGY USED</h1>
          <div className='bottom'></div>
          <Row>
            <Col style={{ height: '300px' }} lg={6} md={12} sm={12}>
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Technology" />
                  <Tooltip />
                  <Bar fill={blue} dataKey="Projects">
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className='text-justify serviceDescription'>
                {reactHtmlParser(this.state.techdesc)}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Analysis