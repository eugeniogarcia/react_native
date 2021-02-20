import React from "react";
import { render as renderJSX } from "react-dom";
import MyFeature from "./MyFeature";

let disabled = true;

function render() {
  disabled = !disabled;

  //Devuelve el JSX
  renderJSX(<MyFeature {...{ disabled }} />, document.getElementById("root"));
}

setInterval(render, 3000);
render();
