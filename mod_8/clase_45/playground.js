// Introducción a eventos: eventos on y addEventListener

// Método load

/**
 * 
 * Queremos empezar a escribir código JavaScript, pero es importante asegurarnos que 
 * primero se cargue todo el documento HTML para poder manipular los elementos.

Por eso debemos, usando addEventListener(), agregarle el evento "load" al objeto window.
 */

window.addEventListener('load', () => {
    console.log('Evento')
})


// Evento click

/**
 * Inspeccionemos un poco el código...

Estamos maquetando un sitio y queremos agregarle un evento al link "Contacto" de la barra de navegación. 

En el archivo script.js ya atrapamos ese elemento en la variable linkContacto.


Debemos, usando addEventListener(), agregarle el evento "click" al elemento que atrapamos. 
Y, para asegurarnos de que estemos haciendo bien las cosas, tenemos que realizar un paso más: 
dentro del callback, debemos hacer un console.log() del elemento sobre el cual se va a ejecutar el evento.
 */

window.addEventListener('load', function () {

    let linkContacto = document.querySelector('.contacto');

    linkContacto.addEventListener('click', () => {
        console.log('click')
    })

});


//Prevent default

/**
 * Antes de empezar a validar...

Debemos crear la variable formulario y almacenar en ella el formulario del HTML. 
Una vez capturado, deberemos asignarle el evento "submit" y prevenir el comportamiento por defecto del formulario.

Para este ejercicio, teenmos que pasarle al callback del evento la variable con nombre evento.

Para este ejercicio, tenemos que pasarle al callback del evento la variable con nombre evento.
 */

window.addEventListener('load', function () {

    const formulario = document.querySelector('form')

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault()
    })

});


// ****************************************************************
// Eventos de mouse


/**
 * Mouseover
Tenemos un sitio en desarrollo... por ahora solo hay un título.

En este ejercicio queremos:

 Capturar el <h1> y guardarlo en la variable titulo.
Cuando el usuario pase el mouse por encima de ese <h1>, se le debe agregar la clase "titulo", definida en el CSS.
 */
window.addEventListener('load', function () {

    const titulo = document.querySelector('h1')
    titulo.addEventListener('mouseover', () => {
        titulo.classList.add('titulo')
    })

});

// Mouseout

/**
 * Tenemos una página en construcción y queremos agregarle un poco de estilo a los
 * links de la barra de navegación para darle un poco de dinamismo hasta que esté terminada.

Por eso, debemos:

 Capturar todas las etiquetas <a> y almacenarlas en la variable links.
 Usando addEventListener(), le asignes a cada link el evento "mouseout".
¿Y qué queremos que pase cada vez que el mouse se aleja del link? Si el link no
tiene la clase "dark-mode", asignársela y si la tiene, quitársela... ¿Qué método de classlist nos sirve para resolver eso?
 */


// ****************************************************************
//Eventos de teclado


//onkeydown

/**
 * Estamos haciendo las validaciones de un formulario y en el nombre de usuario 
 * está fundamentalmente prohibido el uso de #hashtags para rellenarlo. Para asegurarnos de eso, debemos:

Capturar el input del usuario que tiene como id userName.

Haciendo uso del evento “keydown”, queremos que, en el caso de que el valor de la 
tecla presionada sea “#”, se dispare un alert con el siguiente mensaje: 

Está prohibido el uso de #hashtags!
 */

window.addEventListener('load', function () {

    // escribí tu codigo acá
    const userName = document.querySelector('#userName')

    userName.addEventListener('keydown', function (event) {
        if (event.key === '#') {
            alert('Está prohibido el uso de #hashtags!')

        }
    })
});

// onkeyup
/**
 * Capturando las teclas.

En este ejercicio debemos:

 Capturar el <input type="text" id="input"> y guardarlo en la variable input.
Cuando el usuario suelte una tecla en ese input , queremos que se dispare un 
alert con la frase : "Se presionó la tecla: " y el valor de la tecla liberada.
 */


// window.addEventListener('load', function () {
//     const input = document.querySelector('#input');
//     input.addEventListener('keyup', (e) => {
//         alert(`Se presionó la tecla: ${e.key}`);
//     });
// });


window.addEventListener('load', function () {
    const input = document.querySelector('#input');
    input.addEventListener('keyup', (event) => {
        alert('Se presionó la tecla: ' + event.key);
    });
});

//onkeypress

/**
 * A veces los programadores somos medio chusmas y bueno… nos gusta saber qué tecla 
 * aprieta el usuario, por ejemplo, cuando está rellenando los campos de un formulario. 


Queremos saber cuál es la tecla que se presiona dentro del input con ID ‘address’, 
guardarlo dentro de una variable con nombre "direccion" y que su valor se muestre en un alert.


Para eso, debemos:

Capturar el input y guardarlo dentro de la variable.

Ponerlo en escucha del evento.

Crear un alert con el valor del evento.

 */

window.addEventListener('load', function () {

    //escribí tu código acá
    const direccion = document.querySelector('#address');
    direccion.addEventListener('keypress', function (event) {

        alert("Se presionó la tecla: " + event.key);
    })

})



/**
 * No nos gusta la letra "x"
Tenemos un documento HTML dentro del cual no queremos permitir que 
una persona presione la tecla "x". Y, si esto sucediera, 
nos gustaría que el <body> cambie el color de fondo de blanco a naranja.
 */

// completa el código
window.addEventListener("keypress", function (e) {
    let key = e.key;
    const body = document.querySelector("body");

    if (key === 'x') {
        body.style.backgroundColor = "orange";
    }
})


/**
 * ¡Evitemos que esto se desenlace!
Tenemos un enlace <a> dentro del HTML que en su atributo href tiene una URL a la que no queremos acceder.
 Por lo tanto, queremos que al dar clic sobre ese enlace evitemos ir a dicha URL y que, además,
  se cambie el color del texto de negro a rojo. Ah, y también queremos que el texto del enlace
  diga: "este enlace no te llevará a ningún lado".
 */


window.addEventListener('load', function () {

    const specialAnchor = document.querySelector("a");

    specialAnchor.addEventListener('click', function (event) {
        event.preventDefault()
        this.href = '#'
        this.style.color = 'red'
        this.innerText = 'este enlace no te llevará a ningún lado'
    })

})

