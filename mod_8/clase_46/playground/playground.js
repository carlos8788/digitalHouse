/**
 * onfocus
Estamos buscando darle un poco más de dinamismo a nuestro sitio web 
y por eso queremos, ahora que tenemos a disposición las 
herramientas de JavaScript en el front-end, que empiecen a 
pasar cosas cuando el usuario navega por nuestra página. 
Por ejemplo, que el fondo del input de un formulario se 
vuelva rosa al hacer clic en el mismo.
Para ello debemos completar las siguentes tareas:

Capturar el input con id "nombre" y guardarlo dentro de la 
variable "elNombre".
Asignarle el evento "focus" a la variable que almacena ese input.
Cuando el input esta en foco, que el fondo cambie a color rosa.
 */

window.addEventListener('load', function () {

    const elNombre = document.querySelector('#nombre');


    elNombre.addEventListener('focus', function () {

        elNombre.style.backgroundColor = 'pink';
    });
});
/**
 * onblur
Tenemos un usuario que está tratando de iniciar sesión en 
nuestro sitio y queremos mejorar su experiencia como usuario

Para ello, haremos lo siguiente:

Almacenar dentro de una variable con nombre "elUsuario", 
el input que tiene como id "user".
Asignar a esa variable el evento blur para detectar cuando 
el usuario haga clic fuera del input.
Cambiar el color del input a "plum" cuando el usuario ejecute 
el evento blur.
 */

window.addEventListener('load', function () {

    const elUsuario = document.querySelector('#user');

    elUsuario.addEventListener('blur', function () {

        elUsuario.style.backgroundColor = 'plum';
    });
});

/**
 * onchange
Ahora que conocemos más sobre eventos del formulario, 
queremos que, cuando una persona haga algún cambio dentro 
de un input, el color del <body> cambie a rojo.
Para eso necesitamos capturar el input con id "miInput" 
dentro de la variable "miInput", asignarle el evento change y 
cambiarle el color cuando se realice el cambio.
 */

window.addEventListener('load', function () {
    // Capturar el input con id "miInput" y almacenarlo en la variable "miInput"
    const miInput = document.querySelector('#miInput');

    // Asignar el evento "change" a "miInput"
    miInput.addEventListener('change', function () {
        // Cambiar el color del <body> a rojo cuando el evento change es disparado
        document.body.style.backgroundColor = 'red';
    });
});

/**
 * onsubmit
Tenemos un documento HTML dentro del cual tenemos un formulario y 
un mensaje oculto para el usuario. Queremos que cuando el usuario 
pulse en enviar se oculte el formulario y se muestre el mensaje 
oculto.

Para ello, haremos lo siguiente:

Capturar el formulario con id "miForm" en la variable "miForm".
Capturar el mensaje dentro de la etiqueta <h1> en la variable 
"mensajeOculto".
Asignar a la variable "miForm" el evento "submit" para detectar 
cuándo se envía el formulario.
Cambiar el display del formulario a "none".
Cambiar el display del mensaje a "block".
 */

window.addEventListener('load', function () {
    const miForm = document.querySelector('#miForm');

    const mensajeOculto = document.querySelector('h1');

    // 3. Asignar el evento "submit" a "miForm"
    miForm.addEventListener('submit', function (event) {

        event.preventDefault();
        miForm.style.display = 'none';
        mensajeOculto.style.display = 'block';
    });
});

/**
 * Validaciones
Bastante lo hemos mencionado en el átomo anterior: antes de enviar 
datos al servidor, es importante asegurarse de que la información 
suministrada por parte de la persona visitante sea la que justamente 
estamos esperando recibir para posteriormente procesar.

Esto se denomina validación "on time" y no solamente nos sirve para 
procurar una limpieza de los datos, sino que a su vez nos ayuda a 
garantizar una excelente user experience. Pues qué molesto que es 
cuando teniendo un error en el front-end, es necesario enviar la 
información al servidor para que este la verifique y nos haga ver 
el error cometido, ¿no?

Los procesos de validación no son para nada triviales, por el 
contrario, son una parte fundamental de nuestro proceso como 
desarrolladores. Además, vale la pena aclarar que nunca está de 
más sumar capas de validación a nuestro sistema. Así como son 
necesarias las del back-end, de igual manera lo son las que 
implementamos del lado del front-end.
 */

/**
 * Prevent default
Antes de empezar a validar...

Debemos crear la variable formulario y almacenar en ella el formulario 
del HTML. Una vez capturado, deberemos asignarle el evento "submit" y 
prevenir el comportamiento por defecto del formulario.

Para este ejercicio, teenmos que pasarle al callback del evento 
la variable con nombre evento.
 */

window.addEventListener('load', function() {
    
    const formulario = document.querySelector('form');

    
    formulario.addEventListener('submit', function(evento) {
        
        evento.preventDefault();
    });
});


/***
 * Validando campos
Validemos que los datos que completa el usuario sean correctos.

Para eso debemos:

﻿Capturar el input con id nombre en la variable nombre.
Si el nombre está vacío, hacer un console.log() con el texto 
'Hubo un error en el nombre'.
Capturar el input con id password en la variable password.
Si el password tiene menos de 4 caracteres, hacer un console.log() 
con el texto 'Hubo un error en el password'.
 */

window.addEventListener('load', function() {
    // Capturar el formulario
    const formulario = document.querySelector('form');

    // Capturar los inputs
    const nombre = document.querySelector('#nombre');
    const password = document.querySelector('#password');

    formulario.addEventListener('submit', function(evento) {
        // Prevenir el comportamiento por defecto del formulario
        evento.preventDefault();

        // Validar el campo nombre
        if (nombre.value.trim() === "") {
            console.log('Hubo un error en el nombre');
        }

        // Validar el campo password
        if (password.value.length < 4) {
            console.log('Hubo un error en el password');
        }

        // Si necesitas enviar el formulario después de validar, puedes llamar a formulario.submit();
    });
});
