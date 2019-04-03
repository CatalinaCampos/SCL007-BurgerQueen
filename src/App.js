import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons.js' // importo módulo de los botones
import CustomerName from './components/CustomerName.js' // nombre del cliente
import Kitchen from './components/Kitchen.js'

class App extends Component {
  constructor(){
    super();
    this.state =
    {
      menuApp: []
    }

    this.addItemsToArr = this.addItemsToArr.bind(this);
    this.deleteKitchenItems = this.deleteKitchenItems.bind(this);
  }

  addItemsToArr(e){
    let menu = this.state.menuApp
    menu.push(e)
    this.setState({
      ...this.state, 
      menuApp: menu
    })
  }

  deleteKitchenItems(order){
    this.setState({
      ...this.state,
      menuApp: this.state.menuApp.filter((element)=>{
        return element !== order
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="containerTitle">Burger Queen</div>
        <CustomerName />
        <div className="divButton"> 
        <Buttons 
        sendItemsToArr={this.addItemsToArr}
        />
        </div>
        <Kitchen sendItemsToArrToKitchen={this.state.menuApp} deleteItem={this.deleteKitchenItems}/>
      </div>
    );
  }
}

export default App;
