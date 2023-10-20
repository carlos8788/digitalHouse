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

const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Genero = require('model/genero.js');

const Pelicula = sequelize.define('peliculas',{
    titulo: Sequelize.STRING,
    genero_id: Sequelize.INTEGER,
});

Pelicula.associate = modelos => {
    Pelicula.belongsTo(modelos.Genero, {
        as: 'generos',

        foreingKey: 'genre_id'
    })
}


module.exports = Pelicula;