import React from "react";
import PropTypes from "prop-types";
import MyUser from "./MyUser";

export default function MyComponent({ myDate, myCount, myUsers }) {
  return (
    <section>
      <p>{myDate.toLocaleString()}</p>
      <p>{myCount}</p>
      <ul>
        {myUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
}

//Cuando los tipos de nuestros objetos no son estándar, tenemos que usar estas formulas:
//instanceOf. Comprueba que la variable sea del tipo "custom" indicado
//oneOfType. Nos permite establecer varios tipos posibles. En este ejemplo, string y numérico serían admisibles para myCount
//arrayOf. Indica que tiene que ser un array. En este caso de tipos custom MyUser
MyComponent.propTypes = {
  myDate: PropTypes.instanceOf(Date),
  myCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  myUsers: PropTypes.arrayOf(PropTypes.instanceOf(MyUser))
};
