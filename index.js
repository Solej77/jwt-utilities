const jwt = require('jsonwebtoken');
/**
 * Como los argumentos los vamos a obtener desde la terminal, uilizaremos
 * process argunment,
 * Primero argumento: proceso de Node 
 * Segundo argumento: el archivo que estamos leyendo, es por eso que comenzamos 
 * a leer desde el tercer parametro
 * Tercer argumento: la opción de Verificar o Firmar
 * Cuarto argumento: Secreto
 * Quinto argumento: Nombre o Token
 */

const [,,option, secret, nameOrToken] = process.argv;

// Validacion de los argumentos
if (!option || !secret || !nameOrToken) {
  return console.log("Mising arguments");
}

function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

if (option == 'sign') {
  console.log(signToken({ sub: nameOrToken }, secret));
} else if (option == 'verify') {
  console.log(verifyToken(nameOrToken, secret))
} else {
  console.log('Option needs to be "sign" or "verify"');
}