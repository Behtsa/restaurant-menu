import React, { Component } from 'react';
import { Card, Button, CardTitle, Row, Col } from 'reactstrap';
import Dish from './Dish.js';

export default class Dishes extends Component {
		constructor(props) {
			super(props);
			this.dishes = props.breakfast;
		}

		render() {
			return(
				<div>
					<Row>
              <Col sm="6">
              {this.dishes.map(item => <Card body>
                  <CardTitle>{item.item}</CardTitle>
                  <Button>Agregar</Button>
                </Card>
              )}
              </Col>
            </Row>
				</div>)
		}
}

