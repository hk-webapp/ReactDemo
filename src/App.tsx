import "bootstrap/scss/bootstrap.scss"
import * as $ from 'jquery'
import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './App.scss';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import OfflineComponent from './components/OfflineComponent'
import Pages from './components/Pages'
import PageViewer from './components/PageViewer';
import TimeComponent from './components/TimeComponent'

class App extends React.Component {
  private menuDropdownRef: any;
  private menuIsOpen: boolean = false;
  constructor(props: any) {
    super(props);
    this.menuOnClick = this.menuOnClick.bind(this);
    this.menuDropdownRef = React.createRef();
  }

  public menuOnClick() {
    if (!this.menuIsOpen) {
      $(this.menuDropdownRef.current).show();
      this.menuIsOpen = true;
    }
    else {
      $(this.menuDropdownRef.current).hide();
      this.menuIsOpen = false;
    }
  }

  public render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React App Demo</h1>
            <div className="title">
              <div className="app-time">
                <TimeComponent />
              </div>
            </div>
          </header>
          <div className="app-menubar">
            <Navbar className="navbar navbar-inverse" expand="md" bg="drak" variant="dark">
              <Navbar.Toggle aria-controls="myNavbar" />
              <Navbar.Collapse className="navbar-right" id="myNavbar">
                <Nav className="mr-auto">
                  <Nav.Item ><NavLink to="/Home" activeClassName="active-page" className="nav-link ">Home</NavLink></Nav.Item>
                  <Nav.Item ><NavLink to="/ContactUs" activeClassName="active-page" className="nav-link">Contact Us</NavLink></Nav.Item>
                  <Nav.Item ><NavLink to="/AboutUs" activeClassName="active-page" className="nav-link">About Us</NavLink></Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="pages-container">
            <Route exact={true} path="/" component={Pages} />
            <Route path="/Home" component={Pages} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Page/:Name" component={PageViewer} />
          </div>
          <OfflineComponent />
          <div className="App-footer">@Copy 2019 (version 1.0)</div>
        </div>
      </Router>

    );
  }
}

export default App;
