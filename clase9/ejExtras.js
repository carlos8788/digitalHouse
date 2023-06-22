/**
1. Crear una función que pida un valor por parámetro y muestre los 10 números
siguientes.
*/

function mostrar10Siguentes(numero){
    for(let i=numero+1 ; i <= numero+10 ; i++){
        console.log(i)
    }
}
// mostrar10Siguentes(100);

// 2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
function imprimirNumeros(){
    for(let i=1 ; i <= 57 ; i = i+3){
        console.log(i)
    }
}

// imprimirNumeros();

// 3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.

function sumatoria(){
    suma = 0;
    for(let i=0 ; i <= 100 ; i++){
        suma = suma + i; // suma += i;
    }
    return suma;
}

// console.log(sumatoria())

/*4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase.*/

function mayusculas(texto){
    let cadena = ''
    for(let i=0 ; i < texto.length ; i++){
        cadena += texto[i].toUpperCase()
    }
    return cadena
}

// console.log(mayusculas("practicando el uso de los ciclos o bucles"))

/*
5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
número par es aquel que se puede dividir entre 2. 
*/

let array = [100, 300, 2, 84, 1, 29]

const listPar = lista => {
    let listaPar = []
    for(let i=0 ; i < lista.length ; i++){
        if(lista[i] % 2 === 0){
            listaPar.push(lista[i])
        }
    }
    return listaPar
}

console.log(listPar(array))