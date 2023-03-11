import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import TermsDescription from '../components/TermsDescription/TermsDescription'

export class TermsPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Terms & Conditions" />
        <PageTop pageTitle="Terms & Conditions" />
        <TermsDescription />
        <Footer />
      </Fragment>
    )
  }
}

export default TermsPage