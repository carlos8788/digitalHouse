/*Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa mi primera calculadora. Queremos que, usando estructura
switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se
hará en base a dos valores suministrados y al tipo de operación indicada:
“sumar”, “restar”, “multiplicar”, “dividir”.
Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la
respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle
un mensaje al usuario que le informe que “Las operaciones aceptadas son: sumar
- restar- multiplicar- dividir”.
A continuación te dejamos un diagrama de flujo, para que te des una idea de la lógica que
podemos encontrar en una calculadora. Recordá igualmente que en tu caso debes usar la
estructura switch*/

let operacion = 'sumar';
const valor1= 10
const valor2= 20

switch (operacion){
    case 'sumar':
        console.log(`La suma es: ${valor1 + valor2}`);
        break;
    case 'restar':
        console.log(`La resta es: ${valor1 - valor2}`);
        break;
    case 'multiplicar':
        console.log(`La multiplicacion es: ${valor1 * valor2}`);
        break;
    case 'dividir”':
        console.log(`La division es: ${valor1 / valor2}`);
        break;
    default:
        console.log('No se puede realizar la operación');
        break;
}