import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import whiteLogo from '../../asset/image/logo_white.png'
import blackLogo from '../../asset/image/logo_black.png'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

export class TopNavigation extends Component {
  constructor(props) {
    super();
    this.state = {
      navBarTitle: 'navTitle',
      navBarLogo: [whiteLogo],
      navBarBack: "navBackground",
      navBarItem: 'navItem',
      navVariant: 'dark',
      pageTitle: props.title
    }
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ navBarTitle: 'navTitleScroll', navBarLogo: [blackLogo] })
      this.setState({ navBarTitle: 'navTitleScroll', navBarLogo: [blackLogo], navBarBack: 'navBackgroundScroll', navBarItem: 'navItemScroll', navVariant: 'light' })

    } else if (window.scrollY < 100) {

      this.setState({ navBarTitle: 'navTitle', navBarLogo: [whiteLogo] })
      this.setState({ navBarTitle: 'navTitle', navBarLogo: [whiteLogo], navBarBack: 'navBackground', navBarItem: 'navItem', navVariant: 'dark' })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar className={this.state.navBarBack} collapseOnSelect fixed='top' expand="lg" variant={this.navVariant}>
          <Container>
            <Navbar.Brand className={this.state.navBarTitle}><NavLink to="/"><img src={this.state.navBarLogo} alt="Logo" /></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

              </Nav>
              <Nav>
                <Nav.Link><NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/service">SERVICE</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/course">COURSES</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                <Nav.Link><NavLink exact activeStyle={{ color: '#ffd900' }} className={this.state.navBarItem} to="/contact">CONTACT US</NavLink></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment >
    )
  }
}

export default TopNavigation