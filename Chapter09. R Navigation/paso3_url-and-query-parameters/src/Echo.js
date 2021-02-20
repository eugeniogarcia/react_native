import React from "react";
import { withRouter } from "react-router";

//withRouter es una utilidad que añade a los props variables relativas a la navegación
//En este caso vamos a añadri los params y el search
export default withRouter(function Echo({
  match: { params },
  location: { search }
}) {
  //retorna el valor de la path variable o de la query string msg
  return <h1>{params.msg || new URLSearchParams(search).get("msg")}</h1>;
});
