import React, { Component, Fragment } from 'react'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import RestClient from '../Restapi/RestClient'
import Appurl from '../Restapi/Appurl'

class CourseDetailsPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      id: match.params.courseID,
      name: match.params.courseName,
      courseData: []
    }
  }
  componentDidMount() {
    RestClient.GetRequest(Appurl.CourseDetails + this.state.id).then(result => {
      this.setState({
        courseData: result
      })
    });
    window.scroll(0, 0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Course Details " />
        <PageTop pagetitle={this.state.name} />
        <CourseDetails courseAllData={this.state.courseData} />
        <Footer />
      </Fragment>
    )
  }
}

export default CourseDetailsPage