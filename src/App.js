import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data';
//Elements
import Menu from './components/Menu.js';
import Order from './components/Order';


class App extends Component {
  render() {
    return (
      <div className = " row">
        <Menu breakfast = {data.breakfast} lunch = {data.lunch} hamburguers = {data.hamburguers} beverages = {data.beverages}/>
        <Order className ="col-md-4 col-lg-4 offset-md-8 offset-lg-8"/>
      </div>
    );
  }
}

export default App;