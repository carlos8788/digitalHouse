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

/**
 * En Digital House somos algo fanáticos de la saga de Star Wars y queremos que el mundo lo sepa. Por eso, queremos consumir una API (https://swapi.dev/api/people) que nos provee de los personajes principales de la saga. 


Al consumir esta API, la misma nos provee la información en un objeto con las propiedades:


{

    "count": 82, 

    "results": [] // acá vienen los personajes

}


En el array de personajes, cada personaje es un objeto literal con las siguientes propiedades:


{

     "name": "Luke Skywalker", 

     "eye_color": "blue", 

     "birth_year": "19BBY", 

     "gender": "male", 

}


Lo que deseamos es mostrar en el documento HTML un listado
de personajes en donde cada uno tenga el nombre (name) 
y el año de nacimiento (birth_year). Algo así:


Luke Skywalker / 19BBY


Completemos el siguiente código:
 */

const list = document.querySelector("ul");

fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
        const characters = data.results;
        for (let i = 0; i < characters.length; i++) {

            list.innerHTML += "<li>" + characters[i].name + " / " + characters[i].birth_year + "</li>"
        }
    })
/**
 * ¡Saludando a nuestros visitantes!
Nos gustaría personalizar un mensaje de bienvenida en nuestra página web.


Queremos que en la etiqueta <h2> se cargue el siguiente texto: 
"Hola visitante", si es que no hay información del visitante en 
el almacenamiento local del navegador. O que, en vez de la 
palabra “visitante”, se muestre el nombre de la persona 
que está en el almacenamiento local.


Para esto, dentro del almacenamiento local del navegador, 
nos indican que debemos preguntar por la propiedad "user" 
que es la que guarda el nombre de la persona.


Completemos el siguiente código:
 */

// completa el código
window.addEventListener('load', function () {

    const h2 = document.querySelector("h2");

    if (localStorage.getItem("user")) {
        h2.innerText = "Hola " + localStorage.getItem("user");
    } else {
        h2.innerText = "Hola visitante";
    }
})
/**
 * Recordando a la persona que nos visita
La anterior funcionalidad quedó excelente, pero
 ahora queremos darle la oportunidad a la persona que 
 nos visita de que sea ella quien almacene sus datos.


Para ello dispusimos de un botón en nuestro documento 
que, al hacerle clic, deberá guardar la información del 
usuario, la cual está almacenada en una variable 
llamada userInfo (que es un objeto literal) dentro 
del almacenamiento local, en una propiedad llamada user. 


Pero ATENCIÓN, la información solamente deberá ser 
guardada en el escenario donde NO EXISTA.


Nuestra misión será completar el siguiente código:
 */


// completa el código
window.addEventListener('load', function () {
    const button = document.querySelector("button");
    const h2 = document.querySelector("h2");

    button.addEventListener("click", function () {
        if (!localStorage.getItem("user")) {
            localStorage.setItem("user", JSON.stringify(userInfo))
        }
    })
});