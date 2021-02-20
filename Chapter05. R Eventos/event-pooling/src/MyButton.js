import React, { Component } from "react";

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

//React crea un evento sintetico con cada evento. El evento sintetico es procesado en la raiz del DOM. Cada uno de estos eventos sinteticos tiene que ser garbage collected cuando ya no se utilice. Esto impone una carga en el gc. Para evitar esta carga, React usa un pool de instancias de eventos sinteticos. Cuando se dispara un evento no se crea una evento sintetico, sino que se tomar una instancia del pool. Cuando el evento es procesado, la instancia se devuelve al pool
export default class MyButton extends Component {
  //Cuando se procese la Promise la instancia del evento sintetico se habrá ya devuelto al pool, de modo que el console.log("callback", e.currentTarget.style); escribira en el el log null
  onClick(e) {
    console.log("clicked", e.currentTarget.style);

    fetchData().then(() => {
      console.log("callback", e.currentTarget.style);
    });
  }

  render() {
    return <button onClick={this.onClick}>{this.props.children}</button>;
  }
}
