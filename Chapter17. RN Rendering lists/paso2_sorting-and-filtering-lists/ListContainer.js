import React, { useState, useEffect } from "react";
import List from "./List";

function mapItems(items) {
  return items.map((value, i) => ({ key: i.toString(), value }));
}

//Filtra los datos y los ordena
function filterAndSort(data, text, asc) {
  return data
    .filter((i) => text.length === 0 || i.includes(text))
    .sort(
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );
}

export default function ListContainer() {
  const rawdata = new Array(100).fill(null).map((v, i) => `Item ${i}`);
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState(filterAndSort(rawdata,"", asc));

  //Con los handlerse se actualiza el estado: filtro, orden de datos, y los propios datos
  return (
    <List
      data={mapItems(data)}
      asc={asc}
      onFilter={(text) => {
        setFilter(text);
        setData(filterAndSort(rawdata, text, asc));
      }}
      onSort={() => {
        setAsc(()=>{asc=!asc});
        setData(filterAndSort(rawdata, filter, asc));
      }}
    />
  );
}
