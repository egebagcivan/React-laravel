import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import RefundDescription from '../components/RefundDescription/RefundDescription'

export class RefundPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Refund Policy" />
        <PageTop pageTitle="Refund Policy" />
        <RefundDescription />
        <Footer />
      </Fragment>
    )
  }
}

export default RefundPage