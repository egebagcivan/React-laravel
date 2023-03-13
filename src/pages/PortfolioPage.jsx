import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import AllProjects from '../components/AllProjects/AllProjects'

export class PortfolioPage extends Component {
  componentDidMount() {
    window.scroll(0, 0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Portfolio" />
        <PageTop pageTitle="Our Portfolio" />
        <AllProjects />
        <Footer />
      </Fragment>
    )
  }
}

export default PortfolioPage