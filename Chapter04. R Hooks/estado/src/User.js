import React, { Fragment, useEffect, useState } from 'react';
//Linbreria que implementa promises cancelables
import { Promise } from 'bluebird';

//Permite cancelar el promise
Promise.config({ cancellation: true });

function fetchUser() {
  console.count('fetching user');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Adam' });
    }, 3000);
  });
}

export default function User() {
  const [id, setId] = useState('loading...');
  const [name, setName] = useState('loading...');

  useEffect(() => {
    const promise = fetchUser().then(user => {
      setId(user.id);
      setName(user.name);
    });

    //Cuando se elimina el componente se cancelan las promises
    return () => {
      promise.cancel();
    };
    //Se condiciona que el efecto se ejecute cuando cambien los elementos indicados. Como se dice [], solo se hará la primera vez. Se limpiaran los recursos solo cuando se elimine el componente
  }, []);

  return (
    <Fragment>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </Fragment>
  );
}
