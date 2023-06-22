/**
 * Tabla de multiplicar
Uno de los equipos de desarrollo te pide ayuda para desarrollar un código, donde se pueda
visualizar la tabla de multiplicar del 1 al 10. El equipo indica que puedes usar algunos de los
ciclos o bucles aprendidos: for - while o do while,

Para ayudar al equipo de desarrollo, tu responsabilidad será:
1. Crear una función que no reciba ningún parámetro. Tendrá la responsabilidad de
generar de manera automática la tabla de multiplicar del 1 al 10.
2. Lo ideal es que función muestre al usuario algo así:
 */
// Ejercicio 2
function tablasDeMultiplicar(){
    for(let i=1; i<=10; i++){
        console.log('Esta es la tabla de multiplicar de '+ i)
        for( let j=1; j<=10 ; j++){
            console.log(i + ' x ' + j + ' = ' + i*j)
        }
        console.log('\n')
    }
}

tablasDeMultiplicar()