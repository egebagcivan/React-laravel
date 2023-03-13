import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CoursesPage from '../pages/CoursesPage';
import HomePage from '../pages/HomePage'
import PortfolioPage from '../pages/PortfolioPage';
import ServicesPage from '../pages/ServicesPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import CourseDetailsPage from '../pages/CourseDetailsPage';

export class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/service" component={ServicesPage} />
          <Route exact path="/course" component={CoursesPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/refund" component={RefundPage} />
          <Route exact path="/terms" component={TermsPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/projectdetails" component={ProjectDetailPage} />
          <Route exact path="/coursedetails" component={CourseDetailsPage} />

        </Switch>
      </Fragment>
    )
  }
}

export default AppRouter