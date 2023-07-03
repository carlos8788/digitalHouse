let electrodomesticos = ["Heladera", "Lavarropas", "Microondas", "Horno", "Secarropas", "Tostadora"];

const obtenerElementoAleatorio = array => {
    let indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
}

console.log(obtenerElementoAleatorio);

let primerElemento = electrodomesticos.shift();
electrodomesticos.push(primerElemento);
console.log(electrodomesticos);
electrodomesticos.push("Licuadora", "Cafetera");
console.log(electrodomesticos.length);

const buscarProducto = (lista, producto) => (lista.includes(producto)) ?console.log("Producto encontrado"):console.log("El producto buscado no existe");

let cadena = electrodomesticos.join(" ");

console.log("La longitud del string es: " + cadena.length);

console.log(cadena.replace('Heladera', 'TV'));

let nuevaLista = cadena.split(" ");

console.log(nuevaLista);