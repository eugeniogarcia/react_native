import React from "react";

//Dos componentes funcionales
//Muestran un mensaje si el parametro esta informado
const ErrorMessage = ({ error }) => (error ? <strong>{error}</strong> : null);
const LoadingMessage = ({ loading }) => (loading ? <em>{loading}</em> : null);

//Componente funcional. Extrae de props tres propiedades
export default ({ error, loading, users }) => (
  <section>
    <ErrorMessage error={error} />
    <LoadingMessage loading={loading} />
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </section>
);
