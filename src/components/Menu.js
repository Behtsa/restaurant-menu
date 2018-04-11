import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Dishes from './Dishes.js'
import Test from './Test'
import { Route, Switch, Link } from 'react-router-dom';


export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.breakfast = props.breakfast;
    this.lunch = props.lunch;
    this.hamburguers = props.hamburguers;
    this.beverages = props.beverages;
  }
// <Dishes order={this.props.order} food = {this.breakfast} />
  render() {
    return (
      <div className="col-lg-8">
        <Nav tabs className="row">
          <NavItem className="col-lg-3">
              <Link to='/breakfast'>Desayuno</Link>
          </NavItem>
          <NavItem className="col-lg-3">
              <Link to='/meals'>Comida</Link>
          </NavItem>
          <NavItem className="col-lg-3">
              <Link to='/hamburguers'>Hamburguesas</Link>
          </NavItem>
          <NavItem className="col-lg-3">
              <Link to='/beverages'>Bebidas</Link>
          </NavItem>
        </Nav>
        <Switch>
          <Route path='/breakfast' render = {() => {
            return <Dishes order={this.props.order} upDateOrder={this.props.upDateOrder} food = {this.breakfast} />
          }} />
          <Route path='/meals' render = {() => {
            return <Dishes order={this.props.order} food = {this.lunch} />
          }} />
          <Route path='/hamburguers' component = {Test}/>
          <Route path='/beverages' render = {() => {
            return <Dishes order={this.props.order} food = {this.beverages} />
          }} />
        </Switch>
      </div>
    );
  }
}