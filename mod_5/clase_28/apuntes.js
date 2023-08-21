

let peliculas = [
    {
        id: 1,
        titulo: 'Spider-Man: Lejos de casa',
        duracion: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracion: 100,
        genero: 'Animación'
    },
    {
        id: 3,
        titulo: 'X-Men: Fénix Oscura',
        duracion: 113,
        genero: 'Acción'
    }
];

console.log(peliculas);

const id = 3

const body = {
    titulo: '123',
    duracion: 120,
    genero: 'Aventuras'
}

let peliculaIndex = peliculas.findIndex(pel => pel.id === id)
const peli = peliculas.find(pel => pel.id === id)
console.log(peli);
// if(peliculaIndex !== -1) {
//     peliculas[peliculaIndex] = {...peliculas[peliculaIndex], ...body}
// }

// Alternativa de spread operated
Object.assign(peliculas[peliculaIndex], body)

console.log(peliculas);

const body2 = {
    titulo: '654987',
    duracion: 120,
    genero: 'asd'
}

peliculas.forEach((peli, index) => {
    if (peli.id === id) {
        peliculas[index] = { ...peli, ...body2 }
        console.log(peli)
    }

})

console.log(peliculas);

let celulares = [
    {
        id: 1,
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        id: 2,
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        id: 3,
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        id: 4,
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

const listaCelulares = celulares.filter(cel => cel.id !== id)
console.log(listaCelulares);