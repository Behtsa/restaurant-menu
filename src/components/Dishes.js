import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col, CardImg } from 'reactstrap';
import Order from './Order';
import '../Menu.css';



export default class Dishes extends Component {
        constructor(props) {
            super(props);
            this.handleOrder = this.handleOrder.bind(this); 
        }

        handleOrder(item, price){
            // console.log(this.props.order)
            // let getDishNames = this.props.order.map(dish => dish.item)

            // // console.log(this.props.order.find( item => item === item))
            let finds = this.props.order.find( dish => dish.item === item)
            if(finds === undefined){
                this.props.upDateOrder(item, price, 1)
            }else {
                /*Check from here next commit*/
                let newArray = this.props.order;
                let newElement = newArray.find((dish, index) => {
                    return dish.item === item;
                })

                console.log(newElement.quantity += 1)
                console.log(newArray)
        }}

        handleRemoveDish(item) {
          this.props.removeFromOrder(item);
        }



        render() {          
            return(
                <div>
                    <Row>
                      {this.props.food.map(item => 
                      <Card body className = 'col-md-4'>
                        <CardImg top width="100%" src={item.src} alt="Card image cap" height="200px" />
                        <CardTitle>{item.item}<p className="price_info">${item.price}</p></CardTitle>
                        <Row>
                            <Button onClick={()=>this.handleRemoveDish(item.item)} color="secondary" className="col-md-offset-2 col-md-2">-</Button><input className="col-md-2" placeholder="0"></input><Button color="info" className="col-md-2" onClick={()=>this.handleOrder(item.item, item.price)}>+</Button>
                        </Row>
                      </Card>
                      )}
                    </Row>
                </div>)
        }
}
