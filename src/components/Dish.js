import React, { Component } from 'react';

export default class Dish extends Component {
		constructor(props) {
			super(props);
			this.dishes = props.data;
		}

		show() {
			console.log(this);
		}

		render() {
			return(
				<div>{this.show()}</div>)
		}
}

