/**
 * Instrucciones
1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
2. En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador,
para ello debes declarar las siguientes variables y almacenar en ellas los siguientes
datos del trabajador:
a. nombre
b. apellido
c. sueldoActual
d. porcentajeAumento
3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la
operación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100).
4. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo
sueldo.
5. Usando el console.log() y concatenando string, muestra en la consola de Visual
Studio Code los contenidos de cada una de las variables:
 */

let nombre = 'Pepe'
let apellido = 'Argento'
let sueldoActual = 2000
let porcentajeAumento = 25

let calculoAumento = sueldoActual * porcentajeAumento / 100

let nuevoSueldo = sueldoActual + calculoAumento

// console.log('Ha recibido un aumento del 25%: ' + calculoAumento)
// console.log('y su nuevo sueldo es de: ' + nuevoSueldo);

// console.log(8-15 == 8 || 7>6 = -2);

let rodadoMountainBike = 18;
let rodadoAurora = 24;

let marcaRodadoMasGrande = (rodadoMountainBike>rodadoAurora)? "rodado MountainBike":"rodadoAurora";

console.log("La bicicleta con  mayor rodado es la " + marcaRodadoMasGrande);


