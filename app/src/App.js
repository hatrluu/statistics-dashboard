import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Contacts from "./pages/Contacts";
import EditContact from "./pages/EditContact";
import AddContact from "./pages/AddContact";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          
          <div className="container">
          <Provider>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/edit/:id" component={EditContact} />
            <Route exact path="/add" component={AddContact} />
            </Provider>
          </div>
          
        </div>
      </Router>
  );
}

export default App;
