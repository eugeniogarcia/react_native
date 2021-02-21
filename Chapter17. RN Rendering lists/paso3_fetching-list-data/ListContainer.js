import React, { useState, useEffect } from "react";
import { fetchItems } from "./api";
import List from "./List";

function mapItems(items) {
  return items.map((value, i) => ({ key: i.toString(), value }));
}

export default function ListContainer() {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  // Actualiza la presentación con los datos de la API, pero solo en la carga inicial. Esto significa que la llamada a la API se hace una sola vez. Actualizamos el estado con los datos de la api
  useEffect(() => {
    console.log("Entra en effect!!")
    fetchItems(filter, asc)
      .then(resp => resp.json())
      .then(({ items }) => {
        setData(mapItems(items));
      });
  }, []);

  //Hace llamadas a la api tmbién desde los handlers, actualiza el estado, y esto hace que se re-renderice la UI - se llame a render de nuevo - y ahi ya no se llama a use effect
  return (
    <List
      data={data}
      asc={asc}
      onFilter={text => {
        fetchItems(text, asc)
          .then(resp => resp.json())
          .then(({ items }) => {
            setFilter(text);
            setData(mapItems(items));
          });
      }}
      onSort={() => {
        fetchItems(filter, !asc)
          .then(resp => resp.json())
          .then(({ items }) => {
            setAsc(!asc);
            setData(mapItems(items));
          });
      }}
    />
  );
}
