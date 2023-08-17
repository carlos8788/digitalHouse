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

// if(peliculaIndex !== -1) {
//     peliculas[peliculaIndex] = {...peliculas[peliculaIndex], ...body}
// }

// Alternativa de spread operated
Object.assign(peliculas[peliculaIndex], body)

console.log(peliculas);