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
      <div>
        <Menu data = {data.breakfast} />
        <Order />
      </div>
    );
  }
}

export default App;