import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';

import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <Banner />
        <div className="container">
          <Card content="whoAmI" />
          <Card content="myproject" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
