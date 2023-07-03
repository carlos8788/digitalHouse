function diezSiguientes(num) {
    for (let i = num + 1; i <= num + 10; i++) {
        console.log(i);
    }
}
diezSiguientes(5); // muestra los números del 6 al 15

//2
function imprimirSaltandoDeTres() {
    for (let i = 1; i <= 57; i += 3) {
        console.log(i);
    }
}

imprimirSaltandoDeTres();


//3
function sumatoriaHastaCien() {
    let suma = 0;
    for (let i = 0; i <= 100; i++) {
        suma += i;
    }
    return suma;
}

console.log(sumatoriaHastaCien());  // Devuelve 5050



//4
function textoEnMayusculas(texto) {
    for (let i = 0; i < texto.length; i++) {
        console.log(texto[i].toUpperCase());
    }
}
textoEnMayusculas('practicando el uso de los ciclos o bucles');
//5
function soloPares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}

console.log(soloPares([1, 2, 3, 4, 5, 6])); // muestra [2, 4, 6]
