import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';

import Banner from './components/Banner';
import Card from './components/Card';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

class App extends Component {

  constructor(props) {
    super(props);
    this.whoAmIRef = React.createRef();
    this.mySkillRef = React.createRef();
    this.myProjectRef = React.createRef();
    this.myCookRef = React.createRef();
    this.myContactRef = React.createRef();

    this.scrollToMyRef = this.scrollToMyRef.bind(this);
  }

   // run this method to execute scrolling. 
  scrollToMyRef = (myRef) => {
    switch(myRef) {
      case "about":
        window.scrollTo({top: this.whoAmIRef.current.offsetTop, behavior: 'smooth'});
        break;
      case "skill":
        window.scrollTo({top: this.mySkillRef.current.offsetTop, behavior: 'smooth'});
        break;
      case "project":
        window.scrollTo({top: this.myProjectRef.current.offsetTop, behavior: 'smooth'});
        break;
      case "cook":
        window.scrollTo({top: this.myCookRef.current.offsetTop, behavior: 'smooth'});
        break; 
      case "contact":
        window.scrollTo({top: this.myContactRef.current.offsetTop, behavior: 'smooth'});
        break;  
      default:                        
    }  
  };

  render(){
    return (
      <div className="wrapper">
        <Sidebar />
        <Banner scrollToMyRef={this.scrollToMyRef} />
        <div className="container">
          <div ref={this.whoAmIRef}>
            <Card content="whoAmI" />
          </div>
          <div ref={this.myProjectRef}>
            <Card content="myproject" />
          </div>
          <div ref={this.myCookRef}>
            <Card content="mycooking" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
