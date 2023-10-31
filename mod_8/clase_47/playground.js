/**
 * Vamos a usar FETCH por GET
Es hora de poner en práctica lo visto hasta ahora. Si bien parece que usar fetch es sencillo, 
veamos de hacerlo al menos una vez.
Para eso vamos a tener que:

1) Escribir la función de un fetch que ejecute un GET en la 
URL: 'https://api.chucknorris.io/jokes/random'.

2) En el primer then, retornar el JSON de lo que recibimos por parámetro.

3) En el segundo then, hay que imprimir por consola lo que recibe esa función por parámetro.
 */

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => console.log(data))

