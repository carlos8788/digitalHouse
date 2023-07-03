const fs = require('fs');

let bicicletasJSON = fs.readFileSync('./bicicletas.json', 'utf-8');

let bicicletas = JSON.parse(bicicletasJSON);

// console.log(Array.isArray(bicicletas));
// console.log(bicicletas);

module.exports = bicicletas;
