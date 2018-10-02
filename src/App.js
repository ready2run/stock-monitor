import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Register from './Register';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;
