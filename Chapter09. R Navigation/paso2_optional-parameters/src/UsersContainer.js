import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Users from "./Users";
import { fetchUsers } from "./api";

//location es una prop disponible con toda la informaciónd de contexto de la petición: uri, verbos, etc. Entre ellos tenemos la propieadad search. Search contiene la porción del query string. Es decir en /users?desc=a&p=hola contendría desc=a&p=hola
export default function UsersContainer({
  match: { params },
  location: { search }
}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Comprobamos si desc esta informado bien como query string o como path variable
    const desc =
      params.desc === "desc" || !!new URLSearchParams(search).get("desc");

    fetchUsers(desc).then(users => {
      setUsers(users);
    });
  }, [params, search]);

  return <Users users={users} />;
}

//locations y match son obligatorios
UsersContainer.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
