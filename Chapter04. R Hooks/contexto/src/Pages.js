import React, { Fragment, useContext } from 'react';
//Contexto
import { StatusContext } from './StatusContext';

function SetStatus() {
  //Este componente esta subscrito al contexto, y tiene capacidad para modificarlo
  //El valor del contexto lo hemos definido como el estado, así que podremos cambiarlo con setStatus 
  const [status, setStatus] = useContext(StatusContext);
  return <input value={status} onChange={e => setStatus(e.target.value)} />;
}

export function Status() {
  //Este componente esta subscrito al contexto. Los cambios de contexto hacen que s renderice
  const [status] = useContext(StatusContext);
  return <p>{status}</p>;
}

export function Page1() {
  return (
    <Fragment>
      <h1>Page 1</h1>
      <SetStatus />
    </Fragment>
  );
}

export function Page2() {
  return (
    <Fragment>
      <h1>Page 2</h1>
    </Fragment>
  );
}

export function Page3() {
  return (
    <Fragment>
      <h1>Page 3</h1>
      <SetStatus />
    </Fragment>
  );
}                                                                                           