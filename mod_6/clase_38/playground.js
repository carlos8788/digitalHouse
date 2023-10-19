// * * * * * * * * * * * * * * * * * * * CREATE * * * * * * * * * *

/**
 * Creando un usuario
Imaginemos que tenemos un modelo de Sequelize llamado Usuario. 
Este modelo posee tres atributos: nombre, email, password, todos ellos del tipo string.

Lo que debemos hacer es, a partir de este modelo, insertar en la 
base de datos un usuario indicando un valor para cada atributo.

Para poder resolver esto, recordemos que debemos usar el método create del modelo.
 */

const Usuario = require('model/usuario.js');

Usuario.create({
    nombre: 'Luis',
    email: 'luis@email.com',
    password: '123'
})

/**
 * Creando usuarios
En determinadas situaciones necesitamos subir más de un registro a la 
base de datos. Si bien podemos usar el método create varias veces, 
Sequelize nos facilita esta tarea con el método bulkCreate. Este método 
recibe un array, en donde cada posición es un objeto con las mismas 
características del objeto que recibe el método create. Es decir, el 
método bulkCreate es como el método create, pero con la ventaja que 
permite insertar varios registros de una sola vez.

En este ejemplo, tenemos el modelo Pelicula. Nuestro objetivo es 
insertar dos películas usando el método bulkCreate. Cada película 
a insertar tiene que tener un título y un género.

IMPORTANTE: Para los nombres de los atributos usar "titulo" y "genero" sin tilde.
 */

const Pelicula = require('model/pelicula.js');

Pelicula.bulkCreate([
    {
        titulo: 'Luis',
        genero: 'luis@email.com'
    },
    {
        titulo: 'Luis2',
        genero: 'luis2@email.com'
    }

]
)

/**
 * Productos web
En este ejemplo tenemos el controlador productoController que tiene el método create. 
A su vez, hay un formulario que tiene los campos nombre y precio y que envía esos 
datos a nuestro controller, mediante un request del tipo POST.

La idea del ejercicio es poder recuperar ambos campos y, usando el modelo Producto,
 insertarlos en nuestra base.

Para ello va a ser necesario usar el método create del modelo Producto. 
Como parámetro del método debemos pasar un JSON con los atributos nombre
y precio. El valor para estos atributos los vamos a tener que recuperar a partir del request.
 * 
 */

const Producto = require('model/producto.js');

const productoController = {
    create: (req, res) => {
        const { nombre, precio } = req.body;


        Producto.create({
            nombre: nombre,
            precio: precio
        })
            .then(producto => {
                res.send('Producto creado');
            })
            .catch(err => {
                console.error("Error al crear el producto:", err);
                res.status(500).send("Error al crear el producto.");
            });
    }
}


// * * * * * * * * * * * * * * * * * * * UPDATE * * * * * * * * * *


/**
 * Actualizando el precio
Tenemos en nuestra base un producto cuyo id es igual a 1. Nuestro objetivo es actualizar el precio con el valor 1234.

Para esto vamos a utilizar el método update de nuestro modelo Producto. El método update recibe dos parámetros: 
el primero es un JSON en donde cada atributo es un nombre de columna y cada valor es aquel que queremos guardar 
en nuestra base; el segundo parámetro es un JSON con una query para identificar qué registros se deben actualizar.
 */

const Producto = require('model/producto.js');

Producto.update(
    {
        precio: 1234
    },
    {
        where: {
            id: 1
        }
    }
)


/**
 * Actualizando serie
En determinadas circunstancias podemos usar el método update para actualizar más de un registro.

En este ejemplo, queremos cambiar el valor de la columna "genero" de 
todas aquellas series cuyo género sea igual a "comedia" y reemplazarlo por el valor "sitcom".

Para el segundo parámetro del método update debemos hacer un where por la columna "genero".
 */


const Serie = require('model/serie.js');

Serie.update(
    {
        genero: 'sitcom'
    },
    {
        where: {
            genero: "comedia"
        }
    }
)

/**
 * Actualizando usuario
Para algunos casos vamos a necesitar actualizar un registro en la base o crearlo 
en caso de que no exista. Para estos casos podemos usar el método upsert de Sequelize.

En este ejemplo, vamos a actualizar un registro de usuario. Vamos a pasar como 
valores para el upsert el email y la edad. Si el usuario ya existe, debemos 
actualizar la edad, caso contrario debemos insertar el usuario (con email y edad) en la base.

Recordemos que para usar el upsert debemos pasar al menos un atributo que sea 
único (en este caso el email), para así poder identificar el registro en la base.
 */

const Usuario = require('model/usuario.js');

Usuario.upsert(
    {
        email: 'un@email.com',
        edad: 25
    }
)


// * * * * * * * * * * * * * * * * * * * DELETE * * * * * * * * * *

/**
 * Eliminar una película
De la misma manera que insertamos y actualizamos datos en nuestra base, 
Sequelize también nos permite eliminar registros. Para esta tarea nos 
provee el método destroy, que lo podemos ejecutar sobre cualquiera de nuestros modelos.

Este método espera como parámetro un JSON con una query del tipo where para identificar la fila a eliminar.

El objetivo de este ejercicio es eliminar la película con id igual a 3.
 */


const Pelicula = require('model/pelicula.js');

Pelicula.destroy(
    {
        where: { id: 3 }
    }
)

/**
 * Eliminar un usuario
De igual forma que se puede eliminar un registro por su id, se puede hacer 
lo mismo por alguna otra columna que identifique al elemento unívocamente.

En este ejercicio, vamos a borrar un usuario en función de su email. 
El objetivo es eliminar al usuario cuyo email sea igual a "kenny@south-park.com".

Para ello vamos a utilizar el método destroy del modelo Usuario, 
pasando como parámetro una query que haga un where por email.
 */

const Usuario = require('model/usuario.js');

Usuario.destroy(
    {
        where: {
            email: "kenny@south-park.com"
        }
    }
)


/**
 * Eliminar varios usuarios
El método destroy permite, al igual que el select, pasar otros operados a la query. 
En vez de utilizar una comparación por el operador igual (la comparación por defecto) podemos usar un like.

En este ejemplo, vamos a eliminar a todos los usuarios cuyo proveedor de correo sea aol.com. 
Es decir, aquellos cuyo email termine en @aol.com.

Para ello vamos a ejecutar el método destroy del modelo Usuario. Dentro del where 
(en el método destroy), vamos a pasar un JSON con el nombre de la columna y 
cuyo valor sea un nuevo JSON con la siguiente sintaxis: email: { [Op.like]: '%aol.com'}
 * 
 */


const Sequelize = require('sequelize');
const Usuario = require('model/usuario.js');
const Op = Sequelize.Op;

Usuario.destroy(
    {
        where: {
            email: { [Op.like]: '%aol.com' }
        }
    }
)

// ----------------------------------------------------------------
// --------------- Desafío Sequelize ------------------------------
// ----------------------------------------------------------------

/**

Nuestro cliente IbeiZon quedó bastante satisfecho con nuestro desempeño inicial y 
ha decidido seguir contando con nuestros espectaculares conocimientos de desarrollo.


En esta oportunidad, nos solicita seguir trabajando con la misma base de datos y 
la misma tabla de productos. Y, puntualmente, solicita crear un método dentro del 
controlador (productsController.js) que permita almacenar los datos que llegan en 
el request desde un formulario y que, después de almacenar la información en la 
tabla, el mismo redireccione a la ruta /productos.


Entendiendo que la tabla de productos tiene las siguientes columnas:


id

nombre (VARCHAR(200))

descripcion (TEXT)

precio (DECIMAL)


Y que el formulario cuenta con los siguientes campos:


<input name="nombreProducto" type="text">

<input name="precioProducto" type="number">

<textarea name="descripcionProducto"></textarea>


Nuestra misión será entonces completar el siguiente código dentro del controlador:
 */

const db = require('../database/models');

const controller = {
    almacenarEnDB: (req, res) => {
        db.Product.create(
            {
                nombre: req.body.nombreProducto,
                descripcion: req.body.descripcionProducto,
                precio: req.body.precioProducto,
            }
        ).then(resp => res.redirect('/productos'))

    }
}

module.exports = controller;

/**
 * Para usar el método del controlador que completamos anteriormente, 
 * se hace necesario ahora disponer de una ruta que lo implemente. La ruta será /productos.


Para ello, dentro del archivo de rutas productsRoutes.js deberemos crear esa 
ruta para que use el método almacenarEnDB. Tengamos presente que siempre que deseemos 
almacenar información en la base de datos deberemos hacer que la información viaje por POST.


Completemos el siguiente archivo:
 */

const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.index);

router.post('/', productsController.almacenarEnDB);

module.exports = router;



/**
 * 
 * Ahora nos interesa completar el método editarRegistro presente en el controlador.


El mismo deberá editar el registro que corresponda con el ID que nos llega desde la ruta. 
Si por ejemplo la ruta fuera esta: "/productos/3", esto significa que se deberá editar el 
producto con ID 3. Posteriormente, después de la edición, se deberá redireccionar a la ruta: "/productos". 


La información que se almacenará en este proceso de edición viajará desde un formulario con los siguientes campos:


<input name="nombreEditado" type="text">

<input name="precioEditado" type="number">

<textarea name="descripcionEditada"></textarea>


Completemos el método editarRegistro del controlador:
 */

const db = require('../database/models');

const controller = {
    almacenarEnDB: (req, res) => {
        db.Product
            .create({
                nombre: req.body.nombreProducto,
                precio: req.body.precioProducto,
                descripcion: req.body.descripcionProducto
            })
            .then(producto => {
                res.redirect('/productos');
            })
    },
    editarRegistro: (req, res) => {
        db.Product.update(
            {
                nombre: req.body.nombreEditado,
                descripcion: req.body.descripcionEditada,
                precio: req.body.precioEditado,
            },
            {
                where: { id: req.params.id }
            }
        )
            .then(() => res.redirect('/productos'))
    },
}

module.exports = controller;


/***
 * Ya falta poco para completar el proceso de CRUD. Ahora nuestra misión será la de completar el 
 * método borrarRegistro presente en el controlador.


El método deberá eliminar el registro que corresponda con el ID que nos llega desde la ruta. 
Si por ejemplo la ruta fuera esta: "/productos/5", esto significa que se deberá eliminar el 
producto con ID 5. Posteriormente, después de eliminar el registro, se deberá redireccionar a la ruta: "/productos". 


Completemos el método borrarRegistro del controlador:
 * 
 */

const db = require('../database/models');

const controller = {
    almacenarEnDB: (req, res) => {
        db.Product
            .create({
                nombre: req.body.nombreProducto,
                precio: req.body.precioProducto,
                descripcion: req.body.descripcionProducto
            })
            .then(producto => {
                res.redirect('/productos');
            })
    },
    editarRegistro: (req, res) => {
        db.Product
            .update(
                {
                    nombre: req.body.nombreEditado,
                    precio: req.body.precioEditado,
                    descripcion: req.body.descripcionEditada
                },
                {
                    where: { id: req.params.id }
                }
            )
            .then(() => {
                res.redirect('/productos');
            })
    },
    borrarRegistro: (req, res) => {
        db.Product.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        )
            .then(() => {
                res.redirect('/productos');
            })
    },
}

module.exports = controller;

/**
 * Finalmente, necesitamos llevar a cabo el proceso de edición y el proceso de eliminar. 
 * La idea es poder usar los métodos del controlador que completamos anteriormente. 
 * Se hace necesario ahora disponer de las siguientes dos rutas:


 /productos/28 (editará el producto con ID 28)

 /productos/11 (eliminará el producto con ID 11)


Para ello, dentro del archivo de rutas productsRoutes.js deberemos crear estas rutas para que use los métodos editarRegistro y borrarRegistro. 


Completemos el siguiente archivo:
 *  
 * 
 */

const express = require('express');
const router = express.Router();
 
const productsController = require('../controllers/productsController');
 
router.get('/', productsController.index);
router.post('/', productsController.almacenarEnDB);
router.put('/:id', productsController.editarRegistro)
router.delete('/:id', productsController.borrarRegistro)
 
module.exports = router;