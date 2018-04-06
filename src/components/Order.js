import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
//import Order from './Order';

const Order = (props) => {
    return (
            <Jumbotron className ="col-md-4 col-lg-4">
                <h1 className="display-3">Orden</h1>
                <p className="lead text-left">Producto</p>
                <hr className="my-2" />
                <p className="text-left">TOTAL</p>
                <p className="lead">
                    <Button color="primary col">Enviar Orden</Button>
                </p>
            </Jumbotron>
    );
};

export default Order;