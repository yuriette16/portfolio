import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Banner from './components/Banner';
import Card from './components/Card';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <Banner />
        <div className="container">
          <Card content={"whoAmI"} />
          <Card content={"mySkill"}/>
        </div>  
      </div>
    );
  }
}

export default App;
