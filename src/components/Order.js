import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
//import Order from './Order';

const Order = (props) => {
    return (
        <div className="col-md-4 col-lg-4 offset-md-8">
            <Jumbotron>
                <h1 className="display-3">Orden</h1>
                <p className="lead text-left">Producto</p>
                <hr className="my-2" />
                <p className="text-left">TOTAL</p>
                <p className="lead">
                    <Button color="primary col-md-3 offset-md-9">Enviar Orden</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default Order;