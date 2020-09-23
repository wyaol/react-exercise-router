import React, {Component} from 'react';
// import '../styles/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from '../components/AboutUs'
import MyProfile from '../components/MyProfile'
import Home from '../components/Home'
import Header from '../components/Header'
import Product from '../components/Product'
import Products from '../components/Products'

class App extends Component {
  render() {
    return (
      <div className="app">
          <Router>
            <Header />
            <Switch>
              <Route path='/about-us'><AboutUs /></Route>
              <Route path='/my-profile'><MyProfile /></Route>
              <Route path='/products/:id'><Product /></Route>
              <Route path='/goods'><Products /></Route>
              <Route path='/products'><Products /></Route>
              <Route path='/'><Home /></Route>
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
