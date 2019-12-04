import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';

// Pages
import Users from './pages/Users'
import Roles from './pages/Roles'
import Entitlement from './pages/Entitlement'
import Applications from './pages/Applications'
import Requests from './pages/Requests'
import Certifications from './pages/Certifications'
import AccessPolicy from './pages/AccessPolicy'

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import axios from 'axios';

export const axiosInst = axios.create({
    baseURL:'http://localhost:8080',
    timeout: 1000
})
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      branding: 'Users'
    }
    this.setBranding = this.setBranding.bind(this);
  };
  setBranding(brand) {
    this.setState({
      branding: brand
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="row no-gutters">
            <Sidebar
              headerBranding={this.setBranding}
            />
            <main className="col p-0" role="main">
              <Header branding={this.state.branding} />
              <Provider>
                <Route exact path="/(|users)" component={Users} />
                <Route exact path="/roles" component={Roles} />
                <Route exact path="/entitlement" component={Entitlement} />
                <Route exact path="/applications" component={Applications} />
                <Route exact path="/requests" component={Requests} />
                <Route exact path="/certifications" component={Certifications} />
                <Route exact path="/access-policy" component={AccessPolicy} />
              </Provider>
            </main>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
