import React, { Component, Fragment } from 'react'
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecenProject from "../components/RecentProject/RecenProject";
import Courses from "../components/Courses/Courses";
import Videos from "../components/Videos/Videos";
import ClientReview from "../components/ClientReview/ClientReview";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation title="Home" />
        <TopBanner />
        <Services />
        <Analysis />
        <Summary />
        <RecenProject />
        <Courses />
        <Videos />
        <ClientReview />
        <AboutMe />
        <Footer />
      </Fragment>
    )
  }
}

export default HomePage