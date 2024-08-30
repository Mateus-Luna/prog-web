const colocarTodasLetrasEmMaiusculoEm500ms = async (texto) => {
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
  
  const inverteTodasLetras = async (texto) => {
    return new Promise((resolve) => {
      const textoInvertido = texto.split('').reverse().join('');
      resolve(textoInvertido);
    });
  };
  
  const manipularTexto = async (texto) => {
    try {
      const textoMaiusculo = await colocarTodasLetrasEmMaiusculoEm500ms(texto);
      const textoInvertido = await inverteTodasLetras(textoMaiusculo);
      console.log(textoInvertido);
    } catch (error) {
      console.error(error);
    }
  };
  
  manipularTexto('exemplo');