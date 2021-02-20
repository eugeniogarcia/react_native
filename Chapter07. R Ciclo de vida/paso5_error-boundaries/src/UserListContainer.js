import React, { Component } from "react";
import { users } from "./api";
import UserList from "./UserList";

export default class UserListContainer extends Component {
  state = {
    fuerzaError:true,
    error: null,
    loading: "loading...",
    users: []
  };

  componentDidMount() {
    this.actualiza(true);
  }

  componentDidUpdate() {
    if(this.state.loading){
      this.actualiza(!this.state.fuerzaError);
    }
  }

  actualiza = (fuerzaError) =>{
    users(!fuerzaError).then(
      result => {
        this.setState({ fuerzaError: true, loading: null, error: null, users: result.users });
      },
      error => {
        this.setState({ fuerzaError: false,loading: null, error,users:null });
      }
    );
  }

  render() {
    if (this.state.error !== null) {
      throw new Error(this.state.error);
    }
    return <UserList {...this.state} pulsa={() => { 
      this.setState({ error:null,loading:"loading...",users:[]});
      console.log(this.state);}}/>;
  }
}
