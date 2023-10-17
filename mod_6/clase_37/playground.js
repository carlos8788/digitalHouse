//  Utilizando promesas
/**
 * Vamos a practicar un poco el manejo de promesas en JavaScript. 
Recordemos que las promesas nos permiten ejecutar código asincrónico, 
es decir, que a una función que devuelve una promesa, puedo concatenarle 
el método then, que solo se va a ejecutar cuando la función haya concluido. 
En este ejemplo, tenemos la función buscarProducto que espera un id 
de producto y devuelve una promesa.

Nuestro objetivo es concatenar el método then al final de la ejecución 
de la función y hacer un console log del parámetro que recibe.
 */

buscarProducto(1).then(data => console.log(data));

/**
 * Y si la promesa falla?
Las promesas, además de manejar el resultado de código asincrónico, 
también nos permiten saber si el código no se pudo ejecutar con éxito. 
El manejo de errores en las promesas se hace concatenando, al final del método 
(o métodos) then, un método especial llamado catch. Este método se va a ejecutar 
solo si hubo un error en alguno de los métodos then anteriores, 
es decir, si alguna de las promesas falló.

En este ejemplo, tenemos la función buscarProducto. 
En el método then, mostramos por consola el producto encontrado. 
Nuestro objetivo ahora es agregar un método catch para el caso de 
que buscarProducto falle. Dentro del método catch vamos a agregar un console log del error.
 */

buscarProducto(1)
    .then(producto => {
    console.log(producto)})
    .catch(error => console.log(error))



// Sequelize

/**
 * Creando un modelo
Nuestra base de datos cuenta con una tabla llamada usuarios que tiene tres columnas: nombre, email y password (todas del tipo string).

El objetivo de este ejercicio es poder crear un modelo asociado a la tabla usuarios.

Para crear nuestro modelo vamos a usar el método define del objeto sequilize. 
Este método espera dos parámetros: el primero es el nombre de la tabla y 
el segundo un JSON, cuyas claves son los nombres de las columnas y los valores el tipo de dato.
 */

const Sequelize = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('usuarios',
	{
		nombre:Sequelize.STRING,
		email:Sequelize.STRING,
		password:Sequelize.STRING
	}
	,
	{

		tableName: 'usuarios'	//Tu código aquí
	}
);

module.exports = Usuario;

/**
 * Evitando errores a la hora de crear un modelo
A la hora de configurar nuestros modelos, Sequelize hace algunas suposiciones respecto de 
nuestras tablas. Una de ellas es que espera que todas nuestras tablas tengan las columnas created_at y updated_at.

Si creamos un modelo de una tabla que no tenga alguna de estas columnas, podemos encontrarnos 
con el clásico error: "Unknown column 'createdAt' in 'field list'".

Para evitar esto, debemos decirle explícitamente a Sequelize que no vamos a usar ninguna 
de las columnas created_at o updated_at. Para hacer esto es necesario pasar, como tercer 
parámetro del método define, un JSON con esta estructura: {timestamps: false}.

En este ejemplo ya tenemos configurado el modelo para la tabla usuarios, pero necesitamos 
aclarar que no tenemos las columnas created_at o updated_at. Nuestro objetivo va a ser agregar la configuración correspondiente.
 */

const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define('usuarios',{
    nombre: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
}, {
    timestamps: false
});

module.exports = Usuario;


// findAll, findByPk, findOne //////////////////////////////////

/**
 * findAll
﻿Para esta ocasión, debemos consultar nuestra base de datos, 
pero con un único detalle: lo vamos a hacer a través de Sequelize.

Primero debemos requerir los modelos, que allí es donde se encuentra 
la conexión con las tablas. La carpeta de models se encuentra en la 
carpeta database, un directorio antes de donde estamos construyendo nuestro archivo.

Vamos a crear una variable llamada usuarios que contenga un array vacío.

Luego, debemos terminar la consulta llamando al método correcto 
para traer todos los registros que se encuentren en el modelo Usuario. 
Una vez completado eso, vamos a guardar el resultado en la variable que 
creamos anteriormente, usuarios.
 */

const db = require('../database/models');

let usuarios = []

db.Usuario.findAll()
    .then(response => usuarios = response)



/**
 * findByPk
Esta vez necesitamos mostrar el perfil de un usuario en particular, ya tenemos 
ciertas facilidades como el require de la db y el controlador creado, pero falta el método y algo más. 

¿Qué más falta?

En este caso el id del usuario viaja a través de la URL como un 
parámetro llamado id simplemente. Una vez obtenido el resultado 
de la promesa, debemos hacer un console.log del mismo.
 */

const db = require('../database/models');

let controller = {
    profile: (req, res) => {
        db.Usuario.findByPk(req.params.id).then((resultado) => {
            console.log(resultado)
        })
    }
}

/**
 * findOne
Necesitamos buscar un usuario, pero no tenemos la lógica creada. Hicimos una parte, 
pero faltan ciertas cosas, en particular, saber que método vamos a usar y cómo implementarlo.

Nuestra tarea, ahora, será buscar un usuario que se identifica con el nombre: John.

¿Qué método podemos utilizar?
 */
const db = require('../database/models');

db.Usuario.findOne({
    where: {
        nombre: 'John'
    }
}).then((resultado) => {
    if(resultado) {
        console.log(resultado.dataValues); 
    } else {
        console.log('Usuario no encontrado');
    }
});



// Where y operadores //////////////////////////////////////


//  * Trayendo todas las películas
/**

A partir de nuestro modelo Peliculas vamos a recuperar todas las 
películas de nuestra base de datos y hacer console log del resultado.

Para esto podemos usar el método findAll del modelo Peliculas. Recordemos que este método es asincrónico.
 */

const Peliculas = require('model/peliculas.js');

Peliculas.findAll().then(resultado => console.log(resultado))

/**
 * 
 * Trayendo pelis por ID
 * 
A partir de nuestro modelo Peliculas vamos a recuperar la película con el id 1.

Sequelize nos ofrece el método findByPk que recupera un elemento de la base en función de su primary key. Podemos usar este método a partir de nuestro objeto Peliculas.

Tengamos en cuenta que este método es asincrónico, por lo que será necesario trabajar con promises.
 */

const Peliculas = require('model/peliculas.js');

Peliculas.findByPk(1).then(resultado => console.log(resultado))

/**
 * Trayendo productos ordenados
 * 
 * En este ejercicio el objetivo va a ser traer todos los productos ordenados por precio, de menor a mayor.

Recordemos que dentro del método findAll podemos pasar un JSON que tenga como clave la palabra order y cuyo 
valor sea un array indicando sobre qué columna o columnas vamos a ordenar y qué tipo de ordenamiento va a ser: ASC o DESC.
 */

// Order y Limit ////////////////////////////////
const Producto = require('model/productos.js');

Producto.findAll({
	order:[["precio","ASC"]]
}).then(productos => {
	console.log(productos)
});

/**
 * Paginando resultados
Cuando devolvemos al usuario un listado, por lo general, es recomendable ir 
paginando esos resultados para no traer tanta información junta de la base de datos.

En este ejemplo, estamos ejecutando un findAll sobre el modelo Producto. El 
objetivo va a ser pasar un parámetro al método findAll para ejecutar un limit de MySQL y traer tan solo los primeros 5 productos.
 */

const Producto = require('model/productos.js');

Producto.findAll({
	limit:5
}).then(productos => {
	console.log(productos)
});