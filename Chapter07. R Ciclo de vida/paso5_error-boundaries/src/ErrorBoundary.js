import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    error: null
  };

  //Añadimos los errores al estado
  componentDidCatch(error) {
    this.setState({ error });
  }

  //Mostramos los hijos o los errores
  render() {
    if (this.state.error === null) {
      return this.props.children;
    } else {
      return <strong>{this.state.error.toString()}</strong>;
    }
  }
}
