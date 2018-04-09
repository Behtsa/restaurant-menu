import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col, CardImg } from 'reactstrap';


export default class Dishes extends Component {
		constructor(props) {
			super(props);
			this.dishes = props.food;
			this.handleClick = this.handleClick.bind(this);	
		}

		handleClick(item, price){
			Object.assign(this.props.order, { item: item, price: price, quantity: this.props.order.quantity + 1 })
			console.log(this.props.order);
			
	}

		render() {
			console.log(this.props.order);
			//console.log(this.order);
			
			return(
				<div>
					<Row>
<<<<<<< HEAD
              			{this.dishes.map(item => <Card body className = 'col-md-4'>
                  			<CardImg top width="100%" src={item.src} alt="Card image cap" height="250px" />
                  			<CardTitle>{item.item}</CardTitle>
                  			<Button>Agregar</Button>
                			</Card>
              			)}
            		</Row>
=======
              {this.dishes.map(item => <Card body className = 'col-md-4'>
                  <CardImg top width="100%" src={item.src} alt="Card image cap" height="250px" />
                  <CardTitle>{item.item}</CardTitle>
									<Button onClick={() => { this.handleClick(item.item, item.price)}  }>Agregar</Button>
                </Card>
              )}
            </Row>
>>>>>>> 1365f208345e5cb62c7fe1564b0ddc28036ddbed
				</div>)
		}
}

