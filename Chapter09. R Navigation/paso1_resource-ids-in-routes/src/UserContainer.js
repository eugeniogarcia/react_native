import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import User from "./User";
import { fetchUser } from "./api";

//Cuando usamos el Router en los componentes se añade como props la propiedad match. Este es un objeto que contiene todas las propiedades pasadas como argumento en la ruta. Estas propiedades se identifican en la ruta con el prefijo :
export default function UserContainer({
  match: {
    params: { id }
  }
}) {
  const [error, setError] = useState();
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    fetchUser(+id).then(
      user => {
        setError(null);
        setFirst(user.first);
        setLast(user.last);
        setAge(user.age);
      },
      error => {
        setError(error);
        setFirst(null);
        setLast(null);
        setAge(null);
      }
    );
  }, [id]);

  return <User {...{ error, first, last, age }} />;
}

//El componente requiere que se le pase un parametro en la url
UserContainer.propTypes = {
  match: PropTypes.object.isRequired
};
