import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//Elements
import Order from './components/Order'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Order/>
      </div>
    );
  }
}

export default App;