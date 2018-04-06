import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col } from 'reactstrap';


export default class Dishes extends Component {
		constructor(props) {
			super(props);
			this.dishes = props.food;
		}

		render() {
			return(
				<div>
					<Row>
              
              {this.dishes.map(item => <Card body className = 'col-md-6'>
                  <CardTitle>{item.item}</CardTitle>
                  <Button>Agregar</Button>
                </Card>
              )}
              
            </Row>
				</div>)
		}
}

