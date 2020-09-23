import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router />
      </div>
    );
  }
}

export default App;
