import React, { Fragment, Component } from "react";

export default class App extends Component {
  state = {
    first: 0,
    second: 0,
    third: 0
  };

  //Podemos definir un handler "high-order". Se trata de una función que recibe un argumento
  //y dependendiendo del argumento retorna uno u otro handler
  //Adicionalmente como lo que se devuelve es una lambda, no es preciso bindear el handler a la
  onClick = name => () => {
    this.setState(state => ({
      ...state,
      [name]: state[name] + 1
    }));
  };

  render() {
    const { first, second, third } = this.state;

    //Cuando asociados una lambda al handler no es preciso bindear el handler a la instancia
    return (
      <Fragment>
        <button onClick={this.onClick("first")}>First {first}</button>
        <button onClick={this.onClick("second")}>Second {second}</button>
        <button onClick={this.onClick("third")}>Third {third}</button>
        
        <button onClick={e => console.log("clicked", e)}>
          {this.props.children}
        </button>
      </Fragment>
    );
  }
}
