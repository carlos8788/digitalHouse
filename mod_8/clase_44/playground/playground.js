/**
 * Manipulando elementos con JavaScript
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

En este ejercicio debemos:

 Crear la variable tituloPelicula.
Almacenar en esa variable el elemento h2 del documento HTML.
Deberemos usar el método del objeto document que nos permita seleccionar la etiqueta <h2> del documento.


 */

window.addEventListener('load', function () {

    const tituloPelicula = document.querySelector('h2')

});

/**
 * Manipulando elementos con JavaScript II
Tenemos un sitio HTML definido y queremos empezar a 
manipular sus elementos.

En este ejercicio debemos:

Crear la variable parrafos.
Almacenar en esa variable todos los párrafos del documento HTML.
Deberemos usar el método del objeto document que nos permita 
seleccionar todas las etiquetas <p> del documento.
 */

window.addEventListener('load', function () {

    const parrafos = document.querySelectorAll('p')

});

/**
 * Manipulando elementos por id
Tenemos un sitio HTML definido y queremos empezar a manipular 
sus elementos.

En este ejercicio debemos:

 Crear la variable pulpFiction.
Almacenar en esa variable el elemento <h3> con id "pulp-fiction".
Pero ojo, no queremos que utilices el método querySelector()...
 */

window.addEventListener('load', function () {

    // escribí tu código aquí
    const pulpFiction = document.getElementById('pulp-fiction')

});

/***
 * Manipulando elementos por nombre de clase
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

En este ejercicio debemos:

Crear la variable barraDeNavegacion.
Almacenar en esa variable el elemento <ul> con clase "nav-bar".
Pero ojo, no queremos que utilices el método querySelector()... 
 */
window.addEventListener('load', function () {

    // escribí tu código aquí
    const barraDeNavegacion = document.getElementByClassName("nav-bar")
});

/**
 * Sumando texto a un elemento con contenido
El subtítulo del <h3> nos quedó corto y queremos agregar un pequeño 
texto al final del mismo usando JavaScript.

Para eso debemos, usando el método innerText, seleccionar la etiqueta 
<h3> y sumarle el texto "usando código" al final.

No olvidemos agregar el espacio correspondiente para que no queden 
los textos encimados. Deberemos ver en el navegador el siguiente 
resultado:



Javascript Front

Agregando contenido usando código
 */
window.addEventListener('load', function () {

    document.querySelector('h3').innerText += " usando código";
});


/**
 * Agregando etiquetas
¡Agreguemos etiquetas!

Para este ejercicio queremos:

Seleccionar la etiqueta <body> usando querySelector()
Agregar la siguiente etiqueta tal cual está: <mark>Javascript ROCKS</mark>


Pero ojo: el <body> ya tiene las etiquetas <h1> y 
<h3> definidas y no queremos que se borren.
 */

window.addEventListener('load', function () {
    document.querySelector('body').innerHTML += ' <mark>Javascript ROCKS</mark>'
});


/**
 * Modificando estilos
Veamos cómo alterar los estilos de un documento HTML usando JavaScript.

Para este ejercicio debemos:

 Seleccionar el <body> y asignarle el color 'lightskyblue' para el fondo.
Seleccionar el <h2> y centrarlo con la propiedad text-align.
Seleccionar el <h4> y cambiar el texto a itálica con la propiedad font-style.
 */

window.addEventListener('load', function () {

    document.querySelector('body').style.backgroundColor = 'lightskyblue';

    document.querySelector('h2').style.textAlign = 'center';

    document.querySelector('h4').style.fontStyle = 'italic';
});


/**
 * ¡Modificando estilos a varios elementos a la vez!
Intentemos cambiarle el estilo a muchos elementos a la vez.

Recordemos el querySelectorAll(). Este método nos devolvía algo similar a un array...

Para este ejercicio queremos:

Crear la variable libros.
Almacenar en esa variable todos los <li> usando querySelectorAll()
Dentro del ciclo for of que está definido en el archivo, asignarle a cada 
libro el color 'orange', usando la propiedad color
 */

window.addEventListener('load', function () {
    const libros = document.querySelectorAll('li');

    for (let libro of libros) {
        libro.style.color = 'orange';
    }
});

/**
 * Agregando clases a un elemento
Para este ejercicio contamos con un pequeño sitio y una clase de 
CSS definida, pero todavía no se le asignó a ningún elemento.


Por eso debemos, usando JavaScript, seleccionar al <div> y 
asignarle la clase 'container' que ya se encuentra definida en el archivo styles.css.
 */

window.addEventListener('load', function () {
    // Seleccionar el <div>
    const divElement = document.querySelector('div');

    // Asignar la clase 'container' al <div>
    divElement.classList.add('container');
});

/**
 * Sacando clases a un elemento
Tenemos un <h1>, pero no nos gusta cómo se ve.

Queremos, usando JavaScript, seleccionar al <h1> y sacarle la clase 'titulo'.

Sugerencia: enviar la respuesta sin resolver, así se puede 
visualizar la diferencia una vez que se resuelva el ejercicio.
 */

window.addEventListener('load', function () {
    // Seleccionar el <h1>
    const h1Element = document.querySelector('h1');

    // Remover la clase 'titulo' del <h1>
    h1Element.classList.remove('titulo');
});


/**
 * Alternando clases
A ciegas...

Tenemos un sitio con algunos elementos y clases asignadas, pero no 
tenemos acceso al HTML, por lo tanto no podemos ver qué clases tiene cada elemento.

En este caso, queremos trabajar con la clase titulo-tuneado. 
Para eso debemos, usando JavaScript, preguntar si <h1> el tiene esa 
clase asignada para que, si no la tiene, se la asigne y, si la tiene, se la quite.
 */

window.addEventListener('load', function() {
    // Seleccionar el <h1>
    const h1Element = document.querySelector('h1');

    // Alternar la clase 'titulo-tuneado' en el <h1>
    h1Element.classList.toggle('titulo-tuneado');
});
