import React, { Component } from "react";

export default class MyList extends Component {
  constructor() {
    super();
    //Asocia el metodo reverse a la instancia del componente
    //El método tiene que acceder a propiedades del componente. Con bind nos aseguramos que
    //el método este asociado a la instancia del componente
    this.onClick = this.onClick.bind(this);
  }

  onClick(id) {
    const { name } = this.props.items.find(i => i.id === id);
    console.log("clicked", `"${name}"`);
  }

  render() {
    return (
      <ul>
        {this.props.items.map(({ id, name }) => (
          //Para asociar el argumento al evento, una forma de hacerlo es usando bind
          <li key={id} onClick={this.onClick.bind(null, id)}>
            {name}
          </li>
        ))}
      </ul>
    );
  }
}
