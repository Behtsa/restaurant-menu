import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data';
//Elements
import Menu from './components/Menu.js';
import Order from './components/Order';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      order:[],
      food: [{
        breakfast:[{
          item: "Club Sandwich",
          price: 5,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/vipsclub.jpg"
          }, 
          {
          item: "Hot cakes",
          price: 7,
          src: "https://vips.com.mx/wp-content/uploads/2016/06/0000s_0030_460_08_Hot_Cake_con_Durazno_y_Chocolate_0020_A1.jpg.jpg"
          },
          {
          item: "Huevos",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2018/01/rancheros.jpg"
          },
          {
          item: "Molletes",
          price: 7,
          src: "https://vips.com.mx/wp-content/uploads/2016/06/0005_454_18_A_Molletes_con_Jamon_0008.jpg.jpg"
          },
          {
          item: "Copa de Yogurth",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/1_0000s_0015_457_22_Copa_de_Yogurt_0014_A1_E1.jpg.jpg"
          },
          {
          item: "Desayuno Combinado",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/1_0000s_0003_494-04-Desayuno-Combinado_0003-E1.jpg.jpg"
          }],
        lunch: [{
          item: "Enchiladas",
          price: 5,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/0000s_0015_454_34_A_Enchiladas_Suizas_0042.jpg.jpg"
          }, 
          {
          item: "Tacos Botaneros",
          price: 7,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/0002__0020_460_12_Tacos_Mixtos_0024_L1.jpg"
          },
          {
          item: "Queso fundido con Chorizo",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/1_0000s_0016_473-01-Queso-Fundido-con-Chorizo_0022_A1-E1.jpg.jpg"
          },
          {
          item: "Caldo tlalpeño",
          price: 7,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/1_0000s_0012_472-01-454_25_A_Caldo_Tlalpen%CC%83o_0016-E1.jpg.jpg"
          },
          {
          item: "Ensalada de Pechuga",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/0005__0017_Ensalada-del-Chef-con-pechuga-1.jpg"
          },
          {
          item: "Parrillada",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2018/01/parrillada.jpg"
          }],
        hamburguers: [{
          item: "Hamburguesa Champions",
          price: 5,
          src: "https://vips.com.mx/wp-content/uploads/2018/01/champions.jpg"
          }, 
          {
          item: "Hamburguesa Hawaina",
          price: 7,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/1_0000s_0018_473-03-Hamburguesa-Hawaiana_0014_A1-E1.jpg.jpg"
          },
          {
          item: "Hamburguesa de Pollo",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2018/01/pollo-emp.jpg"
          },
          {
          item: "Habanero Crunch",
          price: 7,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/1_0000s_0019_473-04-Hamburguesa-Habanero-Cronch_0009-A1-E1.jpg.jpg"
          },
          {
          item: "Hamburguesa Pechuga",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2018/01/pollo-emp.jpg"
          },
          {
          item: "Hamburguesa Mexicana",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/1_0000s_0017_473-02-Hamburguesa-Mexicana_0017_A1-E1.jpg.jpg"
          }],
        beverages: [{
          item: "Capuccino Clásico",
          price: 5,
          src: "https://vips.com.mx/wp-content/uploads/2018/01/clasicoi.jpg"
          }, 
          {
          item: "Capuccino Moka",
          price: 7,
          src: "https://vips.com.mx/wp-content/uploads/2018/01/moka.jpg"
          },
          {
          item: "Limonadas frutales",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2016/05/1_0000s_0007_491-14-15-16-Limonadas_0025_L1-E1.jpg.jpg"
          },
          {
          item: "Cerveza",
          price: 7,
          src: "https://vips.com.mx/wp-content/uploads/2018/01/cerveza-2.jpg"
          },
          {
          item: "Espresso Americano",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2018/01/espresso.jpg"
          },
          {
          item: "Té de Hoja Suelta",
          price: 10,
          src: "https://vips.com.mx/wp-content/uploads/2018/01/teorganico.jpg"
          }]
      }]
    };

    this.upDateOrder=this.upDateOrder.bind(this);
    this.removeFromOrder=this.removeFromOrder.bind(this);
  }

  upDateOrder(orders){
    this.setState({order:orders})   
    console.log(this.state); 
  }

  removeFromOrder(dishName){
    this.setState((currentState) => {
      return {
        order: currentState.order.filter((item) => item.item !== dishName)
      }
    })
  }

  render() {
    const foodOptions = this.state.food[0];
    return (
      <div className = " row">
        <Menu order={this.state.order} breakfast={foodOptions.breakfast} lunch={foodOptions.lunch} hamburguers={foodOptions.hamburguers} beverages={foodOptions.beverages} upDateOrder={this.upDateOrder} removeFromOrder={this.removeFromOrder}/>
        <Order order ={this.state.order } className ="col-md-4 col-lg-4 offset-md-8 offset-lg-8"/>
      </div>
    );
  }
}

export default App;