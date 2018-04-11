import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data';
//Elements
import Menu from './components/Menu.js';
import Order from './components/Order';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { order:[],
      food : 
    }
  }

  upDateOrder(orders){
    this.setState({order:orders})   
    console.log(this.state);
    
  }



  render() {
    return (
      <div className = " row">
        <Menu order={this.state.order} breakfast={data.breakfast} lunch={data.lunch} hamburguers={data.hamburguers} beverages={data.beverages} upDateOrder={this.upDateOrder.bind(this)}/>
        <Order order ={this.state.order } className ="col-md-4 col-lg-4 offset-md-8 offset-lg-8"/>
      </div>
    );
  }
}

export default App;