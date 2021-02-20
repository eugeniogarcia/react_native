import React, { Component } from "react";
import MyButton from "./MyButton";

export default class MyButtonContainer extends Component {
  componentDidMount() {
    //Podemos especificar en el estado cualquier propiedad, tambien un handler. Si se cambia el handler, se renderizarán los hijos. Bindeamos el handler a nuestra clase
    this.setState({ ...this.props, onClick: this.props.onClick.bind(this) });
  }

  render() {
    return <MyButton {...this.state} />;
  }
}

//Podemos especificar por defecto cualquier prop, incluido un handler
MyButtonContainer.defaultProps = {
  onClick: () => {}
};
