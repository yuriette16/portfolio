import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Banner from './components/Banner';

class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <div className="container">
          <Banner />
        </div>  
      </div>
    );
  }
}

export default App;
