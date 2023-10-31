const list = document.querySelector("ul");

let datos = {};

fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => datos = data)
    .then(console.log(datos))



