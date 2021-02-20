import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Echo from "./Echo";

//Cuando navegamos a la raiz se mostrará el componente App
//El componente App, sino especificamos ningún children, mostrara unos childre por defecto, estos children crean dos links que nos llevarán a la otra Ruta, la ruta que tiene App con Echo como children
render(
  <Router>
    <Fragment>
      <Route exact path="/" render={() => <App />} />
      <Route
        exact
        path="/echo/:msg?"
        render={() => (
          <App>
            <Echo />
          </App>
        )}
      />
    </Fragment>
  </Router>,
  document.getElementById("root")
);
