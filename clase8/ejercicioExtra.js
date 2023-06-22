/**
 * 
 * 1. Crear una función encontrar el número, que reciba por parámetros un array de
números y un número. La función deberá evaluar si el número proporcionado existe o
no en el array. De existir debe devolver el mensaje “El número XX sí existe en el
array”. En el caso contrario debe mostrar el mensaje: “El valor solicitado no existe”.

2. Crear una función Juego de trompito, que reciba dos parámetros:
a. El primero, un array con las siguientes cadenas de texto: “Toma 1” ,”Toma 2”,
“Pon 1”, “Pon 2”, “Todos ponen”, “Toma todo”
b. El segundo parámetro será la cantidad de vueltas del trompito comprendidas
entre 2 y 6.

La función tendrá como responsabilidad generar un número aleatorio comprendido
entre 0 y 5. En función del resultado obtenido, se le debe devolver al usuario alguno de
los mensajes suministrados por el trompito. Por ejemplo: “Toma todo”.
Pista: investigar sobre las funciones Math.random() y Math.floor().

3. Crear una función sumatoria de pares e impares, que recibirá por parámetros un
array con diez valores numéricos. La función tendrá la responsabilidad de devolver al
usuario la sumatoria total de los números pares y de los números impares.
Pista: investigar sobre el operador módulo.
 * 
 */

function encontrarNumero(arrayNumero, numeroBuscado){
    let valor = arrayNumero.includes(numeroBuscado);
    return valor?`El número ${numeroBuscado} sí existe en el array`: 'El valor solicitado no existe';

}
// console.log(encontrarNumero([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))
const array = [
    'Toma 1',
    'Toma 2',
    'Pon 1',
    'Pon 2',
    'Todos ponen',
    'Toma todo'
    ]

function trompito(arrayOpciones, numero){
    Math.random(Math.floor())
}