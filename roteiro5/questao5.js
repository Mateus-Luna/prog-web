const crypto = require('crypto');

const criptografarMensagem = (texto, chaveSecreta) => {
  const algorithm = 'aes-256-cbc';
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(chaveSecreta), iv);
  let encrypted = cipher.update(texto, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`;
}

const processarNumeros = (numeros, callbackFunction) => {
  const chaveSecreta = '12345678901234567890123456789012'; 
  return numeros
    .filter(num => num % 2 === 0) 
    .map(num => callbackFunction(num.toString(), chaveSecreta)); 
}

const numeros = [0, 1, 2, 3, 4, 5, 6];
const resultado = processarNumeros(numeros, criptografarMensagem);
console.log(resultado);
