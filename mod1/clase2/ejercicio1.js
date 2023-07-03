/**
 * 
 * 1. En Visual Studio Code crear una carpeta de trabajo y dentro de ella crear un archivo
JavaScript (.js).

2. Para llevar un control automatizado en la venta de boletos para ingresar a un
partido de fútbol, el Tech Leader de tu equipo te asigna la responsabilidad de crear y
asignar valor a un conjunto de variables. Recordá tener presente el tipo de dato que
contienen.
A continuación te dejamos algunos ejemplos de variables que puedes crear: Nombre -
Apellido - Edad - Número de Teléfono - Socio (Valor booleano) - Fecha del partido -
Hora del partido - Número de silla - Precio del boleto (con valores decimales).

3. Usando el console.log(), muestra al usuario el valor asignado a cada variable.

4. Finalmente, utilizando el console.log() y el typeof(), muestra al usuario el tipo de
dato de cada una de las variables utilizadas.
 */

const usuario = {
    nombre: 'Pepe',
    apellido: 'Argento',
    edad: 40,
    numTel: 123465,
    socio: true,
    fechaDelPartido: '12/12/12',
    horaDelPartido: '10:50',
    numSilla: 30,
    precioBoleto: 45678.30
}

console.log(usuario);

console.log(typeof(usuario));
