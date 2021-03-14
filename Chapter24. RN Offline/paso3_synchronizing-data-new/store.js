import { AsyncStorage } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const fakeNetworkData = {
  first: false,
  second: false,
  third: false
};

let connected = false;
const unsynced = [];

//Función que llama a la API cuando hay conexión, y que en caso contrario guarda los datos de forma local
export function set(key, value) {
  //La función retorna una Promise
  return new Promise((resolve, reject) => {
    //Si estamos conectados...
    if (connected) {
      //Llamamos a la API
      fakeNetworkData[key] = value;
      //y devolvemos true
      resolve(true);
    } else {
      //Sino estamos conectados guardamos los datos de forma local...
      AsyncStorage.setItem(key, value.toString()).then(
        () => {
          //...y actualizamos el array con los keys que aún no se han sincronizado
          unsynced.push(key);
          //y devuelve false
          resolve(false);
        },
        //Sino se consigue guardar en local retornamos un error
        err => reject(err)
      );
    }
  });
}

//Metodo que retorna una Promise con los datos asociados a una key
export function get(key) {
  //Retorna una promise 
  return new Promise((resolve, reject) => {
    //Si hay conexión recupera los datos llamando a la api
    if (connected) {
      resolve(key ? fakeNetworkData[key] : fakeNetworkData);
    } 
    else if (key) {
      //Si no hay conexión recupera los datos del store
      AsyncStorage.getItem(key).then(
        item => resolve(item),
        err => reject(err)
      );
    } else {
      AsyncStorage.getAllKeys().then(
        keys =>
          AsyncStorage.multiGet(keys).then(
            //Devuelve una colección con los items
            items => resolve(Object.fromEntries(items)),
            err => reject(err)
          ),
        err => reject(err)
      );
    }
  });
}

//Obtiene el estado inicial de la conexión. 
NetInfo.fetch().then(
  connection => {
    connected = ["wifi", "unknown"].includes(connection.type);
  },
  () => {
    connected = false;
  }
);

//Se subscribe a los cambios de estado de la conexión
NetInfo.addEventListener(connection => {
  connected = ["wifi", "unknown"].includes(connection.type);

  //Si estamos conectados y hay items pendientes de sincronizar ...
  if (connected && unsynced.length) {
    //... los leemos del store y los enviamos a la api
    AsyncStorage.multiGet(unsynced).then(items => {
      items.forEach(([key, val]) => set(key, val));
      unsynced.length = 0;
    });
  }
});
