import React, { Component } from "react";
import $ from "jquery";
import "jquery-ui/ui/widgets/button";
import "jquery-ui/themes/base/all.css";

export default class MyButton extends Component {
  //Podemos acceder al componente nativo usando jQuery
  componentDidMount() {
    $(this.boton).button(this.props);
  }

  componentDidUpdate() {
    $(this.boton).button("option", this.props);
  }

  //Crea una propiedad llamada boton que linkamos al componente del DOM nativo
  render() {
    return (
      <button
        onClick={this.props.onClick}
        ref={button => {
          this.boton = button;
        }}
      />
    );
  }
}
