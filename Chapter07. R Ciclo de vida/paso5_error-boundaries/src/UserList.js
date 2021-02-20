import React from "react";

const LoadingMessage = ({ loading }) => (loading ? <em>{loading}</em> : null);

export default ({ error, loading, users, pulsa }) => (
  <section>
    <LoadingMessage loading={loading} />
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    <button type="button" onClick={pulsa}>Crea un Error</button>
  </section>
);
