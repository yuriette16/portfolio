import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';

import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <Sidebar />
        <Banner />
        <div className="container">
          <Card content="whoAmI" />
          <Card content="myproject" />
          <Card content="mycooking" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
