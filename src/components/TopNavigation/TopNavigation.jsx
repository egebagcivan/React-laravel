import React, { Component, Fragment } from 'react'
import { Navbar, Nav, Container, ThemeProvider } from 'react-bootstrap'
import whiteLogo from '../../asset/image/logo_white.png'
import blackLogo from '../../asset/image/logo_black.png'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

export class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: 'navTitle',
      navBarLogo: [whiteLogo],
      navBarBack: "navBackground",
      navBarItem: 'navItem',
      navVariant: 'dark'
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
        <Navbar className={this.state.navBarBack} collapseOnSelect fixed='top' expand="lg" variant={this.variant}>
          <Container>
            <Navbar.Brand className={this.state.navBarTitle} href="#home"><img src={this.state.navBarLogo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

              </Nav>
              <Nav>
                <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">SERVICE</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}

export default TopNavigation