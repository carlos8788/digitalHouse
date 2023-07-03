const fs = require('fs');
const pelis = require('./peliculas');

for(let i = 0; i <pelis.length; i++) {
    console.log(`\n\n${i+1})*****************`)
    console.log(pelis[i])
};

const archivo = 'mensaje.txt'

const data = fs.readFileSync(archivo, 'utf-8')
console.log(data);