import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col, CardImg } from 'reactstrap';
import Order from './Order';


export default class Dishes extends Component {
        constructor(props) {
            super(props);
            this.handleOrder = this.handleOrder.bind(this); 
        }

        handleOrder(item, price){
            (this.props.order).push(
                {
                    item: item,
                    price: price,
                    quantity: 1
                }
            )
            console.log(this.props.order);
            this.props.upDateOrder(this.props.order)    
        }

        render() {          
            return(
                <div>
                    <Row>
                      {this.props.food.map(item => 
                      <Card body className = 'col-md-4'>
                        <CardImg top width="100%" src={item.src} alt="Card image cap" height="200px" />
                        <CardTitle>{item.item}</CardTitle>
                        <Row>
                            <Button color="secondary" className="col-md-offset-2 col-md-2">-</Button><input className="col-md-2" placeholder="0"></input><Button color="info" className="col-md-2" onClick={()=>this.handleOrder(item.item, item.price)}>+</Button>
                        </Row>
                      </Card>
                      )}
                    </Row>
                </div>)
        }
}
