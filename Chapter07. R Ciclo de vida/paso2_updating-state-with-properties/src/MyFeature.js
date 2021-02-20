import React, { Component } from "react";
import MyButton from "./MyButton";

export default class MyFeature extends Component {
  state = {
    clicks: 0,
    disabled: false,
    text: ""
  };

  onClick = () => {
    this.setState(state => ({ ...state, clicks: state.clicks + 1 }));
  };

  render() {
    //Pasamos como props el contenido del estado, y el handler onClick
    return <MyButton onClick={this.onClick} {...this.state} />;
  }

  //Se llama antes de render. Nos permite inicializar el estado con props. En este ejemplo extraemos de props dos propiedades, disabled y text
  static getDerivedStateFromProps({ disabled, text }, state) {
    return { ...state, disabled, text };
  }
}

//Fijamos una prop por defecto
MyFeature.defaultProps = {
  text: "A Button"
};
