import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Dishes from './Dishes.js'

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.breakfast = props.breakfast;
    this.lunch = props.lunch;
    this.hamburguers = props.hamburguers;
    this.beverages = props.beverages;

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="col-lg-8">
        <Nav tabs className="row">
          <NavItem className="col-lg-3">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
              >
              Desayuno
            </NavLink>
          </NavItem>
          <NavItem className="col-lg-3">
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Comida
            </NavLink>
          </NavItem>
          <NavItem className="col-lg-3">
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Hamburguesas
            </NavLink>
          </NavItem>
          <NavItem className="col-lg-3">
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Bebidas
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Dishes food = {this.breakfast} />
          </TabPane>
          <TabPane tabId="2">
            <Dishes food = {this.lunch} />
          </TabPane>
          <TabPane tabId="3">
            <Dishes food = {this.hamburguers} />
          </TabPane>
          <TabPane tabId="4">
            <Dishes food = {this.beverages} />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}