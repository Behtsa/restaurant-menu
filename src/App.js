import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//Elements
import Menu from './components/Menu.js'
import Order from './components/Order'

class App extends Component {
  render() {
    return (
      <div className="row">
        <Menu />
        <Order />
      </div>
    );
  }
}

export default App;