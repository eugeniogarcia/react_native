import React, { Component } from "react";
import { users } from "./api";
import UserList from "./UserList";

export default class UserListContainer extends Component {
  //Estado
  state = {
    error: null,
    users: []
  };

  //Se llama cuando el DOM se ha creado, despues de render. Es el punto donde podemos llamar a nuestra api, y actualizar el DOM
  componentDidMount() {
    users().then(
      result => {
        this.setState({ error: null, users: result.users });
      },
      error => {
        this.setState({ loading: null, error });
      }
    );
  }

  render() {
    //Pasamos como props el estado del componente. El estado tiene que tener las propiedades que espera el componente
    return <UserList {...this.state} />;
  }

  //Se llama antes de render. Tenemos la oportunidad de inicializar el estado con el valor de las props
  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      loading: state.users.length === 0 ? props.loading : null
    };
  }
}

//Nos permite especificar props por defecto. Si al componente no se le pasa la prop loading, la inicializamos con este valor. Especificar propiedades por defecto se usa en este ejemplo en conjunción con getDerivedStateFromProps
UserListContainer.defaultProps = {
  loading: "loading..."
};
