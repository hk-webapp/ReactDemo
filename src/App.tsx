import "bootstrap/scss/bootstrap.scss"
import * as $ from 'jquery'
import * as React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
      <Router basename="/ReactSampleDemo">

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React Sample Demo</h1>
            <div className="title">
              <div className="app-time">
                <TimeComponent />
              </div>
            </div>
          </header>
          <div className="app-menubar ">
            <div className="menu-icon " onClick={this.menuOnClick}>.</div>
            <div className="row" ref={this.menuDropdownRef}>
              <div className="col-2">
                <Link to="/" >Home</Link>
              </div>
              <div className="col-2">
                <Link to="/ContactUs" >Contact us</Link></div>
              <div className="col-2">
                <Link to="/AboutUs" >About us</Link></div>
            </div>
          </div>
          <div className="pages-container">
            <Route exact={true} path="/" component={Pages} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Page/:Name" component={PageViewer} />
          </div>
          <OfflineComponent />
          <div className="App-footer">@Copy right</div>
        </div>
      </Router>

    );
  }
}

export default App;
