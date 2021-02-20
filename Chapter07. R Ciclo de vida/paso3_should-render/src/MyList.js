import React, { Component } from "react";

//Comprueba si los dos arrays apuntan al mismo sitio, son identicos
function referenceEquality(arr1, arr2) {
  return arr1 === arr2;
}

//Comprueba si los dos arrays tienen el mismo contenido
function valueEquality(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

export default class MyList extends Component {
  //items se completa con un array de 5000 valores
  state = {
    items: new Array(5000).fill(null).map((v, i) => i)
  };

  //Se llama antes de render. Si devuelve false no se hace el render
  shouldComponentUpdate(props, state) {
    if (!referenceEquality(this.state.items, state.items)) {
      return !valueEquality(this.state.items, state.items);
    }

    return false;
  }

  render() {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}
