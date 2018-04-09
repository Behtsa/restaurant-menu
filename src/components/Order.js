import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';


export default class Order extends Component {
    constructor(props){
        super (props);

    }
    render () {

        return (
                <Jumbotron className ="col-md-4 col-lg-4">
                    <h1 className="display-3">Orden</h1>
                    <p className="lead text-left">{this.props.item}</p>
                    <hr className="my-2" />
                    <p className="text-left">TOTAL</p>
                    <p className="lead">
                        <Button color="primary col">Enviar Orden</Button>
                    </p>
                </Jumbotron>
        );
    }
};
