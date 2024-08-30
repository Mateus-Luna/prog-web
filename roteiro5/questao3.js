const colocarTodasLetrasEmMaiusculoEm500ms = (texto) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof texto === 'string') {
          resolve(texto.toUpperCase());
        } else {
          reject('Not a string');
        }
      }, 500);
    });
  };
  
  const inverteTodasLetras = (texto) => {
    return new Promise((resolve) => {
      const textoInvertido = texto.split('').reverse().join('');
      resolve(textoInvertido);
    });
  };
  
  colocarTodasLetrasEmMaiusculoEm500ms('exemplo')
    .then(inverteTodasLetras)
    .then(result => console.log(result))
    .catch(error => console.error(error));