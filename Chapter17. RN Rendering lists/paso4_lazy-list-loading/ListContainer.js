import React, { useState, useEffect } from "react";
import * as api from "./api";
import List from "./List";

export default function ListContainer() {
  //Define la función que recupera items, y los guarda en el estado
  function fetchItems() {
    return api.fetchItems()
      .then(resp => resp.json())
      .then(({ items }) => {
        setData((x)=>{x.push(
          items.map((value, i) => ({
            key: i.toString(),
            value
        })))}
        );
      });
  }

  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  //Pasamos el método que llama a la api como en un parametro nuevo, fetchItems
  return <List data={data} obtieneDatos={fetchItems} />;
}
