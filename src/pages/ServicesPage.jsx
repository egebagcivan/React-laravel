import React, { Component, Fragment } from 'react'
import ContactSec from '../components/ContactSec/ContactSec'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import Services from '../components/Services/Services'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export class ServicesPage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Services" />
        <PageTop pageTitle="Our Services" />
        <Services />
        <ContactSec />
        <Footer />

      </Fragment>
    )
  }
}

export default ServicesPage