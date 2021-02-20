import React from "react";
import PropTypes from "prop-types";

const levels = new Array(10).fill(null).map((v, i) => i + 1);
const userShape = {
  name: PropTypes.string,
  age: PropTypes.number
};

export default function MyComponent({ level, user }) {
  return (
    <section>
      <p>{level}</p>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </section>
  );
}

//En este caso estamos estableciendo cual puede ser el contenido, no el tipo
//oneOf. El valor tiene que estar dentro del dominio de valores indicado
//shape. Con shape lo que hacemos es, no especificar el tipo, pero indicar que atributos, caracteristicas el tipo tiene que tener
MyComponent.propTypes = {
  level: PropTypes.oneOf(levels),
  user: PropTypes.shape(userShape)
};
