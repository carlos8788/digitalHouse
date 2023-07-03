/**
 * Saldo Bancario
El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:

1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.

2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.

3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
 */

let cuenta1 = [-100, 200, -600, 1000, 2500]
let cuenta2 = [600, -5000, 6000, 400]

function calcularSaldo(listaDeSaldo) {
    let saldoRetiro = 0
    let saldoTotal = 0
    let saldoDeposito = 0

    for(let i=0; i<listaDeSaldo.length; i++) {
        if(listaDeSaldo[i]>=0) {
            saldoDeposito += listaDeSaldo[i]
        }
        else{
            saldoRetiro += listaDeSaldo[i] 
        };
        saldoTotal = saldoDeposito + saldoRetiro
    }
    return {saldoDeposito, saldoRetiro, saldoTotal}
}
// console.log(calcularSaldo(cuenta1))
// console.log(calcularSaldo(cuenta2))

function mostrarCuenta(nombre, apellido, listaCuenta, funcionCallback){
    let datosCuenta = funcionCallback(listaCuenta)
    return "Nombre completo del cliente: " + nombre + " " + apellido 
            + ".\nCuenta: "+
            "\n\tSaldo depositado: " + datosCuenta.saldoDeposito
            + "\n\tSaldo retirado: " + datosCuenta.saldoRetiro
            + "\n\tSaldo total: " + datosCuenta.saldoTotal
}

console.log(mostrarCuenta('Luis', 'Perez', cuenta1 ,calcularSaldo))
console.log('\n\n')
console.log(mostrarCuenta('Lucas', 'Conzalez', cuenta2 ,calcularSaldo))