/**
 * Crear una función (aumentoBici) que reciba por parámetro el porcentaje de
aumento. Tendrá la responsabilidad de devolver el listado de todas las bicicletas con
el aumento que reciba por parámetro. Estamos optimizando nuestro código, por lo
cual, deberíamos utilizar el método map.
 */

const bicicletas = require('./datosBici.js');  

const aumentoBici = (aumento, precio) => (aumento/100)*precio + precio

bicicletasAumento = bicicletas.map(bici => aumentoBici(20, bici.precio))
// console.log(bicicletasAumento);


/**
 * Crear la funcionalidad (biciPorRodado) que reciba por parámetro el “número del
rodado”. Tendrá la responsabilidad de retornar todas aquellas bicicletas que
correspondan al rodado recibido por parámetro. Estamos optimizando nuestro
código, por lo que deberíamos utilizar el método filter.
 */

const biciPorRodado = (rodado) =>{
    return bicicletas.filter(bici => bici.rodado === rodado)  
} 

// console.log(biciPorRodado(29));
console.log(biciPorRodado(28));

/**
 * Crear una función (listarTodasLasBici) que tendrá la responsabilidad de mostrar al
usuario el listado de todas las bicicletas registradas en el sistema. Para ello puedes
valerte del uso de la función forEach() y también puedes investigar sobre el uso de la
sentencia for... of()
 */

const listarTodasLasBici = (lista) => {
    lista.forEach((bici, count) => {
        console.log(`Bicicleta: ${count + 1})\n`);
        console.log(bici, '\n\n');
        
    });
}

listarTodasLasBici(bicicletas)
