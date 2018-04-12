import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col, CardImg } from 'reactstrap';
import Order from './Order';


export default class Dishes extends Component {
        constructor(props) {
            super(props);
            this.dishes = props.food;
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
                      {this.dishes.map(item => 
                      <Card body className = 'col-md-4'>
                        <CardImg top width="100%" src={item.src} alt="Card image cap" height="250px" />
                        <CardTitle>{item.item}</CardTitle>
                        <Button onClick={()=>this.handleOrder(item.item, item.price)}>Agregar</Button>
                      </Card>
                      )}
                    </Row>
                </div>)
        }
}
