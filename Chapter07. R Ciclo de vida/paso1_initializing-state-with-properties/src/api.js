//Emula una api
export function users(fail) {
  //devuelve una promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        //devuelve un error
        reject("epic fail");
      } else {
        //devuelve la respuesta
        resolve({
          users: [
            { id: 0, name: "First" },
            { id: 1, name: "Second" },
            { id: 2, name: "Third" }
          ]
        });
      }
    }, 2000);
  });
}
