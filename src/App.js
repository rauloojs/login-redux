import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './components/Layout';
import LoginPage from './containers/LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Router>
            <Route path='/' exact component={LoginPage} />
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
