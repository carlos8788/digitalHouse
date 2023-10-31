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

/**
 * Local storage
Tenemos que capturar el item de local storage con el nombre "id", que sabemos se creó en otro script 
desarrollado por un compañero, e imprimirlo en el <h1> con id "idValue".

Para esto tenemos que:

Guardar el valor del item "id" en la variable "id".
Capturar, en la variable idValue, el <h1> con id idValue.
Asignarle al texto del <h1> el valor de la variable id.
 */

window.addEventListener('load', function () {

    let id = localStorage.getItem('id')

    let idValue = document.querySelector('#idValue')

    idValue.innerHTML = id

})

/**
 * Session storage
Nos piden que creemos en sessionStorage un item con el nombre "bgColor" con el valor 
"red" para que desde otro script puedan cambiar el color del body. Además, nos piden
 que eliminemos el item "font".
 */

window.addEventListener('load', function () {

    localStorage.setItem('bgColor', 'red')
    localStorage.removeItem('font')
    //
})