import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col, CardImg } from 'reactstrap';


export default class Dishes extends Component {
		constructor(props) {
			super(props);
			this.dishes = props.food;
		}

		render() {
			return(
				<div>
					<Row>
              {this.dishes.map(item => <Card body className = 'col-md-4'>
                  <CardImg top width="100%" src={item.src} alt="Card image cap" height="250px" />
                  <CardTitle>{item.item}</CardTitle>
                  <Button>Agregar</Button>
                </Card>
              )}
            </Row>
				</div>)
		}
}

