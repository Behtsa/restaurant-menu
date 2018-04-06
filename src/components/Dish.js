import React, { Component } from 'react';
export default class Dish extends Component {
	constructor(props) {
		super(props);
		this.dishName = props.dishName;
	}

	render() {
		return(
			<div>
				<h6>{this.dishName}</h6>
			</div>)
		console.log(this.dishName);
	}
}