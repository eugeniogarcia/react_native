import React from "react";
//Antiguamente era parte de React, pero se ha sacado para que sea un opt-in
import PropTypes from "prop-types";

export default function MyComponent({
  myString,
  myNumber,
  myBool,
  myFunc,
  myArray,
  myObject
}) {
  return (
    <section>
      <p>{myString}</p>
      <p>{myNumber}</p>
      <p>
        <input type="checkbox" defaultChecked={myBool} />
      </p>
      <p>{myFunc()}</p>
      <ul>
        {myArray.map(i => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <p>{myObject.myProp}</p>
      <section>
        <h5>{label}</h5>
        <progress {...{ max, value }} />
      </section>
    </section>
  );
}

//La propiedad estatica propTypes es donde se definen los tipos. Se alimenta con un objeto PropTypes que está definido en el paquete prop-types
//Podemos especificar
//el tipo
//el tipo y si es requerido
//any indica que cualquier tipo vale
//any.required indicaría que el campo es obligatorio, y que se puede informar con cualquier cosa
MyComponent.propTypes = {
  myString: PropTypes.string.isRequired,
  myNumber: PropTypes.number.isRequired,
  myBool: PropTypes.bool.isRequired,
  myFunc: PropTypes.func.isRequired,
  myArray: PropTypes.array.isRequired,
  myObject: PropTypes.object.isRequired,
  label: PropTypes.any,
  value: PropTypes.any,
  max: PropTypes.any
};
