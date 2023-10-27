// Relaciones 1:N


// Género


/*Imaginemos que ya tenemos creado un modelo para 
género y ahora queremos crear uno para película.

El objetivo va a ser indicar la relación que hay entre una película y un género en el modelo 
Pelicula. Es decir, una película pertenece a (belongsTo) un género.

Para setear esto va a ser necesario, luego de la declaración del modelo Pelicula, llamar al 
método belongsTo pasando como primer parámetro el modelo Genero. El segundo parámetro del 
método belongsTo va a ser un JSON con la configuración para el foreignKey y el as (alias del 
nombre de la relación). En nuestro caso, el foreignKey va a ser la columna llamada 
"genero_id" y vamos a indicar como alias "genero".*/

// const Sequelize = require('sequelize');
// const sequelize = require('../database');
// const Genero = require('model/genero.js');

// const Pelicula = sequelize.define('peliculas', {
//     titulo: Sequelize.STRING,
//     genero_id: Sequelize.INTEGER,
// });

// Pelicula.associate = modelos => {
//     Pelicula.belongsTo(modelos.Genero, {
//         as: 'generos',

//         foreingKey: 'genero_id'
//     })
// }


// module.exports = Pelicula;
const Sequelize = require('sequelize');
const sequelize = require('../database');
const Genero = require('model/genero.js');

const Pelicula = sequelize.define('peliculas', {
  titulo: Sequelize.STRING,
  genero_id: Sequelize.INTEGER,
});




Pelicula.belongsTo(Genero, {
  as: "genero",
  foreignKey: "genero_id"
})


module.exports = Pelicula;

/**
 * Para este ejercicio nuestra meta va a ser, luego de la definición del modelo de Genero, vincular a este con el modelo Pelicula.

En este caso, un género tiene muchas (has many) películas. Para indicar esto vamos a emplear el método hasMany del modelo Genero.

Para la configuración de la relación, el foreignKey va a ser la columna llamada "genero_id" y vamos a indicar como alias "peliculas".
 */

const Sequelize = require('sequelize');
const sequelize = require('../database');
const Pelicula = require('model/pelicula.js');

const Genero = sequelize.define('generos', {
  nombre: Sequelize.STRING,
});


Genero.hasMany(Pelicula,
  {
    foreignKey: 'genero_id',
    as: 'peliculas'
  }
)

module.exports = Genero;

/**
 * En este ejemplo, tenemos el modelo Pelicula que tiene creada una relación con el modelo Genero.

Nosotros vamos a traer la película con id 1 usando el método findByPk. Pero también es 
necesario obtener el género relacionado a la película.

Para lograr esto debemos pasar, como segundo parámetro del método findByPk, un JSON que tenga 
el atributo include. Este atributo va a ser un array con el listado de todas las relaciones 
que queremos traer asociadas a la película, en nuestro caso, únicamente la relación "genero".

Finalmente vamos a imprimir dentro del método then un console log que nos nuestre el nombre del género: pelicula.genero.nombre
 */

const Pelicula = require('model/pelicula.js');

// tu código aquí
Pelicula.findByPk(1, { include: ['genero'] })
  .then(pelicula => console.log(pelicula.genero.nombre))

/*

Tener creadas relaciones entre objetos nos permite también, a la hora de crear un 
nuevo registro en la base, crear tanto el objeto principal como su relación.

En este caso tenemos un modelo Producto que le pertenece a un usuario (el creador).

Nuestro objetivo va a ser crear un producto cuyo nombre sea "Falcon 9" y crear en el 
mismo método un usuario asociado a ese producto que tenga como nombre "Elon" y como apellido "Musk".

Para lograr esto debemos usar el método create del modelo Producto. El primer parámetro 
de este método va a ser un JSON con las columnas a insertar en la tabla producto (nombre) y, 
a su vez, un atributo con el nombre de la relación y las columnas a insertar en dicha relación. 
Para nuestro caso, el nombre de la relación es "creador" y las columnas a insertar son nombre y apellido.

Por último, el método create va recibir como segundo parámetro un JSON con el atributo 
include que va a tener como valor la constante Creador.

*/

const Sequelize = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('usuarios', {
  nombre: Sequelize.STRING,
  apellido: Sequelize.STRING,
});

const Producto = sequelize.define('productos', {
  nombre: Sequelize.STRING,
  usuario_id: Sequelize.INTEGER,
});

const Creador = Producto.belongsTo(Usuario, { as: 'creador' });

// tu código aquí
Producto.create({
  nombre: 'Falcon 9',
  creador: {
    nombre: 'Elon',
    apellido: 'Musk'
  }
}, {
  include: [Creador]
}
)


/**
 * Relaciones N:M
"Un actor trabaja en muchas películas y una película tiene muchos actores".

Este es el tradicional contexto de las relaciones de muchos a muchos o también llamadas de N a N.

Este particular tipo de relación almacena los datos relacionados en una tabla intermedia, 
también llamada tabla pivot. Pero ¿cómo podemos, desde Sequelize, acceder a los datos de dicha tabla?

Esa respuesta es justamente la que resolveremos en el siguiente video. Así que a tomar nota y a estar atentos a los conceptos que veremos a continuación.
 */

/**
 * Películas de actor
En MySQL, a la hora de indicar relaciones de muchos a muchos, es necesario crear una tabla pivot. 
Algo similar sucede con Sequelize. Para poder relacionar dos modelos a través de la relación belongsToMany, 
primero debemos crear un modelo "pivot".

En este ejemplo, queremos relacionar los modelos pelicula y actor. Para ello, vamos a crear el modelo PeliculaActor. 
Como en la creación de todo modelo, el primer parámetro es el nombre de la tabla, en este caso: "pelicula_actor". 
Como segundo parámetro pasamos un JSON con las columnas y sus propiedades. Al ser la representación de una tabla 
pivot va a tener dos columnas "pelicula_id" y "actor_id".

Además de indicar que cada una de estas columnas es un entero, debemos setear el parámetro references indicando 
los atributos model y key. Model va a ser con qué modelo se relaciona y key a qué columna apunta.

Para la columna "pelicula_id", el model será "Pelicula" y la key "id". Mientras que para la columna "actor_id" el model será "Actor" y la key "id".

¡Manos a la obra!

 */

const Sequelize = require('sequelize');
const sequelize = require('../database');

// tu código aquí
const PeliculaActor = sequelize.define('pelicula_actor', {
  pelicula_id: {
    type: Sequelize.INTEGER,
    references: { model: 'Pelicula', key: 'id' }
  },
  actor_id: {
    type: Sequelize.INTEGER,
    references: { model: 'Actor', key: 'id' }
  }
})
module.exports = PeliculaActor;

/**
 * Relaciones Pivot
Luego de creado el modelo pivot, debemos hacer una relación del tipo belongsTo 
con cada uno de los modelos que se relacionen.

En nuestro ejemplo, necesitaríamos agregar un belongsTo con Pelicula y otro con Actor. 
Como en todos los belongsTo, el primer parámetro va a ser el nombre del modelo y 
el segundo, un JSON indicando el foreignKey (no es necesario configurar el "as").
 */

const Sequelize = require('sequelize');
const sequelize = require('../database');
const Actor = require('model/actor.js');
const Pelicula = require('model/pelicula.js');

const PeliculaActor = sequelize.define('pelicula_actor', {
  pelicula_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Pelicula',
      key: 'id'
    }
  },
  actor_id: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Actor',
      key: 'id'
    }
  }
});

// Tu códigi aquí
PeliculaActor.belongsTo(Pelicula,
  { foreignKey: "pelicula_id" }
)

PeliculaActor.belongsTo(Actor,
  { foreignKey: "actor_id" }
)
module.exports = PeliculaActor;

/**
 * Películas actor, toma 3
El objetivo de este ejercicio es relacionar el modelo Pelicula con Actor a través de una relación de muchos a muchos.

Para indicar esto vamos a emplear el método belongsToMany del modelo Pelicula.

Para la configuración de la relación el foreignKey va a ser la columna llamada "pelicula_id", el alias "actores" y el through va a ser el modelo "PeliculaActor".


El objetivo de este ejercicio es relacionar el modelo Pelicula con Actor a través de una relación de muchos a muchos.

Para indicar esto, vamos a emplear el método belongsToMany del modelo Pelicula.

Para la configuración de la relación el foreignKey va a ser la columna llamada "pelicula_id", el alias "actores" y el through va a ser el modelo PeliculaActor.
 */

const Sequelize = require('sequelize');
const sequelize = require('../database');
const Actor = require('model/actor.js');

const Pelicula = sequelize.define('peliculas', {
  titulo: Sequelize.STRING,
  genero_id: Sequelize.INTEGER,
});

// tu código aquí

Pelicula.belongsToMany(Actor, {
  foreignKey: "pelicula_id",
  as: "actores",
  through: 'PeliculaActor'

})

module.exports = Pelicula;

/**
 * Buscando actores
En este ejemplo, tenemos el modelo Pelicula que tiene una relación de muchos a muchos con Actor.

Nosotros queremos traer toda la información de la película con id 1, pero junto con los actores que tiene asociados.

Para lograr esto, debemos pasar como segundo parámetro del método findByPk un JSON que 
tenga el atributo include. Este atributo va a ser un array con el listado de todas las 
relaciones que queremos traer asociadas a la película, en nuestro caso, únicamente la relación "actores".

Finalmente, vamos a imprimir dentro del método then un console log que nos muestre los 
actores de la película: pelicula:actores.

Dado que la relación es de muchos a muchos, el atributo actores será del tipo array.
 */

const Pelicula = require('model/pelicula.js');

// tu código aquí
Pelicula.findByPk(1, {
  include: ['actores']
}).then(pelicula => console.log(pelicula.actores))


/**
 * Agregando actores
Al crear la relación del tipo belongsToMany entre Pelicula y Actor, Sequelize nos provee 
el método setActores, que nos permite vincular una película con uno o varios actores.

En este ejemplo, ya contamos con una instancia de película. Lo que vamos a hacer, en la 
instancia de película, ejecutar el método setActores pasando como parámetro un array con 
los ids de los actores que queremos vincular. Esto va a generar automáticamente los registros en la tabla pivot.

Vincular los actores 3, 5 y 8.
 */

const Pelicula = require('model/pelicula.js');

Pelicula.findByPk(1).then(pelicula => {
	// tu código aquí
	pelicula.setActores([3, 5, 8])
});



// Integración

//Desafío

/**
 * exerciseProgressIcon
Desafío
Seguimos con nuestro cliente IbeiZon el cual, como ya sabemos, está más que satisfecho con nuestro desempeño.


En esta ocasión, nos solicita seguir trabajando con la misma base de datos, pero ahora sumando otra tabla: 
la de marcas. Pero tranquilos… para ella ya tenemos el modelo listo y se llama Brand.


Lo que van a necesitar ahora es que dentro del modelo de productos (product.js) asociemos la relación 
necesaria para luego poder consultar los productos en conjunto de sus marcas. La relación debe llamarse: brand (OJO: todo en minúsculas).


Recordemos que la estructura de las tablas es así:


Tabla productos: 

id

nombre

descripcion

precio

marca_id


Tabla marcas: 

id

nombre


Con lo anterior podemos definir que “un producto pertenece a una marca” y que “una marca tiene muchos productos”.


Nuestra misión será entonces completar el siguiente código dentro del controlador:
 */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    nombre: DataTypes.STRING(200),
    descripcion: DataTypes.TEXT,
    precio: DataTypes.DECIMAL,
    marca_id: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'productos',
  });

  product.associate = models => {
    product.belongsTo(models.Brand, {
      as: 'brand',
      foreignKey: 'marca_id'
    })
  }

  return product;
};

/**
 * Ahora, nuestra misión será crear una relación opuesta, la de N a 1. Pues, una marca tiene muchos productos.


Teniendo en cuenta que el modelo de marcas (brand.js) ya está creado, deberemos completar dentro del
 mismo la relación que permita consultar todos los productos que pertenecen a una determinada marca.


Nos solicitan que la relación se llame: products.


Completemos entonces el siguiente archivo:
 */
'use strict';

module.exports = (sequelize, DataTypes) => {
  const brand = sequelize.define('Brand', {
    nombre: DataTypes.STRING(),
  }, {
    timestamps: false,
    tableName: 'marcas',
  });


  brand.associate = models => {
    brand.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'marca_id'
    })
  }

  return brand;
};

/**
 * ¡Vaya! Esto suena a una relación de muchos a muchos, ¿no?


Exactamente, así es. Ahora, la base de datos sumó una nueva tabla: colores. Pero el modelo 
también ya nos lo dan hecho y se llama Color.


Nuestra misión será, dentro del modelo de productos (product.js), crear una relación adicional 
que permita consultar los colores que tiene asignado un producto. La relación debe llamarse colors (atención a las minúsculas).


Algo muy importante: como las relaciones de N a M usan una tabla intermedia, lo más seguro es que	
necesitaremos el nombre de ella. En este caso, dicha tabla se llama colores_productos.


Completemos el siguiente código:
 */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    nombre: DataTypes.STRING(200),
    descripcion: DataTypes.TEXT,
    precio: DataTypes.DECIMAL,
  }, {
    timestamps: false,
    tableName: 'productos',
  });

  product.associate = models => {
    product.belongsTo(models.Brand, {
      as: 'brand',
      foreignKey: 'marca_id'
    });

    product.belongsToMany(models.Color, {
      as: 'colors',
      through: 'colores_productos'
    })
  }

  return product;
};


/**
 * Con todo lo anterior, solamente nos queda generar la consulta dentro del controlador para poder ver la marca de un producto y sus colores.


Dentro del controlador (productController.js), completemos la sencilla línea que está haciendo falta.
 */

const db = require('../database/models');

const controller = {
  index: (req, res) => {
    db.Product
      .findAll({
        include: [{ association: 'brand' }, { association: 'colors' }]
      })
      .then(productos => {
        res.send(productos);
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = controller;

