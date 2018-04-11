import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';


export default class Order extends Component {
    constructor(props){
        super (props);

    }

<<<<<<< HEAD
    // showOrder(){
    //     this.props.order.map(item)
        

    // }
=======
>>>>>>> 9cd536c1ee1e4b165095ad7d725c84b40bab1fcd
    render () {        
        console.log(this.props.order);
        let { order } = this.props;
        const total = order.map(item=>item.price)        
        
        return (
                <Jumbotron className ="col-md-4 col-lg-4">
                    <h1 className="display-3">Orden</h1>
<<<<<<< HEAD
                    <p className="lead text-left"></p>
=======
                     {order.map(item=>{
                     return ( <div>
                                 <p className="lead text-left">{item.item}</p>
                                 <p className="lead text-right">{item.price}</p>   
                             </div>) })}
>>>>>>> 9cd536c1ee1e4b165095ad7d725c84b40bab1fcd
                    <hr className="my-2" />
                    <p className="text-left">TOTAL</p>
                    { total.length>0?
                        total.reduce((a, b) => a + b):0 }
                    <p className="lead">
                        <Button color="primary col">Enviar Orden</Button>
                    </p>
                </Jumbotron>
        );
    }
};
