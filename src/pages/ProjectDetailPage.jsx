import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import TopNavigation from '../components/TopNavigation/TopNavigation'


class ProjectDetailPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      id: match.params.projectID
    }
  }
  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Project Details " />
        <PageTop pageTitle="Project Details" />
        <ProjectDetails
          id={this.state.id}
        />
        <Footer />
      </Fragment>
    )
  }
}

export default ProjectDetailPage