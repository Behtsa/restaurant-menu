import React, {Component} from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';
import '../Menu.css';


export default class Order extends Component {
    constructor(props){
        super (props);

    }

    render () {        
        console.log(this.props.order);
        let { order } = this.props;
        const total = order.map(item=>item.price)        
        
        return (
                <Jumbotron id="orderSumary" className ="col-md-4 col-lg-4">
                    <h1 className="display-3">Orden</h1>
                     {order.map(item=>{
                     return ( <Row>
                                <Col><p className="lead text-left">{item.item}</p></Col>
                                <Col><p className="lead text-right">{item.price}</p></Col>
                             </Row>) })}
                    <hr className="my-2" />
                    <Row>
                        <Col><p className="text-left">TOTAL</p></Col>
                        < Col className = "lead text-right" > <bold> $ {
                            total.length > 0 ? total.reduce((a, b) => a + b) : 0
                        } </bold></Col >

                    </Row>
                    <p className="lead">
                        <Button color="primary col">Enviar Orden</Button>
                    </p>
                </Jumbotron>
        );
    }
};
