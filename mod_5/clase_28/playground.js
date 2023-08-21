// Creando nuestra primera ruta con Express

const express = require('express');
const router = express.Router();

router.get('/peliculas', (req, res) => {
    res.send('Listado de películas')
})

// Usando query string para filtrar

router.get('/productos', (req, res) => {
    res.send(req.query)
})

// Filtrando por precio

// const express = require('express');
// const router = express.Router();

const celulares = [
    {
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

router.get('/celulares', (req, res) => {
    const celularesFilter = celulares.filter(max => max.precio <= req.query.max)
    res.send(celularesFilter)
})

// Preparando la constante para trabajar con POST


// const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Recuperando información de POST


// const express = require('express');
// const router = express.Router();

router.post('/ver-body', (req, res) => {
    res.send(req.body)
})


// Asegurando la compatibilidad con PUT y DELETE

// const express = require('express');
const methodOverride = require('method-override');
const app = express();


app.use(methodOverride('_method'));

//Enviando datos de un formulario mediante PUT

<html>
    <head>
        <title>Formulario de registro</title>
    </head>
    <body>
        <form action="usuarios/actualizar?_method=PUT" method="POST">

        </form>
    </body>
</html>

// Vamos a tratar de crear una ruta JSON style

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

// const express = require('express');
// const routerp = express.Router();

router.put('pelicula/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const body = req.body
    let pelicula = peliculas.findIndex(pel => pel.id === id)

    if (pelicula !== -1) {
        peliculas[pelicula] = { ...peliculas[pelicula], ...body }
    }
    res.send(peliculas)
})

router.put('/pelicula/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const body = req.body

    peliculas.forEach((peli, index) => {
        if (peli.id === id) {
            peliculas[index] = { ...peli, ...body }
            console.log(peli)
        }

    })


    res.send(peliculas)
})

// Seteando un objeto con Data de POST


const express = require('express');
const router = express.Router();

let producto = {
    nombre: null,
    precio: null
};

router.post('/crear/producto', (req, res) => {
    const { nombre, precio } = req.body
    producto.nombre = nombre
    producto.precio = precio
    res.send(producto)
})



// Eliminando datos de un ARRAY

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

const express = require('express');
const router = express.Router();

router.delete('/celular/:id', (req, res) => {
    const id = parseInt(req.params.id)
    celulares  = celulares.filter(cel => cel.id !== id)
    res.send(celulares )
})


//