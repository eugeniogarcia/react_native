import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UsersContainer from "./UsersContainer";
import UserContainer from "./UserContainer";

export default function App() {
  //Render requiere un solo nodo por debajo, usamos fragment
  //Podemos usar component o render. Con component especificamos un componente. Con render una función que retorna JSX
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={UsersContainer} />
        <Route path="/users/:id" component={UserContainer} />
      </Fragment>
    </Router>
  );
}
