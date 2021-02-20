import React, { Component } from "react";
import reverse from "./reverse";

export default class MyList extends Component {
  //Estado
  state = {
    items: ["Angular", "Ember", "React"]
  };

  //Asocia el metodo reverse a la instancia del componente
  //El método tiene que acceder a propiedades del componente. Con bind nos aseguramos que
  //el método este asociado a la instancia del componente
  onReverseClick = reverse.bind(this);

  render() {
    //Truco para extraer de this el método y la variable items del estado. Esta técnica se llama extract. Podemos usar las variables en el JXC que retornamos
    const {
      state: { items },
      onReverseClick
    } = this;

    return (
      <section>
        <button onClick={onReverseClick}>Reverse</button>
        <ul>
          {
          //v se corresponde con el valor; i se con la enumeración, el indice dentro del array
          items.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </section>
    );
  }
}
