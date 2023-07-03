/*Instrucciones
1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
2. Desarrollar el programa traductor condicional. La idea es que si el usuario ingresa
una palabra como “perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le devuelva la
misma palabra traducida al idioma inglés. Te recomendamos usar la estructura
switch. Puedes ayudarte con Google Traductor.
En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario un mensaje
que le informe que “La palabra ingresada es incorrecta”.*/

let palabra = 'perro';

switch (palabra){
    case 'puerta':
        console.log('door');
        break;
    case 'perro':
        console.log('dog');
        break;
    case 'ventana':
        console.log('window');
        break;
    case 'mesa':
        console.log('table');
        break;
    case 'gato':
        console.log('cat');
        break;
    default:
        console.log('No se puede traducir la palabra');
        break;
}