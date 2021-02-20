import React, { createContext, useState } from "react";

//Exporta el contexto
export const StatusContext = createContext();

//Helper que implementa el provider del contexto creado arriba
export function StatusProvider({ children }) {
//El valor del contexto es el estado de este componente  
//value es un array, con el valor del estado, más la función para actualizarlo
const value = useState("La prueba");

  return (
    <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
  );
}
