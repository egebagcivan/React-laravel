import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import AllCourses from '../components/AllCourses/AllCourses'

export class CoursesPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Courses" />
        <PageTop pageTitle="Our Courses" />
        <AllCourses />
        <Footer />
      </Fragment>
    )
  }
}

export default CoursesPage